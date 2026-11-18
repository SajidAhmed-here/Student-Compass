/**
 * Copy for the partner (agents, agencies and referrers) sections.
 * Used on the home page and on /partners.
 */
import { partnerImages } from "./media";

export type BenefitIcon = "institution" | "briefcase" | "message";

export const audiences = [
  {
    title: "Education agents",
    text: "Independent advisers who help students choose and apply for UK study. Bring us your students and we'll manage the admissions work.",
    image: partnerImages.agents,
    alt: "An adviser talking through options with a student at a laptop",
  },
  {
    title: "Agencies",
    text: "Recruitment and student agencies looking for a reliable UK admissions partner with a wide range of courses and cities.",
    image: partnerImages.agencies,
    alt: "Two colleagues celebrating at a desk in a bright office",
  },
  {
    title: "Individual referrers",
    text: "Teachers, community leaders, alumni or friends who know someone ready to study. Refer them and we'll take it from there.",
    image: partnerImages.referrers,
    alt: "A group of people in a community discussion",
  },
];

/** "What partners get" on the home page. */
export const homeBenefits: { icon: BenefitIcon; title: string; text: string }[] = [
  { icon: "institution", title: "Wide provider network", text: "Undergraduate, foundation year and top-up routes" },
  { icon: "briefcase", title: "Admissions, handled", text: "Applications, documents and interview preparation" },
  { icon: "message", title: "Clear updates", text: "From referral to enrolment" },
];

/** "Why partner with us" on the partners page. */
export const partnerBenefits: { icon: BenefitIcon; title: string; text: string }[] = [
  { icon: "institution", title: "UK-wide placement", text: "Universities and providers nationwide" },
  { icon: "briefcase", title: "Admissions managed", text: "End to end, on your behalf" },
  { icon: "message", title: "Updates at every stage", text: "So you never need to chase" },
];

export const processSteps = [
  {
    title: "Refer",
    text: "Share the student's details through our partner form.",
  },
  {
    title: "Match",
    text: "An adviser talks to the student and matches them with suitable courses and campuses.",
  },
  {
    title: "Apply",
    text: "We prepare the application, gather documents and get the student ready for any interview.",
  },
  {
    title: "Enrol",
    text: "We support the student through to enrolment, and keep you updated along the way.",
  },
];
