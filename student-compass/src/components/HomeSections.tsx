import Link from "next/link";
import { courses } from "@/data/courses";
import { BookButton } from "./BookButton";

const reasons = [
  {
    title: "A free first session",
    text: "Talk through your options with an adviser at no cost, and leave with a clear idea of the routes that suit you.",
  },
  {
    title: "A route for every starting point",
    text: `Foundation years if you don't have A-levels, HNDs and foundation degrees, top-ups and master's. ${courses.length} courses to choose from.`,
  },
  {
    title: "Ten cities, plus online",
    text: "Study in London, Manchester, Birmingham, Leeds and more, or take a part-time master's from home.",
  },
  {
    title: "Help with your application",
    text: "We help you prepare your application and personal statement, and keep in touch until you hear back.",
  },
  {
    title: "Straight answers",
    text: "Universities set their own entry requirements and make every offer. We'll never promise you a place.",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id="why-title" className="text-4xl font-extrabold text-green sm:text-5xl">
            Why choose us
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            Choosing a course is a big decision. We keep the advice personal, practical and honest.
          </p>
          <BookButton variant="green" className="mt-8" />
        </div>
        <ul className="border-t border-green/20">
          {reasons.map((r) => (
            <li key={r.title} className="grid gap-2 border-b border-green/20 py-7 sm:grid-cols-[2.25rem_1fr] sm:gap-x-4">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 h-6 w-6 text-brass-dark">
                <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-green sm:text-2xl">{r.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-muted">{r.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export const guidelineSteps = [
  {
    title: "Book a free session",
    text: "Fill in a short form and we'll contact you to arrange a time that suits you.",
  },
  {
    title: "Check your eligibility",
    text: "We look at your qualifications, work experience and circumstances together.",
  },
  {
    title: "Choose your course and city",
    text: "Compare routes and campuses, then shortlist the options that fit.",
  },
  {
    title: "Apply with our support",
    text: "We help you complete your application and prepare for any interview or assessment.",
  },
  {
    title: "Get ready to start",
    text: "From your offer to your first day, we're here to answer your questions.",
  },
];

export function Guideline() {
  return (
    <section aria-labelledby="guide-title" className="bg-green text-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 id="guide-title" className="text-4xl font-extrabold sm:text-5xl">
              Our guideline
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-paper/80">
              Five steps from your first question to your first day.
            </p>
          </div>
          <Link href="/how-it-works" className="font-semibold text-brass-light underline decoration-brass/60 underline-offset-4 hover:decoration-brass-light">
            Read the full process
          </Link>
        </div>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          <span aria-hidden="true" className="absolute left-[1.375rem] top-2 bottom-2 w-px bg-paper/25 lg:left-2 lg:right-[calc((100%_-_6rem)/5_-_1.375rem)] lg:top-[1.375rem] lg:bottom-auto lg:h-px lg:w-auto" />
          {guidelineSteps.map((s, i) => (
            <li key={s.title} className="relative grid grid-cols-[2.75rem_1fr] gap-5 lg:block">
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-brass bg-green text-lg font-bold text-brass">
                {i + 1}
              </span>
              <div className="lg:mt-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-paper/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ClosingCta({
  title = "Not sure where to start?",
  text = "That's what the free session is for. Tell us a little about yourself and we'll take it from there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brass">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-ink/80">{text}</p>
        </div>
        <BookButton variant="green" size="lg" className="shrink-0" />
      </div>
    </section>
  );
}
