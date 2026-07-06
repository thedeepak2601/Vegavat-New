export async function onRequest(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const token = body.token;
    if (!token) return new Response(JSON.stringify({ success: false, error: 'missing-token' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

    const secret = env.RECAPTCHA_SECRET;
    if (!secret) return new Response(JSON.stringify({ success: false, error: 'missing-secret' }), { status: 500, headers: { 'Content-Type': 'application/json' } });

    const params = new URLSearchParams();
    params.append('secret', secret);
    params.append('response', token);

    const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: params,
    });

    const json = await verify.json();
    return new Response(JSON.stringify(json), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
