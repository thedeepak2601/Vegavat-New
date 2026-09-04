"use client";

/**
 * Last-resort boundary for errors thrown in the root layout itself. It
 * replaces the whole document, so unlike error.tsx it must render its own
 * <html> and <body> — and it cannot rely on the layout's fonts or providers.
 * Styles are inline for the same reason.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "24px",
          textAlign: "center",
          background: "#121212",
          color: "#fff",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "56px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#6200EA",
            }}
          >
            Oops
          </p>
          <h1 style={{ margin: "12px 0 0", fontSize: "22px", fontWeight: 700 }}>
            Something went wrong
          </h1>
          <p
            style={{
              margin: "8px auto 0",
              maxWidth: "28rem",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            The site hit an unexpected problem while loading. Please try again.
          </p>

          {error.digest && (
            <p
              style={{
                marginTop: "16px",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Reference {error.digest}
            </p>
          )}

          <button
            onClick={reset}
            style={{
              marginTop: "28px",
              cursor: "pointer",
              border: 0,
              borderRadius: "9999px",
              background: "#6200EA",
              color: "#fff",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
