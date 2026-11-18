"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/config/site";
import { Logo } from "./Logo";
import { BookButton, PartnerButton } from "./BookButton";

export function Header() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const transparent = overHero && !scrolled && !open;
  const tone = transparent || open ? "light" : "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "bg-green"
          : transparent
            ? "bg-gradient-to-b from-green-deep/70 to-transparent"
            : "border-b border-line bg-paper/95 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Student Compass Education, home" className="rounded-md" onClick={() => setOpen(false)}>
          <Logo tone={tone} className="h-12 sm:h-14" priority />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors xl:px-4 ${
                      tone === "light"
                        ? "text-paper/90 hover:text-paper hover:bg-paper/10"
                        : "text-ink/80 hover:text-green hover:bg-mist"
                    } ${active ? (tone === "light" ? "text-paper" : "text-green") : ""}`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 xl:inset-x-4 h-0.5 rounded-full bg-brass" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <span className="hidden sm:block lg:hidden xl:block">
            <PartnerButton toPage size="sm" variant={tone === "light" ? "outline-light" : "outline"} />
          </span>
          <span className="hidden sm:block">
            <BookButton size="sm" />
          </span>
          <button
            ref={menuButton}
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
              tone === "light" ? "text-paper hover:bg-paper/10" : "text-green hover:bg-mist"
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-5rem)] overflow-y-auto bg-green px-5 pb-10 sm:px-8 lg:hidden">
          <nav aria-label="Mobile">
            <ul className="border-t border-paper/15">
              {nav.map((item) => (
                <li key={item.href} className="border-b border-paper/15">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-5 text-2xl font-bold tracking-tight text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <BookButton size="lg" className="mt-8 w-full" />
          <PartnerButton toPage size="lg" variant="outline-light" className="mt-3 w-full" />
        </div>
      )}
    </header>
  );
}
