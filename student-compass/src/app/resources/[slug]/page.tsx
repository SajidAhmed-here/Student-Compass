import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookButton } from "@/components/BookButton";
import { guideBySlug, guides } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug[slug];
  if (!g) return {};
  return { title: g.title, description: g.summary, alternates: { canonical: `/resources/${g.slug}` } };
}

export default async function GuidePage({ params }: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const guide = guideBySlug[slug];
  if (!guide) notFound();
  const others = guides.filter((g) => g.slug !== guide.slug);

  return (
    <article className="bg-paper pt-20">
      <header className="border-b border-line">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/resources" className="font-semibold text-green underline underline-offset-4">
              Resources
            </Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span>{guide.category}</span>
          </nav>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-green sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-muted">{guide.summary}</p>
          <p className="mt-6 text-sm text-muted">{guide.readingMinutes} minute read. General guidance.</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="prose-guide">
          {guide.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {guide.tip && (
          <aside className="mt-12 rounded-3xl border-l-4 border-brass bg-mist p-7">
            <p className="font-bold text-green">Tip</p>
            <p className="mt-2 leading-relaxed text-ink">{guide.tip}</p>
          </aside>
        )}

        <div className="mt-14 flex flex-col gap-5 rounded-[2rem] bg-green p-8 text-paper sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="text-2xl font-bold">Want an adviser to check this for your course?</p>
          <BookButton className="shrink-0" />
        </div>
      </div>

      <section aria-labelledby="more-title" className="border-t border-line bg-mist">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <h2 id="more-title" className="text-2xl font-extrabold text-green">More guides</h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((g) => (
              <li key={g.slug}>
                <Link href={`/resources/${g.slug}`} className="group block rounded-3xl border border-line bg-white p-7 hover:border-green">
                  <p className="text-sm font-semibold text-brass-dark">{g.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-green group-hover:underline">{g.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
