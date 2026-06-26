import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-charcoal px-6 text-center text-white">
      <div>
        <p className="text-7xl font-extrabold heading-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mt-2 text-white/60">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-primary mt-8">Back to Home →</Link>
      </div>
    </section>
  );
}
