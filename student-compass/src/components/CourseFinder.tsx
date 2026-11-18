import Form from "next/form";
import Link from "next/link";
import { cities } from "@/data/cities";
import { courses, levels, subjects } from "@/data/courses";

const selectClass =
  "h-12 w-full appearance-none rounded-xl border border-line bg-white pl-4 pr-10 text-[0.95rem] text-ink focus:border-green focus:outline-none focus:ring-2 focus:ring-brass/60";

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted">
      <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CourseFinder() {
  const usedLevels = levels.filter((l) => courses.some((c) => c.level === l.id));
  const popular = ["business", "computing", "health", "psychology", "law"] as const;
  return (
    <section aria-labelledby="finder-title" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div data-reveal>
            <h2 id="finder-title" className="text-4xl font-extrabold text-green sm:text-5xl">
              Find a course
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-muted">
              Search {courses.length} courses by subject, study level and city.
            </p>
          </div>

          <div>
            <Form action="/courses" data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="rounded-3xl border border-line bg-mist/60 p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="q" className="mb-2 block text-sm font-semibold text-green">
                    Course name or keyword
                  </label>
                  <input
                    id="q"
                    name="q"
                    type="search"
                    placeholder="e.g. psychology, cyber security, law"
                    className="h-12 w-full rounded-xl border border-line bg-white px-4 text-[0.95rem] text-ink placeholder:text-muted/70 focus:border-green focus:outline-none focus:ring-2 focus:ring-brass/60"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-green">
                    Subject
                  </label>
                  <div className="relative">
                    <select id="subject" name="subject" className={selectClass} defaultValue="">
                      <option value="">Any subject</option>
                      {subjects.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                    <Chevron />
                  </div>
                </div>
                <div>
                  <label htmlFor="level" className="mb-2 block text-sm font-semibold text-green">
                    Study level
                  </label>
                  <div className="relative">
                    <select id="level" name="level" className={selectClass} defaultValue="">
                      <option value="">Any level</option>
                      {usedLevels.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                    <Chevron />
                  </div>
                </div>
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-semibold text-green">
                    City
                  </label>
                  <div className="relative">
                    <select id="city" name="city" className={selectClass} defaultValue="">
                      <option value="">Any city</option>
                      {cities.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <Chevron />
                  </div>
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-green px-6 font-semibold text-paper transition-colors hover:bg-green-soft"
                  >
                    Search courses
                  </button>
                </div>
              </div>
            </Form>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm text-muted">Popular:</span>
              {popular.map((id) => {
                const s = subjects.find((x) => x.id === id)!;
                return (
                  <Link
                    key={id}
                    href={`/courses?subject=${id}`}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-green transition-colors hover:border-green"
                  >
                    {s.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
