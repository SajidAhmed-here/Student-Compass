import Image from "next/image";
import Link from "next/link";
import { audiences, homeBenefits, processSteps, type BenefitIcon } from "@/data/partners";
import { Photo } from "./Photo";
import { PartnerButton } from "./BookButton";

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;
const delay = (ms: number): CSSVars => ({ "--reveal-delay": `${ms}ms` });

/** Large, faint compass emblem used behind dark sections. */
export function Watermark({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute select-none opacity-[0.06] ${className}`}>
      <Image src="/emblem.png" alt="" width={800} height={797} className="drift h-full w-full object-contain grayscale" />
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-brass ${className}`}>{children}</p>
  );
}

function Icon({ name }: { name: BenefitIcon }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-brass">
      {name === "institution" && (
        <g {...common}>
          <path d="M6 18 24 7l18 11H6Z" />
          <path d="M6 18h36" />
          <circle cx="24" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
          <path d="M11 22v14M18.5 22v14M29.5 22v14M37 22v14" strokeWidth="3" />
          <path d="M7 39h34M5 42.5h38" />
        </g>
      )}
      {name === "briefcase" && (
        <g {...common}>
          <rect x="6" y="14" width="36" height="25" rx="3" />
          <path d="M18 14v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
          <path d="M6 24h36" />
          <rect x="21" y="21.5" width="6" height="5" rx="1" />
        </g>
      )}
      {name === "message" && (
        <g {...common}>
          <path d="M8 9h32a3 3 0 0 1 3 3v19a3 3 0 0 1-3 3H19l-8 7v-7H8a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3Z" />
          <circle cx="17" cy="21.5" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="24" cy="21.5" r="1.6" fill="currentColor" stroke="none" />
          <circle cx="31" cy="21.5" r="1.6" fill="currentColor" stroke="none" />
        </g>
      )}
    </svg>
  );
}

/** Three dark cards with a brass rule on top, as in the partner brief. */
export function BenefitCards({ items }: { items: { icon: BenefitIcon; title: string; text: string }[] }) {
  return (
    <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
      {items.map((b, i) => (
        <li key={b.title} data-reveal style={delay(i * 120)} className="relative">
          <span aria-hidden="true" className="absolute inset-x-8 -top-px z-10 h-[2px] rounded-full bg-brass" />
          <div className="group h-full rounded-2xl bg-green-soft/55 px-7 pb-9 pt-10 text-center ring-1 ring-paper/5 transition-[transform,background-color,box-shadow] duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-1.5 hover:bg-green-soft/80 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
            <span className="inline-flex transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:-translate-y-1 group-hover:scale-110">
              <Icon name={b.icon} />
            </span>
            <h3 className="mt-6 text-xl font-bold text-paper sm:text-[1.35rem]">{b.title}</h3>
            <p className="mx-auto mt-3 max-w-[16rem] leading-relaxed text-paper/70">{b.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Refer → Match → Apply → Enrol. `detailed` adds a line of text under each step. */
export function ProcessTimeline({ detailed = false }: { detailed?: boolean }) {
  return (
    <div data-reveal="fade">
      <ol className="relative grid gap-10 sm:grid-cols-4 sm:gap-4">
        {/* connecting dashed line (desktop: horizontal, mobile: vertical) */}
        <span
          aria-hidden="true"
          className="draw-x absolute left-[12.5%] right-[12.5%] top-[2.82rem] hidden border-t-2 border-dashed border-brass/70 sm:block"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[0.56rem] top-12 border-l-2 border-dashed border-brass/50 sm:hidden"
        />
        {processSteps.map((s, i) => (
          <li
            key={s.title}
            className="relative grid grid-cols-[1.25rem_1fr] items-start gap-x-5 sm:flex sm:flex-col sm:items-center sm:text-center"
          >
            <span className="col-start-2 row-start-1 text-sm font-bold tracking-[0.12em] text-brass sm:order-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="pop relative z-10 col-start-1 row-start-1 row-span-2 mt-0.5 h-5 w-5 rounded-full bg-brass shadow-[0_0_0_6px_rgba(214,170,69,0.15)] sm:order-2 sm:mt-4"
              style={{ "--pop-delay": `${300 + i * 250}ms` } as CSSVars}
            />
            <div className="col-start-2 sm:order-3 sm:mt-4">
              <h3 className="text-2xl font-bold text-paper sm:text-[1.75rem]">{s.title}</h3>
              {detailed && <p className="mt-2 leading-relaxed text-paper/70 sm:mx-auto sm:max-w-[15rem]">{s.text}</p>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Photo cards: education agents, agencies, individual referrers. */
export function AudienceCards({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {audiences.map((a, i) => (
        <li
          key={a.title}
          data-reveal
          style={delay(i * 120)}
          className={`group overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-1.5 ${
            dark
              ? "bg-green-soft/40 ring-1 ring-paper/10 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]"
              : "bg-white ring-1 ring-line hover:shadow-[0_28px_56px_-28px_rgba(32,54,56,0.45)]"
          }`}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[var(--ease-out-quart)] group-hover:scale-105">
              <Photo src={a.image} alt={a.alt} sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-deep/45 via-transparent to-transparent" />
          </div>
          <div className="p-7">
            <h3 className={`text-2xl font-bold ${dark ? "text-paper" : "text-green"}`}>{a.title}</h3>
            <p className={`mt-3 leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>{a.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Home page: agents, agencies and referrers. */
export function HomePartners() {
  return (
    <section aria-labelledby="partners-title" className="relative isolate overflow-hidden bg-green-deep text-paper">
      <Watermark className="-right-48 top-24 -z-10 h-[46rem] w-[46rem] lg:-right-32" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-16">
          <div data-reveal>
            <Eyebrow>For agents, agencies and referrers</Eyebrow>
            <h2 id="partners-title" className="mt-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Know a student ready for UK study? Partner with us.
            </h2>
          </div>
          <div data-reveal style={delay(120)}>
            <p className="text-lg leading-relaxed text-paper/75">
              We work with education agents, agencies and individuals who refer students. You make
              the introduction. We handle the admissions, and keep you updated at every stage.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <PartnerButton variant="brass" size="lg" />
              <Link
                href="/partners"
                className="inline-flex h-14 items-center px-2 font-semibold text-brass-light underline decoration-brass/60 underline-offset-4 hover:decoration-brass-light"
              >
                How partnering works
              </Link>
            </div>
          </div>
        </div>

        {/* Who */}
        <div className="mt-16 lg:mt-20">
          <AudienceCards tone="dark" />
        </div>

        {/* What partners get */}
        <div className="mt-24 text-center lg:mt-32">
          <div data-reveal>
            <Eyebrow>Working with us</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What partners get</h2>
          </div>
          <div className="mt-12">
            <BenefitCards items={homeBenefits} />
          </div>
        </div>

        {/* Process */}
        <div className="mt-24 lg:mt-32">
          <Eyebrow className="text-center">One clear process</Eyebrow>
          <div className="mt-10">
            <ProcessTimeline />
          </div>
          <p data-reveal style={delay(400)} className="mt-12 text-center text-lg text-paper/75">
            One partner. One clear process.
          </p>
        </div>
      </div>
    </section>
  );
}
