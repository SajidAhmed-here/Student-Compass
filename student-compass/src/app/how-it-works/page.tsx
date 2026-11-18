import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { pageImages } from "@/data/media";
import { BookButton } from "@/components/BookButton";
import { ClosingCta } from "@/components/HomeSections";
import { cities } from "@/data/cities";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From your free session to your first day: how Student Compass Education helps you choose a UK course and apply.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    title: "Book a free session",
    text: "Fill in a short form with your name, contact details and what you'd like to study. We'll get in touch to arrange a time by phone or video call.",
  },
  {
    title: "Check your eligibility",
    text: "We talk through your qualifications, experience and circumstances, and explain which routes are open to you, from foundation years to master's courses.",
  },
  {
    title: "Choose your course and city",
    text: "We compare courses, campuses and start dates with you, so you can shortlist the options that fit your goals and your life.",
  },
  {
    title: "Apply with our support",
    text: "We help you complete your application and personal statement, and prepare you for any interview or assessment the university asks for.",
  },
  {
    title: "Get ready to start",
    text: "Once the university makes its decision, we help you understand the next steps, from accepting an offer to enrolment.",
  },
];

const roles = [
  {
    title: "What we do",
    items: [
      "Explain your options in plain English",
      "Help you check eligibility for the courses you like",
      "Support you with your application and personal statement",
      "Keep in touch until you've heard back",
    ],
  },
  {
    title: "What the university does",
    items: [
      "Sets entry requirements and fees",
      "Assesses your application",
      "Runs any interview or assessment",
      "Makes every offer and admission decision",
    ],
  },
];

const faqs = [
  {
    q: "Is the session really free?",
    a: "Yes. Booking a session and talking through your options with an adviser costs nothing.",
  },
  {
    q: "I don't have A-levels. Can I still get a degree?",
    a: "Often, yes. Degrees with a foundation year are designed for students without standard entry qualifications. We'll check what the course you want asks for.",
  },
  {
    q: "Can you guarantee me a place?",
    a: "No. Only the university can assess your application and make an offer. We help you put forward the strongest application you can.",
  },
  {
    q: "Is Student Compass Education a university?",
    a: "No. We're an independent education consultancy. We help you choose a course and apply to the university that offers it.",
  },
  {
    q: "Where can I study?",
    a: `Our courses run in ${cities
      .filter((c) => c.id !== "online")
      .map((c) => c.name)
      .join(", ")
      .replace(/, ([^,]*)$/, " and $1")}. Some master's courses are also available online.`,
  },
  {
    q: "Can I study part-time or online?",
    a: "Our online master's courses are part-time. For other courses, ask us in your session about timetables and study patterns.",
  },
  {
    q: "Do you give visa advice?",
    a: "No. For visa questions, use the official guidance on GOV.UK and the information your university provides.",
  },
  {
    q: "What happens after I book?",
    a: "An adviser will contact you by phone or email to arrange a time for your session.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        title="How it works"
        lede="We help you find the right course and apply. The university makes the decisions. Here's what happens at each step."
        image={{ src: pageImages.howItWorks, alt: "Students looking at a laptop together and smiling" }}
      >
        <BookButton size="lg" />
      </PageHeader>

      <section aria-labelledby="steps-title" className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 id="steps-title" className="sr-only">Steps</h2>
          <ol className="relative">
            <span aria-hidden="true" className="absolute left-[1.5rem] top-3 bottom-3 w-px bg-green/20" />
            {steps.map((s, i) => (
              <li key={s.title} data-reveal className="relative grid grid-cols-[3rem_1fr] gap-6 pb-12 last:pb-0">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-bold text-brass">
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-green">{s.title}</h3>
                  <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted">{s.text}</p>
                  {i === 0 && <BookButton variant="outline" size="sm" className="mt-5" />}
                  {i === 1 && (
                    <Link href="/eligibility" className="mt-4 inline-block font-semibold text-brass-dark underline underline-offset-4 hover:text-green">
                      See what each route asks for
                    </Link>
                  )}
                  {i === 2 && (
                    <Link href="/courses" className="mt-4 inline-block font-semibold text-brass-dark underline underline-offset-4 hover:text-green">
                      Browse courses
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="roles-title" className="border-y border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <h2 data-reveal id="roles-title" className="text-3xl font-extrabold text-green sm:text-4xl">
            Who does what
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {roles.map((r, i) => (
              <div key={r.title} className={`rounded-[2rem] p-8 sm:p-10 ${i === 0 ? "bg-green text-paper" : "border border-green/20 bg-paper text-ink"}`}>
                <h3 className={`text-2xl font-bold ${i === 0 ? "text-paper" : "text-green"}`}>{r.title}</h3>
                <ul className="mt-6 space-y-3">
                  {r.items.map((it) => (
                    <li key={it} data-reveal className="flex gap-3 leading-relaxed">
                      <span aria-hidden="true" className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-brass" : "bg-green"}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[4fr_8fr] lg:gap-16 lg:py-24">
          <div>
            <h2 data-reveal id="faq-title" className="text-3xl font-extrabold text-green sm:text-4xl">
              Questions students ask
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Something else on your mind? Ask us in your free session.
            </p>
          </div>
          <div className="border-t border-green/20">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-green/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold text-green [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-45">
                    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
