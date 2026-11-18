/**
 * Site-wide settings. Edit this file to change contact details,
 * the booking form link and navigation.
 */
type SiteConfig = {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  description: string;
  bookingFormUrl: string;
  partnerFormUrl: string;
  bookingFormCourseField: string;
  contact: { email: string; phone: string; whatsapp: string; address: string };
  logoImage: string;
  logoWhiteImage: string;
};

export const site: SiteConfig = {
  name: "Student Compass Education",
  shortName: "Student Compass",
  domain: "studentcompasseducation.com",
  url: "https://studentcompasseducation.com",
  description:
    "Free guidance on foundation years, HNDs, top-up degrees and master's courses across UK cities. Book a free session with Student Compass Education.",

  /**
   * Google Form for "Book a free session".
   * Paste your form link here. A short link (https://forms.gle/xxxx) works.
   * If you want course pre-filling (below), use the full
   * https://docs.google.com/forms/d/e/.../viewform link instead.
   */
  bookingFormUrl: "https://forms.gle/v9jzVY23Z4MzAJtH9",

  /** Google Form for agents, agencies and referrers ("Become a partner"). */
  partnerFormUrl: "https://forms.gle/VLut748kTCEyRzGBA",

  /**
   * Optional: pre-fill the course name in your Google Form.
   * In Google Forms: ⋮ menu → "Get pre-filled link", type anything in the
   * course question, copy the link, and paste the `entry.XXXXXXX` part here.
   * Leave empty to skip pre-filling.
   */
  bookingFormCourseField: "",

  /** Shown in the footer only when filled in. */
  contact: {
    email: "admin@studentcompasseducation.com",
    phone: "+44 7741 352793",
    whatsapp: "",
    address: "",
  },

  /**
   * Logo. Leave empty to use the built-in compass mark + wordmark.
   * To use your own files, put them in /public (e.g. /public/logo.png and
   * /public/logo-white.png) and set the paths below. logoWhite is used on
   * the dark hero and footer.
   */
  logoImage: "/logo.png",
  logoWhiteImage: "/logo-white.png",
};

export const nav = [
  { href: "/courses", label: "Courses" },
  { href: "/eligibility", label: "Eligibility" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About us" },
] as const;

export const footerNav = [...nav, { href: "/partners", label: "Partner with us" }] as const;

export function bookingHref(courseTitle?: string) {
  const base = site.bookingFormUrl;
  if (!courseTitle || !site.bookingFormCourseField) return base;
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}usp=pp_url&${site.bookingFormCourseField}=${encodeURIComponent(courseTitle)}`;
}
