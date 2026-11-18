import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";
import { courses, levels } from "@/data/courses";
import { cities } from "@/data/cities";
import { eligibleStatuses } from "@/data/eligibility";
import { partnerBenefits } from "@/data/partners";
import { partnerImages } from "@/data/media";
import { Photo } from "@/components/Photo";
import { PartnerButton } from "@/components/BookButton";
import {
  AudienceCards,
  BenefitCards,
  Eyebrow,
  ProcessTimeline,
  Watermark,
} from "@/components/PartnerSections";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "Student Compass Education works with education agents, agencies and individuals who refer students. You introduce the student, we manage admissions and keep you updated.",
  alternates: { canonical: "/partners" },
};

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;
const delay = (ms: number): CSSVars => ({ "--reveal-delay": `${ms}ms` });

const faqs = [
  {
    q: "Who can become a partner?",
    a: "Education agents, recruitment and student agencies, and individuals such as teachers, community leaders and alumni who know students looking to study in the UK.",
  },
  {
    q: "Which students can I refer?",
    a: `Students must be ${eligibleStatuses.slice(0, -2).join(", ")}, or have Refugee or Asylum Status. Universities then set their own entry requirements for each course, and our advisers check these with the student.`,
  },
  {
    q: "What happens after I refer a student?",
    a: "An adviser contacts the student, talks through their goals and matches them with suitable courses and campuses. We then manage the application, documents and interview preparation through to enrolment.",
  },
  {
    q: "How will I know how my student is getting on?",
    a: "We keep you updated at every stage, from referral to enrolment, so you never need to chase.",
  },
  {
    q: "How do I get started?",
    a: "Fill in the partner form. Our team will be in touch to talk through how we'll work together.",
  },
];

export default function PartnersPage() {
  const usedLevels = levels.filter((l) => l.id !== "new" && courses.some((c) => c.level === l.id));
  const campusCities = cities.filter((c) => c.id !== "online");
  const { email, phone } = site.contact;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-green-deep pt-20 text-paper">
        <Watermark className="-left-64 -top-40 -z-10 h-[44rem] w-[44rem]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[6fr_5fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <div className="rise">
              <Eyebrow>Partnerships</Eyebrow>
            </div>
            <h1
              className="rise mt-5 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
              style={{ "--rise-delay": "100ms" } as CSSVars}
            >
              You refer. <span className="text-brass">We handle the rest.</span>
            </h1>
            <p
              className="rise mt-6 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl"
              style={{ "--rise-delay": "200ms" } as CSSVars}
            >
              Student Compass Education works with education agents, agencies and individuals
              across the UK. Introduce a student, and our advisers take care of course matching,
              applications and enrolment, keeping you updated at every stage.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ "--rise-delay": "300ms" } as CSSVars}>
              <PartnerButton variant="brass" size="lg" />
              <a
                href="#process"
                className="inline-flex h-14 items-center rounded-full border-2 border-paper/60 px-7 font-semibold text-paper transition-colors hover:bg-paper hover:text-green"
              >
                See how it works
              </a>
            </div>

            <dl
              className="rise mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-paper/15 pt-8"
              style={{ "--rise-delay": "400ms" } as CSSVars}
            >
              {[
                { v: courses.length, l: "courses" },
                { v: campusCities.length, l: "UK cities" },
                { v: usedLevels.length, l: "study levels" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <dt className="order-2 mt-1 text-sm text-paper/70">{s.l}</dt>
                  <dd className="order-1 text-4xl font-extrabold tracking-tight text-paper">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal="zoom" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rounded-tl-[7rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Photo
                src={partnerImages.hero}
                alt="Two people shaking hands across a desk"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-paper p-5 text-ink shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)] sm:left-auto sm:right-8 sm:w-80">
              <p className="text-sm font-semibold text-brass-dark">One partner</p>
              <p className="mt-1 font-bold leading-snug text-green">
                From referral to enrolment, with updates at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section aria-labelledby="who-title" className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-2xl" data-reveal>
            <Eyebrow className="text-brass-dark">Who we work with</Eyebrow>
            <h2 id="who-title" className="mt-4 text-4xl font-extrabold text-green sm:text-5xl">
              Built for the people students already trust
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Whether you place hundreds of students a year or know one person ready to study,
              there&apos;s a way to work with us.
            </p>
          </div>
          <div className="mt-14">
            <AudienceCards />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section aria-labelledby="why-title" className="relative isolate overflow-hidden bg-green-deep text-paper">
        <Watermark className="-right-56 top-1/2 -z-10 h-[44rem] w-[44rem] -translate-y-1/2" />
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <div data-reveal>
            <Eyebrow>Working with us</Eyebrow>
            <h2 id="why-title" className="mt-4 text-4xl font-bold sm:text-5xl">
              Why partner with us
            </h2>
          </div>
          <div className="mt-14">
            <BenefitCards items={partnerBenefits} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" aria-labelledby="process-title" className="scroll-mt-20 bg-green text-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center" data-reveal>
            <Eyebrow>One clear process</Eyebrow>
            <h2 id="process-title" className="mt-4 text-4xl font-bold sm:text-5xl">
              From introduction to enrolment
            </h2>
          </div>
          <div className="mt-16">
            <ProcessTimeline detailed />
          </div>
          <p data-reveal style={delay(300)} className="mt-14 text-center text-lg text-paper/75">
            One partner. One clear process.
          </p>
        </div>
      </section>

      {/* Students you can refer */}
      <section aria-labelledby="refer-title" className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-28">
          <div data-reveal="left">
            <Eyebrow className="text-brass-dark">Eligibility</Eyebrow>
            <h2 id="refer-title" className="mt-4 text-4xl font-extrabold text-green sm:text-5xl">
              Students you can refer
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Students must have one of these residency statuses. Universities set their own entry
              requirements for each course.
            </p>
            <Link
              href="/eligibility"
              className="mt-6 inline-block font-semibold text-brass-dark underline underline-offset-4 hover:text-green"
            >
              Read the full eligibility guide
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div data-reveal style={delay(80)} className="rounded-3xl bg-white p-7 ring-1 ring-line sm:col-span-2">
              <h3 className="text-lg font-bold text-green">Residency status</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {eligibleStatuses.map((s) => (
                  <li key={s} className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-[0.95rem] font-medium text-green">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-brass-dark">
                      <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={delay(160)} className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <h3 className="text-lg font-bold text-green">Study levels</h3>
              <ul className="mt-4 space-y-2.5 text-muted">
                {usedLevels.map((l) => (
                  <li key={l.id}>
                    <Link href={`/courses?level=${l.id}`} className="hover:text-green hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={delay(240)} className="rounded-3xl bg-white p-7 ring-1 ring-line">
              <h3 className="text-lg font-bold text-green">Campus cities</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-muted">
                {cities.map((c) => (
                  <li key={c.id}>
                    <Link href={`/courses?city=${c.id}`} className="hover:text-green hover:underline">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-28">
          <div data-reveal>
            <h2 id="faq-title" className="text-4xl font-extrabold text-green sm:text-5xl">
              Questions from partners
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
              Anything else you&apos;d like to know? Get in touch and we&apos;ll be happy to help.
            </p>
            <ul className="mt-6 space-y-2 font-semibold text-green">
              {phone && (
                <li>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="underline decoration-brass underline-offset-4 hover:text-brass-dark">
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li className="[overflow-wrap:anywhere]">
                  <a href={`mailto:${email}`} className="underline decoration-brass underline-offset-4 hover:text-brass-dark">
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="border-t border-green/20">
            {faqs.map((f, i) => (
              <details key={f.q} data-reveal style={delay(i * 70)} className="faq group border-b border-green/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-xl font-bold text-green [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-green/25 transition-colors group-open:border-brass group-open:bg-brass">
                    <span className="absolute h-0.5 w-3.5 rounded-full bg-green" />
                    <span className="absolute h-3.5 w-0.5 rounded-full bg-green transition-transform duration-300 group-open:rotate-90 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="faq-body max-w-2xl pb-7 pr-12 text-lg leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-brass">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between lg:py-20">
          <div className="max-w-2xl" data-reveal>
            <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">Ready to refer your first student?</h2>
            <p className="mt-3 text-lg leading-relaxed text-ink/80">
              Fill in the partner form and our team will be in touch.
            </p>
          </div>
          <div data-reveal style={delay(120)}>
            <PartnerButton variant="green" size="lg" className="shrink-0" />
          </div>
        </div>
      </section>
    </>
  );
}
