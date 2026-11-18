import Link from "next/link";
import { footerNav, site } from "@/config/site";
import { cities } from "@/data/cities";
import { Logo } from "./Logo";
import { BookButton, PartnerButton } from "./BookButton";

export function Footer() {
  const { email, phone, whatsapp, address } = site.contact;
  const hasContact = email || phone || whatsapp || address;
  return (
    <footer className="bg-green-deep text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.95fr_1.45fr] lg:gap-10">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Logo tone="light" className="h-16 sm:h-20" />
            <p className="mt-5 text-paper/75 leading-relaxed">
              Independent guidance for students choosing a UK course, from foundation year to
              master&apos;s. Start with a free session.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton />
              <PartnerButton variant="outline-light" />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-brass">Explore</h2>
            <ul className="mt-4 space-y-3">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/80 hover:text-paper">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-brass">Study in</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {cities.map((c) => (
                <li key={c.id}>
                  <Link href={`/courses?city=${c.id}`} className="text-paper/80 hover:text-paper">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {hasContact ? (
            <div>
              <h2 className="text-sm font-semibold text-brass">Contact</h2>
              <p className="mt-4 leading-relaxed text-paper/70">
                Students, agents and agencies, we&apos;d love to hear from you.
              </p>
              <ul className="mt-5 space-y-4 text-paper/80">
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="group inline-flex items-center gap-3 hover:text-paper">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 text-brass transition-colors group-hover:border-brass">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                        </svg>
                      </span>
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="group inline-flex items-center gap-3 hover:text-paper">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 text-brass transition-colors group-hover:border-brass">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                          <path d="m3 6 9 7 9-7" />
                        </svg>
                      </span>
                      <span className="min-w-0 [overflow-wrap:anywhere]">{email}</span>
                    </a>
                  </li>
                )}
                {whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-paper"
                    >
                      WhatsApp us
                    </a>
                  </li>
                )}
                {address && <li className="leading-relaxed">{address}</li>}
              </ul>
            </div>
          ) : (
            <div>
              <h2 className="text-sm font-semibold text-brass">Talk to us</h2>
              <p className="mt-4 text-paper/80 leading-relaxed">
                Book a free session and an adviser will get in touch to arrange a time.
              </p>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-8 text-sm text-paper/60 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Student Compass Education is not a university. Universities set their own entry
            requirements and make all admission decisions. Course availability can change by intake
            and campus.
          </p>
          <p className="shrink-0">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
