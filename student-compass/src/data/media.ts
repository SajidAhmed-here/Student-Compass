/**
 * All photography lives here.
 *
 * To use your own photos: put the file in /public/images (e.g. /public/images/law.jpg)
 * and replace the value with the path, e.g. law: "/images/law.jpg".
 * If an image fails to load, the site shows a brand-coloured panel instead,
 * so nothing ever looks broken.
 */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const heroImages = {
  partners: u("photo-1573164574572-cb89e39749b4", 2400),
  london: u("photo-1513635269975-59663e0ac1ad", 2400),
  graduation: u("photo-1627556704290-2b1f5853ff78", 2400),
  study: u("photo-1522202176988-66273c2fd55f", 2400),
  lecture: u("photo-1524178232363-1fb2b075b655", 2400),
};

export const courseImages: Record<string, string> = {
  business: u("photo-1454165804606-c3d57bc86b40"),
  business2: u("photo-1556761175-b413da4baf72"),
  global: u("photo-1486406146926-c627a92ad1ab"),
  entrepreneur: u("photo-1531482615713-2afd69097998"),
  project: u("photo-1517245386807-bb43f82c33c4"),
  accounting: u("photo-1554224155-6726b3ff858f"),
  accounting2: u("photo-1460925895917-afdab827c52f"),
  computing: u("photo-1517694712202-14dd9538aa97"),
  computing2: u("photo-1518770660439-4636190af475"),
  cyber: u("photo-1550751827-4bd374c3f58b"),
  ai: u("photo-1677442136019-21780ecad995"),
  health: u("photo-1576091160399-112ba8d25d1d"),
  care: u("photo-1584515933487-779824d29309"),
  publichealth: u("photo-1576091160550-2173dba999ef"),
  psychology: u("photo-1573497019940-1c28c88b4f3e"),
  psychology2: u("photo-1552664730-d307ca884978"),
  counselling: u("photo-1573497620053-ea5300f94f21"),
  law: u("photo-1589829545856-d10d557cf95f"),
  criminology: u("photo-1505664194779-8beaceb93744"),
  policing: u("photo-1453873531674-2151bcd01707"),
  marketing: u("photo-1533750349088-cd871a92f312"),
  marketing2: u("photo-1460925895917-afdab827c52f"),
  tourism: u("photo-1488646953014-85cb44e25828"),
  hospitality: u("photo-1566073771259-6a8506099945"),
  events: u("photo-1501281668745-f7f57925c3b4"),
  fashion: u("photo-1445205170230-053b83016050"),
  construction: u("photo-1503387762-592deb58ef4e"),
  construction2: u("photo-1504307651254-35680f356dfd"),
};

export const pageImages = {
  about: u("photo-1529156069898-49953e39b3ac", 1800),
  eligibility: u("photo-1434030216411-0b793f4b4173", 1800),
  guide: u("photo-1456513080510-7bf3a84b82f8", 1800),
  howItWorks: u("photo-1531545514256-b1400bc00f31", 1800),
  courses: u("photo-1606761568499-6d2451b23c66", 1800),
};

export const partnerImages = {
  hero: u("photo-1521791136064-7986c2920216", 2000),
  agents: u("photo-1551836022-d5d88e9218df"),
  agencies: u("photo-1600880292203-757bb62b4baf"),
  referrers: u("photo-1515187029135-18ee286d815b"),
};
