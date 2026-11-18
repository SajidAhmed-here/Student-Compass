import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper pt-20">
      <div className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
        <h1 className="text-5xl font-extrabold text-green">We couldn&apos;t find that page</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The link may be out of date. Try the course list, or head back to the home page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/courses" className="inline-flex h-12 items-center rounded-full bg-green px-5 font-semibold text-paper hover:bg-green-soft">
            Browse courses
          </Link>
          <Link href="/" className="inline-flex h-12 items-center rounded-full border-2 border-green px-5 font-semibold text-green hover:bg-green hover:text-paper">
            Go to home page
          </Link>
        </div>
      </div>
    </section>
  );
}
