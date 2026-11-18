import Link from "next/link";
import { cities } from "@/data/cities";
import { courses, coursesInCity } from "@/data/courses";
import { eligibleStatuses } from "@/data/eligibility";
import { BookButton } from "./BookButton";

export function Cities() {
  const all = cities.map((c) => ({ ...c, count: coursesInCity(c.id).length }));
  const campusCities = cities.filter((c) => c.id !== "online").length;
  const onlineCount = coursesInCity("online").length;

  const stats = [
    { value: campusCities, label: "UK campus cities" },
    { value: courses.length, label: "courses to choose from" },
    { value: onlineCount, label: "courses you can study online" },
  ];

  return (
    <section aria-labelledby="cities-title" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div data-reveal className="max-w-2xl">
          <h2 id="cities-title" className="text-4xl font-extrabold text-green sm:text-5xl">
            Choose your city
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Our courses run on campuses in ten UK cities, plus part-time master&apos;s courses
            online. Pick a city to see what you can study there.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* At a glance */}
          <aside
            aria-labelledby="glance-title"
            data-reveal="left"
            className="rounded-[2rem] bg-green p-8 text-paper sm:p-10 lg:sticky lg:top-28"
          >
            <h3 id="glance-title" className="text-sm font-semibold text-brass">
              At a glance
            </h3>
            <dl className="mt-6 grid grid-cols-3 gap-4 border-b border-paper/15 pb-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="order-2 mt-1 text-sm leading-snug text-paper/75">{s.label}</dt>
                  <dd className="order-1 text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-xl font-bold">Who can apply</h3>
            <p className="mt-2 leading-relaxed text-paper/75">
              Students must have one of these statuses:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {eligibleStatuses.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-paper/25 px-3.5 py-1.5 text-sm font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <BookButton />
              <Link
                href="/eligibility"
                className="font-semibold text-brass-light underline decoration-brass/60 underline-offset-4 hover:decoration-brass-light"
              >
                Check eligibility
              </Link>
            </div>
          </aside>

          {/* City list */}
          <ul className="border-t border-green/20">
            {all.map((c, i) => (
              <li key={c.id} data-reveal style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties} className="border-b border-green/20">
                <Link
                  href={`/courses?city=${c.id}`}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5 sm:grid-cols-[11rem_1fr_auto]"
                >
                  <span className="text-xl font-bold text-green group-hover:underline sm:text-2xl">
                    {c.name}
                  </span>
                  <span className="col-span-2 row-start-2 text-[0.95rem] leading-relaxed text-muted sm:col-span-1 sm:row-start-1 sm:col-start-2">
                    {c.blurb}
                  </span>
                  <span className="col-start-2 row-start-1 whitespace-nowrap text-sm font-semibold text-green sm:col-start-3">
                    {c.count} {c.count === 1 ? "course" : "courses"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
