import Link from "next/link";
import { nav, site } from "@/config/site";
import { cities } from "@/data/cities";
import { Logo } from "./Logo";
import { BookButton } from "./BookButton";

export function Footer() {
  const { email, phone, whatsapp, address } = site.contact;
  const hasContact = email || phone || whatsapp || address;
  return (
    <footer className="bg-green-deep text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="light" className="h-16 sm:h-20" />
            <p className="mt-5 text-paper/75 leading-relaxed">
              Independent guidance for students choosing a UK course, from foundation year to
              master&apos;s. Start with a free session.
            </p>
            <BookButton className="mt-6" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-brass">Explore</h2>
            <ul className="mt-4 space-y-3">
              {nav.map((n) => (
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
              <ul className="mt-4 space-y-3 text-paper/80">
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className="hover:text-paper">{email}</a>
                  </li>
                )}
                {phone && (
                  <li>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-paper">{phone}</a>
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
