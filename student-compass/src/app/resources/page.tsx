import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Photo } from "@/components/Photo";
import { ClosingCta } from "@/components/HomeSections";
import { guides } from "@/data/guides";
import { pageImages } from "@/data/media";

export const metadata: Metadata = {
  title: "Resources",
  description: "Plain-English guides to entry requirements, study levels and preparing to apply.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  const [featured, ...rest] = guides;
  return (
    <>
      <PageHeader
        title="Resources"
        lede="Plain-English guides to help you choose a course and apply with confidence. For official rules, always check the university and GOV.UK."
      />

      <section aria-label="Guides" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <Link
            href={`/resources/${featured.slug}`}
            data-reveal
            className="group grid overflow-hidden rounded-[2rem] border border-line bg-white transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(32,54,56,0.45)] md:grid-cols-2"
          >
            <div className="relative min-h-64 overflow-hidden md:min-h-96">
              <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[var(--ease-out-quart)] group-hover:scale-105">
                <Photo src={pageImages.guide} alt="" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-sm font-semibold text-brass-dark">{featured.category}</p>
              <h2 className="mt-3 text-3xl font-extrabold text-green group-hover:underline sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{featured.summary}</p>
              <p className="mt-6 text-sm text-muted">{featured.readingMinutes} minute read</p>
            </div>
          </Link>

          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((g) => (
              <li key={g.slug} data-reveal>
                <Link
                  href={`/resources/${g.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-line bg-white p-8 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1 hover:border-green hover:shadow-[0_28px_56px_-28px_rgba(32,54,56,0.45)] sm:p-10"
                >
                  <p className="text-sm font-semibold text-brass-dark">{g.category}</p>
                  <h2 className="mt-3 text-2xl font-bold text-green group-hover:underline">{g.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted">{g.summary}</p>
                  <p className="mt-auto pt-6 text-sm text-muted">{g.readingMinutes} minute read</p>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted">
            These guides are general information, not official advice. Universities set their own
            requirements, and visa and student finance rules come from the UK government.
          </p>
        </div>
      </section>

      <ClosingCta title="Have a question these guides don't answer?" text="Ask an adviser in a free session." />
    </>
  );
}
