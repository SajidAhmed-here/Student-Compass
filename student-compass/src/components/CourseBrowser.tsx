"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { cities, cityById, type CityId } from "@/data/cities";
import {
  courses,
  levelById,
  levels,
  subjectById,
  subjects,
  type LevelId,
  type SubjectId,
} from "@/data/courses";
import { courseImages } from "@/data/media";
import { Photo } from "./Photo";
import { BookButton } from "./BookButton";

const selectClass =
  "h-11 w-full appearance-none rounded-xl border border-line bg-white pl-3.5 pr-9 text-[0.95rem] text-ink focus:border-green focus:outline-none focus:ring-2 focus:ring-brass/60";

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
      <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function valid<T extends string>(v: string | null, ids: readonly T[]): T | "" {
  return v && (ids as readonly string[]).includes(v) ? (v as T) : "";
}

const usedLevels = levels.filter((l) => courses.some((c) => c.level === l.id));

export function CourseBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState(params.get("q") ?? "");
  const [subject, setSubject] = useState<SubjectId | "">(valid(params.get("subject"), subjects.map((s) => s.id)));
  const [level, setLevel] = useState<LevelId | "">(valid(params.get("level"), levels.map((l) => l.id)));
  const [city, setCity] = useState<CityId | "">(valid(params.get("city"), cities.map((c) => c.id)));

  // Keep filters in step when the URL changes from outside (e.g. a footer city link).
  const lastPushed = useRef(params.toString());
  const paramString = params.toString();
  useEffect(() => {
    if (paramString === lastPushed.current) return;
    lastPushed.current = paramString;
    const p = new URLSearchParams(paramString);
    setQ(p.get("q") ?? "");
    setSubject(valid(p.get("subject"), subjects.map((s) => s.id)));
    setLevel(valid(p.get("level"), levels.map((l) => l.id)));
    setCity(valid(p.get("city"), cities.map((c) => c.id)));
  }, [paramString]);

  const sync = (next: Partial<{ q: string; subject: string; level: string; city: string }>) => {
    const merged = { q, subject, level, city, ...next };
    const sp = new URLSearchParams();
    Object.entries(merged).forEach(([k, v]) => v && sp.set(k, v));
    const qs = sp.toString();
    lastPushed.current = qs;
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return courses.filter((c) => {
      if (subject && c.subject !== subject) return false;
      if (level && c.level !== level) return false;
      if (city && !c.cities.includes(city)) return false;
      if (terms.length) {
        const hay = `${c.title} ${subjectById[c.subject].label} ${levelById[c.level].label}`.toLowerCase();
        return terms.every((t) => hay.includes(t));
      }
      return true;
    });
  }, [q, subject, level, city]);

  const filtered = Boolean(q || subject || level || city);
  const clear = () => {
    setQ("");
    setSubject("");
    setLevel("");
    setCity("");
    lastPushed.current = "";
    router.replace(pathname, { scroll: false });
  };

  return (
    <section aria-label="Course list" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="sticky top-20 z-30 -mx-5 border-b border-line bg-paper/95 px-5 py-4 backdrop-blur sm:-mx-8 sm:px-8"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1.2fr_1fr]">
            <div>
              <label htmlFor="course-q" className="sr-only">Course name or keyword</label>
              <input
                id="course-q"
                type="search"
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  sync({ q: e.target.value });
                }}
                placeholder="Search by course name or keyword"
                className="h-11 w-full rounded-xl border border-line bg-white px-3.5 text-[0.95rem] text-ink placeholder:text-muted/70 focus:border-green focus:outline-none focus:ring-2 focus:ring-brass/60"
              />
            </div>
            <div className="relative">
              <label htmlFor="course-subject" className="sr-only">Subject</label>
              <select
                id="course-subject"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value as SubjectId);
                  sync({ subject: e.target.value });
                }}
                className={selectClass}
              >
                <option value="">Any subject</option>
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
              <Chevron />
            </div>
            <div className="relative">
              <label htmlFor="course-level" className="sr-only">Study level</label>
              <select
                id="course-level"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value as LevelId);
                  sync({ level: e.target.value });
                }}
                className={selectClass}
              >
                <option value="">Any level</option>
                {usedLevels.map((l) => (
                  <option key={l.id} value={l.id}>{l.label}</option>
                ))}
              </select>
              <Chevron />
            </div>
            <div className="relative">
              <label htmlFor="course-city" className="sr-only">City</label>
              <select
                id="course-city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value as CityId);
                  sync({ city: e.target.value });
                }}
                className={selectClass}
              >
                <option value="">Any city</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              <Chevron />
            </div>
          </div>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-3 py-6">
          <p className="text-[0.95rem] text-muted" aria-live="polite">
            Showing <strong className="font-semibold text-green">{results.length}</strong> of {courses.length} courses
            {city && <> in <strong className="font-semibold text-green">{cityById[city].name}</strong></>}
          </p>
          {filtered && (
            <button type="button" onClick={clear} className="text-sm font-semibold text-green underline underline-offset-4 hover:text-green-soft">
              Clear filters
            </button>
          )}
        </div>

        {results.length === 0 ? (
          <div className="rounded-3xl border border-line bg-mist/60 px-6 py-16 text-center">
            <h2 className="text-2xl font-bold text-green">No courses match these filters</h2>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
              Try a different city or level, or tell us what you&apos;re looking for in a free
              session. New courses are added for each intake.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={clear}
                className="inline-flex h-12 items-center rounded-full border-2 border-green px-5 font-semibold text-green hover:bg-green hover:text-paper"
              >
                Clear filters
              </button>
              <BookButton />
            </div>
          </div>
        ) : (
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((c) => (
              <li key={c.id} className="flex flex-col">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white">
                  <div className="relative aspect-[16/10] bg-green">
                    <Photo
                      src={courseImages[c.image]}
                      alt=""
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-[0.8rem] font-semibold text-green shadow-sm">
                      {levelById[c.level].short}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm font-medium text-brass-dark">{subjectById[c.subject].label}</p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-green">{c.title}</h3>
                    <p className="mt-4 flex items-start gap-2 text-[0.95rem] leading-relaxed text-muted">
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-green">
                        <path d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <circle cx="10" cy="8" r="2" fill="currentColor" />
                      </svg>
                      <span>
                        <span className="sr-only">Available in: </span>
                        {c.cities.map((id) => cityById[id].name).join(", ")}
                      </span>
                    </p>
                    {c.note && <p className="mt-2 text-sm text-muted">{c.note}</p>}
                    <div className="mt-auto pt-6">
                      <BookButton course={c.title} variant="outline" className="w-full" />
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
