import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { BookButton } from "@/components/BookButton";
import { ClosingCta } from "@/components/HomeSections";
import { pageImages } from "@/data/media";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Student Compass Education helps students find a UK course that fits their goals and supports them through their application.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "No promises we can't keep",
    text: "Only universities make offers. We'll never guarantee you a place.",
  },
  {
    title: "Plain English",
    text: "We explain routes, requirements and next steps without jargon.",
  },
  {
    title: "Your details, your choice",
    text: "We only share your details with a university when you decide to apply.",
  },
  {
    title: "Your decision",
    text: "Our job is to help you choose with confidence, whichever course you pick.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Student Compass Education"
        lede="We help students find a UK course that fits their goals, and support them from the first conversation to their first day."
        image={{ src: pageImages.about, alt: "A group of students smiling together outdoors" }}
      />

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:gap-20 lg:py-24">
          <div>
            <h2 className="text-3xl font-extrabold text-green sm:text-4xl">The problem</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Choosing a course means sorting through hundreds of options, entry requirements
              written in unfamiliar terms, and advice that isn&apos;t always clear about who it
              serves. Students without A-levels, or returning to education after a break, often
              don&apos;t realise how many routes are open to them.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-green sm:text-4xl">Our approach</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We start with a free conversation about where you are and where you want to go. Then
              we match you with courses that fit, from foundation years to master&apos;s, in cities
              across the UK, and help you put together a strong application.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="bg-green text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 id="principles-title" className="max-w-2xl text-4xl font-extrabold sm:text-5xl">
            What we stand by
          </h2>
          <ul className="mt-14 grid gap-x-12 gap-y-10 border-t border-paper/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <li key={p.title}>
                <h3 className="text-xl font-bold text-brass-light">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/80">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-20 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-extrabold text-green sm:text-4xl">
            See what you could study.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center rounded-full border-2 border-green px-5 font-semibold text-green hover:bg-green hover:text-paper"
            >
              Browse courses
            </Link>
            <BookButton />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
