"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { heroImages } from "@/data/media";
import { Photo } from "./Photo";
import { BookButton } from "./BookButton";

type Slide = {
  tab: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  link: { href: string; label: string };
};

const slides: Slide[] = [
  {
    tab: "Start here",
    title: "Find your way to a UK degree.",
    body: "Free one-to-one guidance on foundation years, HNDs, top-up degrees and master's courses, in ten UK cities and online.",
    image: heroImages.london,
    alt: "Westminster and the River Thames in London",
    link: { href: "/courses", label: "Explore courses" },
  },
  {
    tab: "Foundation years",
    title: "No A-levels? A foundation year can be your way in.",
    body: "Degrees with a built-in foundation year are designed for students without standard entry requirements. We'll help you check if you're eligible.",
    image: heroImages.lecture,
    alt: "Students in a lecture hall",
    link: { href: "/courses?level=foundation-year", label: "See foundation year courses" },
  },
  {
    tab: "Top-up degrees",
    title: "Turn your HND or foundation degree into an honours degree.",
    body: "Top-up degrees let you build on a qualification you already have, usually in a single year of study.",
    image: heroImages.graduation,
    alt: "Graduates throwing their caps in the air",
    link: { href: "/courses?level=top-up", label: "See top-up courses" },
  },
  {
    tab: "Master's",
    title: "Ready for the next step? Study a master's.",
    body: "Postgraduate courses in business, project management, counselling, AI and more, on campus or online.",
    image: heroImages.study,
    alt: "Students working together around a laptop",
    link: { href: "/courses?level=masters", label: "See master's courses" },
  },
];

const DURATION = 7000;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function getReducedMotion() {
  return window.matchMedia(REDUCED_QUERY).matches;
}

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex((i + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, paused, reduced, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative isolate flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-green-deep text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.tab}
          aria-hidden={i !== index}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0"
            style={i === index && !reduced ? { animation: `push ${DURATION + 1500}ms ease-out both` } : undefined}
          >
            <Photo src={s.image} alt={s.alt} sizes="100vw" priority={i === 0} mark={false} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-deep/95 via-green-deep/70 to-green-deep/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-deep/90 to-transparent" />
        </div>
      ))}

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
        <div className="grid">
          {slides.map((s, i) => {
            const Heading = i === 0 ? "h1" : "h2";
            return (
            <div
              key={s.tab}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${s.tab}`}
              hidden={i !== index}
              className="col-start-1 row-start-1 max-w-3xl"
            >
              <Heading className="text-display font-extrabold">{s.title}</Heading>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/85 sm:text-xl">{s.body}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <BookButton size="lg" />
                <Link
                  href={s.link.href}
                  className="inline-flex h-14 items-center rounded-full border-2 border-paper/60 px-7 font-semibold text-paper transition-colors hover:bg-paper hover:text-green"
                >
                  {s.link.label}
                </Link>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-14 grid grid-cols-4 gap-3 sm:gap-6" role="tablist" aria-label="Choose a slide">
          {slides.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => go(i)}
              className="group text-left"
            >
              <span className="relative block h-[3px] overflow-hidden rounded-full bg-paper/25">
                {i < index && <span className="absolute inset-0 bg-paper/70" />}
                {i === index && (
                  <span
                    key={`${index}-${paused}`}
                    className="absolute inset-0 origin-left bg-brass"
                    style={
                      reduced || paused
                        ? undefined
                        : { animation: `progress ${DURATION}ms linear both` }
                    }
                  />
                )}
              </span>
              <span
                className={`mt-3 hidden text-sm font-medium transition-colors sm:block ${
                  i === index ? "text-paper" : "text-paper/60 group-hover:text-paper/90"
                }`}
              >
                {s.tab}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
