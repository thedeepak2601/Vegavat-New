# LinkedIn feed setup

The homepage section "Latest updates from our team" renders posts from the
Vegavat LinkedIn page. The code is finished and deployed; it needs LinkedIn
access that only LinkedIn can grant.

- Edge function: `functions/linkedin-posts.js` (live at `/linkedin-posts`)
- Types + fallback: `src/lib/linkedin.ts`
- Section: `src/components/home/LinkedInFeed.tsx`

Check the current state any time:

```bash
curl -s https://www.vegavat.com/linkedin-posts
```

`{"posts":[],"error":"missing-org-id"}` means no credentials are configured
yet. The section falls back to a "Follow us on LinkedIn" panel whenever the
feed is empty, so a failure here never looks broken.

## Known values

| Thing | Value |
| --- | --- |
| Organization ID | `109667353` |
| App | "Vegavat Social Posts" |
| Client ID | `77dtio7b6zeoaz` (public, safe to commit) |
| Authorized redirect URL | `https://www.vegavat.com` (already set) |
| Access token lifetime | 2 months — use the refresh token |

Client secrets are **not** recorded here. They live only in Cloudflare's
encrypted environment variables.

## Step 1 — get the permission (this is the blocker)

The app currently shows **"No permissions added"** under Auth → OAuth 2.0
scopes. Reading an organization's own posts requires the `r_organization_social`
scope, which comes from the **Community Management API** product.

1. LinkedIn Developer portal → the app → **Products**
2. Request **Community Management API**
3. Complete the company-page verification it asks for — a Vegavat page admin
   has to approve the app against the page
4. Wait for LinkedIn to grant it. This is a manual review on their side.

When it is granted, `r_organization_social` appears under OAuth 2.0 scopes.
Nothing below will work until then; the token request simply refuses the scope.

There is no public RSS feed or unauthenticated endpoint for company posts.
Third-party "LinkedIn to RSS" services scrape the site, break often, and are
against LinkedIn's terms — not worth wiring into the homepage.

## Step 2 — authorize as a page admin

Open this in a browser while signed in as a Vegavat page admin:

```
https://www.linkedin.com/oauth/v2/authorization
  ?response_type=code
  &client_id=77dtio7b6zeoaz
  &redirect_uri=https%3A%2F%2Fwww.vegavat.com
  &scope=r_organization_social
  &state=vegavat123
```

(join those lines into one URL). After approving, LinkedIn redirects to
`https://www.vegavat.com/?code=XXXX&state=vegavat123`. Copy the `code` — it
expires in about 30 seconds, so do step 3 straight away.

## Step 3 — exchange the code for tokens

Run locally, substituting the code and your current client secret:

```bash
curl -X POST https://www.linkedin.com/oauth/v2/accessToken \
  -d grant_type=authorization_code \
  -d code='PASTE_CODE' \
  -d client_id=77dtio7b6zeoaz \
  -d client_secret='PASTE_SECRET' \
  -d redirect_uri=https://www.vegavat.com
```

The response contains `access_token` and `refresh_token`.

## Step 4 — store them in Cloudflare

Cloudflare Pages → **vegavat** → Settings → Environment variables →
Production. Add each as **Encrypted**:

| Variable | Value |
| --- | --- |
| `LINKEDIN_ORG_ID` | `109667353` |
| `LINKEDIN_ACCESS_TOKEN` | from step 3 |
| `LINKEDIN_REFRESH_TOKEN` | from step 3 — without it the feed dies after 2 months |
| `LINKEDIN_CLIENT_ID` | `77dtio7b6zeoaz` |
| `LINKEDIN_CLIENT_SECRET` | current secret |

The function refreshes the access token itself when the refresh token and
client credentials are present, so the feed keeps working past the 2-month
expiry. Redeploy (or wait for the next deploy) for new variables to take
effect, then re-run the `curl` at the top — it should return real posts.

## Meanwhile: pinning posts by hand

`FALLBACK_POSTS` in `src/lib/linkedin.ts` accepts manually entered posts and is
used whenever the live feed is empty. Get a permalink from the post's ⋯ menu →
*Copy link to post*. This is a stopgap, not automation — entries must be added
by hand and removed once the API is live.
