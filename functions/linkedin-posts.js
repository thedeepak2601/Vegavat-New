// Cloudflare Pages Function: serves the Vegavat LinkedIn page's recent posts.
//
// The site is a static export, so this edge function is what holds the
// credentials and talks to LinkedIn. Configure these as ENCRYPTED environment
// variables in Cloudflare Pages → Settings → Environment variables:
//
//   LINKEDIN_ORG_ID        numeric organization id (e.g. 12345678)
//   LINKEDIN_ACCESS_TOKEN  member access token with r_organization_social
//   LINKEDIN_REFRESH_TOKEN optional; preferred, avoids 60-day expiry
//   LINKEDIN_CLIENT_ID     required only when refreshing
//   LINKEDIN_CLIENT_SECRET required only when refreshing
//   LINKEDIN_API_VERSION   optional override, defaults below
//
// Always responds 200 with { posts: [...] }. On any failure it returns an empty
// list plus a reason, so the homepage can fall back instead of showing an error.

const DEFAULT_VERSION = "202506";
const CACHE_SECONDS = 1800; // 30 min — LinkedIn rate limits are not generous

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${CACHE_SECONDS}`,
    },
  });

/** Trade the refresh token for a fresh access token, else use a static one. */
async function getAccessToken(env) {
  if (env.LINKEDIN_REFRESH_TOKEN && env.LINKEDIN_CLIENT_ID && env.LINKEDIN_CLIENT_SECRET) {
    try {
      const res = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: env.LINKEDIN_REFRESH_TOKEN,
          client_id: env.LINKEDIN_CLIENT_ID,
          client_secret: env.LINKEDIN_CLIENT_SECRET,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.access_token) return data.access_token;
      }
    } catch {
      // fall through to the static token
    }
  }
  return env.LINKEDIN_ACCESS_TOKEN || null;
}

/**
 * Images come back as URNs that need a second lookup. Best effort only —
 * a post without a resolved image still renders, just text-only.
 */
async function resolveImages(urns, token, version) {
  if (!urns.length) return {};
  try {
    const ids = urns.map((u) => encodeURIComponent(u)).join(",");
    const res = await fetch(`https://api.linkedin.com/rest/images?ids=List(${ids})`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "LinkedIn-Version": version,
        "X-Restli-Protocol-Version": "2.0.0",
      },
    });
    if (!res.ok) return {};
    const data = await res.json();
    const out = {};
    for (const [urn, value] of Object.entries(data.results || {})) {
      if (value?.downloadUrl) out[urn] = value.downloadUrl;
    }
    return out;
  } catch {
    return {};
  }
}

function normalize(el, images) {
  const urn = el.id || "";
  const mediaUrn = el.content?.media?.id || null;
  return {
    id: urn,
    text: el.commentary || "",
    url: urn ? `https://www.linkedin.com/feed/update/${urn}` : null,
    createdAt: el.createdAt || el.firstPublishedAt || null,
    image: (mediaUrn && images[mediaUrn]) || el.content?.article?.thumbnail || null,
    articleTitle: el.content?.article?.title || null,
  };
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const count = Math.min(Number(url.searchParams.get("count")) || 6, 20);

  // Serve a cached copy when we have one.
  const cache = caches.default;
  const cacheKey = new Request(`${url.origin}/linkedin-posts?count=${count}`, { method: "GET" });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  if (!env.LINKEDIN_ORG_ID) return json({ posts: [], error: "missing-org-id" });

  const token = await getAccessToken(env);
  if (!token) return json({ posts: [], error: "missing-token" });

  const version = env.LINKEDIN_API_VERSION || DEFAULT_VERSION;
  const author = encodeURIComponent(`urn:li:organization:${env.LINKEDIN_ORG_ID}`);

  try {
    const res = await fetch(
      `https://api.linkedin.com/rest/posts?author=${author}&q=author&count=${count}&sortBy=LAST_MODIFIED`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "LinkedIn-Version": version,
          "X-Restli-Protocol-Version": "2.0.0",
        },
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      return json({ posts: [], error: `linkedin-${res.status}`, detail: detail.slice(0, 300) });
    }

    const data = await res.json();
    const elements = Array.isArray(data.elements) ? data.elements : [];

    const mediaUrns = [
      ...new Set(elements.map((e) => e.content?.media?.id).filter(Boolean)),
    ];
    const images = await resolveImages(mediaUrns, token, version);

    const posts = elements
      .map((e) => normalize(e, images))
      .filter((p) => p.id && (p.text || p.image));

    const response = json({ posts });
    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (err) {
    return json({ posts: [], error: "fetch-failed", detail: String(err).slice(0, 300) });
  }
}
