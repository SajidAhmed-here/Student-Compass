import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { BookButton } from "@/components/BookButton";
import { ClosingCta } from "@/components/HomeSections";
import { courses, type LevelId } from "@/data/courses";
import { pageImages } from "@/data/media";
import { eligibleStatuses } from "@/data/eligibility";

export const metadata: Metadata = {
  title: "Eligibility",
  description:
    "Students must be Born British, British, Settled, Pre-Settled, or have Refugee or Asylum Status. See what each course route asks for and check if you're eligible.",
  alternates: { canonical: "/eligibility" },
};

const routes: { level: LevelId; title: string; who: string; length: string; detail: string }[] = [
  {
    level: "foundation-year",
    title: "Degree with a foundation year",
    who: "You don't have the usual entry qualifications for a degree, such as A-levels.",
    length: "Usually 4 years full-time, including the foundation year.",
    detail:
      "The foundation year builds your study skills and subject knowledge before you start the degree itself. Many students on these courses are returning to education after a break. Some universities ask for an interview, a short written task or relevant experience instead of formal grades.",
  },
  {
    level: "hnd",
    title: "Higher National Diploma (HND)",
    who: "You want a practical, career-focused qualification.",
    length: "Usually 2 years full-time.",
    detail:
      "HNDs focus on skills employers use. Once you've finished, you can often go on to a top-up degree to gain a full honours degree.",
  },
  {
    level: "foundation-degree",
    title: "Foundation degree (FdA / FdSc)",
    who: "You'd like a shorter degree-level course to start with.",
    length: "Usually 2 years full-time.",
    detail:
      "A foundation degree is roughly the same level as the first two years of an honours degree. You can top it up to a full degree later.",
  },
  {
    level: "top-up",
    title: "Top-up degree",
    who: "You already have an HND, a foundation degree or a similar qualification.",
    length: "Usually 1 year full-time.",
    detail:
      "The subject of your existing qualification normally needs to relate to the top-up degree you choose.",
  },
  {
    level: "undergraduate",
    title: "Bachelor's degree",
    who: "You have qualifications such as A-levels, a BTEC or an Access to Higher Education Diploma.",
    length: "Usually 3 years full-time.",
    detail: "Universities set the grades or points they ask for, and these vary by course.",
  },
  {
    level: "masters",
    title: "Master's degree",
    who: "You have an undergraduate degree, or in some cases relevant work experience.",
    length: "Usually 1 year full-time. Online courses are part-time and take longer.",
    detail:
      "Some master's courses accept graduates from any subject, while others ask for a related degree.",
  },
];

const factors = [
  {
    title: "Your qualifications",
    text: "What you've studied, where and when, including qualifications from outside the UK. Universities decide how they compare.",
  },
  {
    title: "Your English",
    text: "If English isn't your first language, you may need to show your level, for example with a GCSE, Functional Skills or an approved test.",
  },
  {
    title: "Your residency status",
    text: "You must be Born British, British, Settled, Pre-Settled, or have Refugee or Asylum Status. Your status can also affect the fees you pay and whether you can get student finance.",
  },
  {
    title: "Your experience",
    text: "Work and life experience can count, especially for foundation year courses and master's courses.",
  },
];

const bring = [
  "Proof of your residency status, such as a passport or share code",
  "The names of your qualifications, your grades and the year you finished",
  "A rough outline of any work experience",
  "The subjects, study levels and cities you're interested in",
  "Any questions about fees, timetables or start dates",
];

export default function EligibilityPage() {
  return (
    <>
      <PageHeader
        title="Am I eligible?"
        lede="To study with our support, you must be Born British, British, Settled, Pre-Settled, or have Refugee or Asylum Status. Universities then set their own entry requirements for each course. In your free session we'll check both with you."
        image={{ src: pageImages.eligibility, alt: "A student writing notes at a desk" }}
      >
        <BookButton size="lg">Check my eligibility</BookButton>
      </PageHeader>

      <section aria-labelledby="status-title" className="bg-green text-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20">
          <div>
            <h2 id="status-title" className="text-4xl font-extrabold sm:text-5xl">
              Who can apply
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-paper/80">
              Students must have one of these residency statuses.
            </p>
          </div>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {eligibleStatuses.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-2xl border border-paper/15 bg-green-soft/60 px-5 py-4 text-lg font-semibold"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0 text-brass">
                    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/75">
              Not sure which status you have? Book a free session and we&apos;ll check it with you.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="routes-title" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 id="routes-title" className="text-4xl font-extrabold text-green sm:text-5xl">
            Routes and what they ask for
          </h2>
          <div className="mt-12 border-t border-green/20">
            {routes.map((r) => {
              const count = courses.filter((c) => c.level === r.level).length;
              return (
                <article key={r.level} className="grid gap-4 border-b border-green/20 py-9 lg:grid-cols-[4fr_8fr] lg:gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-green">{r.title}</h3>
                    {count > 0 && (
                      <Link
                        href={`/courses?level=${r.level}`}
                        className="mt-3 inline-block text-[0.95rem] font-semibold text-brass-dark underline underline-offset-4 hover:text-green"
                      >
                        View {count} {count === 1 ? "course" : "courses"}
                      </Link>
                    )}
                  </div>
                  <dl className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <dt className="text-sm font-semibold text-green">Suits you if</dt>
                      <dd className="mt-1 leading-relaxed text-ink">{r.who}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-green">Length</dt>
                      <dd className="mt-1 leading-relaxed text-ink">{r.length}</dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="sr-only">More detail</dt>
                      <dd className="max-w-2xl leading-relaxed text-muted">{r.detail}</dd>
                    </div>
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="factors-title" className="border-y border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <h2 id="factors-title" className="text-3xl font-extrabold text-green sm:text-4xl">
              What universities look at
            </h2>
            <ul className="mt-8 space-y-7">
              {factors.map((f) => (
                <li key={f.title}>
                  <h3 className="text-xl font-bold text-green">{f.title}</h3>
                  <p className="mt-1.5 max-w-lg leading-relaxed text-muted">{f.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-green p-8 text-paper sm:p-10 lg:self-start">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Before your session</h2>
            <p className="mt-3 leading-relaxed text-paper/80">
              You don&apos;t need to send any documents. It helps to have these to hand:
            </p>
            <ul className="mt-6 space-y-4">
              {bring.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brass">
                    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
            <BookButton className="mt-8" />
          </div>
        </div>
      </section>

      <ClosingCta
        title="Not sure which route fits?"
        text="Tell us where you're starting from and we'll show you the courses you can apply for."
      />
    </>
  );
}
