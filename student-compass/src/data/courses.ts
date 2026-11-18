import type { CityId } from "./cities";

export type LevelId =
  | "foundation-year"
  | "hnd"
  | "foundation-degree"
  | "top-up"
  | "undergraduate"
  | "masters"
  | "new";

export type SubjectId =
  | "business"
  | "accounting"
  | "computing"
  | "health"
  | "psychology"
  | "law"
  | "marketing"
  | "tourism"
  | "construction";

export type Course = {
  id: string;
  title: string;
  level: LevelId;
  subject: SubjectId;
  /** Key into src/data/media.ts courseImages */
  image: string;
  cities: CityId[];
  note?: string;
};

export const levels: { id: LevelId; label: string; short: string }[] = [
  { id: "foundation-year", label: "Degree with foundation year", short: "Foundation year" },
  { id: "hnd", label: "Higher National Diploma (HND)", short: "HND" },
  { id: "foundation-degree", label: "Foundation degree (FdA / FdSc)", short: "Foundation degree" },
  { id: "top-up", label: "Top-up degree", short: "Top-up" },
  { id: "undergraduate", label: "Bachelor's degree", short: "Bachelor's" },
  { id: "masters", label: "Master's degree", short: "Master's" },
  { id: "new", label: "New course", short: "New" },
];

export const subjects: { id: SubjectId; label: string }[] = [
  { id: "business", label: "Business and management" },
  { id: "accounting", label: "Accounting and finance" },
  { id: "computing", label: "Computing and IT" },
  { id: "health", label: "Health and social care" },
  { id: "psychology", label: "Psychology and counselling" },
  { id: "law", label: "Law and criminology" },
  { id: "marketing", label: "Marketing" },
  { id: "tourism", label: "Tourism, hospitality and events" },
  { id: "construction", label: "Construction" },
];

export const levelById = Object.fromEntries(levels.map((l) => [l.id, l])) as Record<
  LevelId,
  (typeof levels)[number]
>;
export const subjectById = Object.fromEntries(subjects.map((s) => [s.id, s])) as Record<
  SubjectId,
  (typeof subjects)[number]
>;

export const courses: Course[] = [
  {"id": "bsc-business-and-tourism-management-with-foundation-year", "title": "BSc (Hons) Business and Tourism Management with Foundation Year", "level": "foundation-year", "subject": "tourism", "image": "tourism", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-accounting-and-financial-management-with-foundation-year", "title": "BSc (Hons) Accounting and Financial Management with Foundation Year", "level": "foundation-year", "subject": "accounting", "image": "accounting", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-construction-management-with-foundation-year", "title": "BSc (Hons) Construction Management with Foundation Year", "level": "foundation-year", "subject": "construction", "image": "construction", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-health-wellbeing-and-social-care-with-foundation-year", "title": "BSc (Hons) Health, Wellbeing and Social Care with Foundation Year", "level": "foundation-year", "subject": "health", "image": "care", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "ba-global-business-and-entrepreneurship-with-foundation-year", "title": "BA (Hons) Global Business and Entrepreneurship with Foundation Year", "level": "foundation-year", "subject": "business", "image": "entrepreneur", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "ba-global-business-with-foundation-year", "title": "BA (Hons) Global Business with Foundation Year", "level": "foundation-year", "subject": "business", "image": "global", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "hnd-in-business", "title": "HND in Business", "level": "hnd", "subject": "business", "image": "business", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "hnd-in-digital-technologies-cyber-security", "title": "HND in Digital Technologies (Cyber Security)", "level": "hnd", "subject": "computing", "image": "cyber", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "hnd-in-healthcare-practice-healthcare-management", "title": "HND in Healthcare Practice (Healthcare Management)", "level": "hnd", "subject": "health", "image": "health", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "hnd-in-construction-management-design-and-build-technician", "title": "HND in Construction Management (Design and Build Technician)", "level": "hnd", "subject": "construction", "image": "construction2", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-project-management-with-integrated-foundation-year", "title": "BSc (Hons) Project Management with Integrated Foundation Year", "level": "foundation-year", "subject": "business", "image": "project", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-applied-business-psychology-with-integrated-foundation-year", "title": "BSc (Hons) Applied Business Psychology with Integrated Foundation Year", "level": "foundation-year", "subject": "psychology", "image": "psychology2", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-computing-with-integrated-foundation-year", "title": "BSc (Hons) Computing with Integrated Foundation Year", "level": "foundation-year", "subject": "computing", "image": "computing", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "bsc-psychology-with-counselling-with-integrated-foundation-year", "title": "BSc (Hons) Psychology with Counselling with Integrated Foundation Year", "level": "foundation-year", "subject": "psychology", "image": "counselling", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "msc-global-business", "title": "MSc Global Business", "level": "masters", "subject": "business", "image": "global", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "msc-counselling-and-psychotherapy", "title": "MSc Counselling and Psychotherapy", "level": "masters", "subject": "psychology", "image": "counselling", "cities": ["london", "manchester", "birmingham", "leeds"]},
  {"id": "msc-project-management", "title": "MSc Project Management", "level": "masters", "subject": "business", "image": "project", "cities": ["london", "manchester", "birmingham", "leeds", "online"], "note": "Online study is part-time."},
  {"id": "ba-business-management-with-foundation-year", "title": "BA (Hons) Business Management with Foundation Year", "level": "foundation-year", "subject": "business", "image": "business", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle", "derby", "sunderland"]},
  {"id": "bsc-accounting-and-finance-with-foundation-year", "title": "BSc (Hons) Accounting and Finance with Foundation Year", "level": "foundation-year", "subject": "accounting", "image": "accounting2", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-project-management-with-foundation-year", "title": "BSc (Hons) Project Management with Foundation Year", "level": "foundation-year", "subject": "business", "image": "project", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-digital-marketing-with-foundation-year", "title": "BSc (Hons) Digital Marketing with Foundation Year", "level": "foundation-year", "subject": "marketing", "image": "marketing", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-computing-with-foundation-year", "title": "BSc (Hons) Computing with Foundation Year", "level": "foundation-year", "subject": "computing", "image": "computing2", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-health-and-care-management-with-foundation-year", "title": "BSc (Hons) Health and Care Management with Foundation Year", "level": "foundation-year", "subject": "health", "image": "health", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-international-hospitality-and-tourism-management-with-foundation-year", "title": "BSc (Hons) International Hospitality and Tourism Management with Foundation Year", "level": "foundation-year", "subject": "tourism", "image": "hospitality", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "llb-law-with-foundation-year", "title": "LLB (Hons) Law with Foundation Year", "level": "foundation-year", "subject": "law", "image": "law", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle", "bristol"]},
  {"id": "bsc-psychology-with-foundation-year", "title": "BSc (Hons) Psychology with Foundation Year", "level": "foundation-year", "subject": "psychology", "image": "psychology", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle", "derby", "sunderland", "bristol"]},
  {"id": "bsc-psychology-with-counselling-with-foundation-year", "title": "BSc (Hons) Psychology with Counselling with Foundation Year", "level": "foundation-year", "subject": "psychology", "image": "counselling", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "ba-criminology-and-psychology-with-foundation-year", "title": "BA (Hons) Criminology and Psychology with Foundation Year", "level": "foundation-year", "subject": "law", "image": "criminology", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "fda-business-and-innovation", "title": "FdA Business and Innovation", "level": "foundation-degree", "subject": "business", "image": "entrepreneur", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "fdsc-computing-and-digital-futures", "title": "FdSc Computing and Digital Futures", "level": "foundation-degree", "subject": "computing", "image": "computing", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "fdsc-health-and-care-management", "title": "FdSc Health and Care Management", "level": "foundation-degree", "subject": "health", "image": "care", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "ba-business-management-top-up", "title": "BA (Hons) Business Management (Top-Up)", "level": "top-up", "subject": "business", "image": "business2", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-health-and-care-management-top-up", "title": "BSc (Hons) Health and Care Management (Top-Up)", "level": "top-up", "subject": "health", "image": "health", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-computing-top-up", "title": "BSc (Hons) Computing (Top-Up)", "level": "top-up", "subject": "computing", "image": "computing2", "cities": ["london", "manchester", "birmingham", "leeds", "nottingham", "newcastle"]},
  {"id": "bsc-health-and-social-care-with-foundation-year", "title": "BSc (Hons) Health and Social Care with Foundation Year", "level": "foundation-year", "subject": "health", "image": "care", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "ba-event-management-with-foundation-year", "title": "BA (Hons) Event Management with Foundation Year", "level": "foundation-year", "subject": "tourism", "image": "events", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "bsc-fashion-management-and-strategy-with-foundation-year", "title": "BSc (Hons) Fashion Management and Strategy with Foundation Year", "level": "foundation-year", "subject": "business", "image": "fashion", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "ba-digital-marketing-management-with-foundation-year", "title": "BA (Hons) Digital Marketing Management with Foundation Year", "level": "foundation-year", "subject": "marketing", "image": "marketing2", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "ba-digital-marketing-management", "title": "BA (Hons) Digital Marketing Management", "level": "undergraduate", "subject": "marketing", "image": "marketing2", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "ba-business-management", "title": "BA (Hons) Business Management", "level": "undergraduate", "subject": "business", "image": "business2", "cities": ["manchester", "newcastle", "derby", "sunderland"]},
  {"id": "public-health", "title": "Public Health", "level": "new", "subject": "health", "image": "publichealth", "cities": ["luton"]},
  {"id": "bsc-psychology-with-criminology-with-foundation-year", "title": "BSc (Hons) Psychology with Criminology with Foundation Year", "level": "foundation-year", "subject": "law", "image": "criminology", "cities": ["london", "leeds", "nottingham", "bristol"]},
  {"id": "bsc-criminology-and-policing-with-foundation-year", "title": "BSc (Hons) Criminology and Policing with Foundation Year", "level": "foundation-year", "subject": "law", "image": "policing", "cities": ["london", "leeds", "nottingham", "bristol"]},
  {"id": "bsc-computer-science-with-foundation-year", "title": "BSc (Hons) Computer Science with Foundation Year", "level": "foundation-year", "subject": "computing", "image": "computing", "cities": ["london", "manchester"]},
  {"id": "bsc-business-management-with-foundation-year", "title": "BSc (Hons) Business Management with Foundation Year", "level": "foundation-year", "subject": "business", "image": "business2", "cities": ["london", "manchester"]},
  {"id": "bsc-business-management-top-up", "title": "BSc (Hons) Business Management (Top-Up)", "level": "top-up", "subject": "business", "image": "business", "cities": ["london", "manchester"]},
  {"id": "msc-artificial-intelligence-for-business", "title": "MSc Artificial Intelligence for Business", "level": "masters", "subject": "computing", "image": "ai", "cities": ["online"], "note": "Online study is part-time."},
  {"id": "msc-cyber-security-management", "title": "MSc Cyber Security Management", "level": "masters", "subject": "computing", "image": "cyber", "cities": ["online"], "note": "Online study is part-time."},
  {"id": "msc-marketing", "title": "MSc Marketing", "level": "masters", "subject": "marketing", "image": "marketing", "cities": ["online"], "note": "Online study is part-time."},
  {"id": "msc-strategic-business-management", "title": "MSc Strategic Business Management", "level": "masters", "subject": "business", "image": "global", "cities": ["online"], "note": "Online study is part-time."}
];

export function coursesInCity(city: CityId) {
  return courses.filter((c) => c.cities.includes(city));
}
