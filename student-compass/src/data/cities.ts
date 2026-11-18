export type CityId =
  | "london"
  | "manchester"
  | "birmingham"
  | "leeds"
  | "nottingham"
  | "newcastle"
  | "derby"
  | "sunderland"
  | "bristol"
  | "luton"
  | "online";

export type City = {
  id: CityId;
  name: string;
  /** Latitude / longitude (optional, not currently displayed). */
  lat?: number;
  lng?: number;
  blurb: string;
};

export const cities: City[] = [
  {
    id: "london",
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
    blurb: "The widest choice of courses, with campuses across the capital.",
  },
  {
    id: "manchester",
    name: "Manchester",
    lat: 53.4808,
    lng: -2.2426,
    blurb: "A major student city with a lively culture and lower living costs than London.",
  },
  {
    id: "birmingham",
    name: "Birmingham",
    lat: 52.4862,
    lng: -1.8904,
    blurb: "Central, well connected and home to a large international student community.",
  },
  {
    id: "leeds",
    name: "Leeds",
    lat: 53.8008,
    lng: -1.5491,
    blurb: "A compact, friendly city centre with one of the UK's biggest student populations.",
  },
  {
    id: "nottingham",
    name: "Nottingham",
    lat: 52.9548,
    lng: -1.1581,
    blurb: "An affordable Midlands city with a strong student scene.",
  },
  {
    id: "newcastle",
    name: "Newcastle",
    lat: 54.9783,
    lng: -1.6178,
    blurb: "A welcoming north-east city known for good value living.",
  },
  {
    id: "derby",
    name: "Derby",
    lat: 52.9225,
    lng: -1.4746,
    blurb: "A smaller Midlands city, close to Nottingham and Birmingham.",
  },
  {
    id: "sunderland",
    name: "Sunderland",
    lat: 54.9069,
    lng: -1.3838,
    blurb: "A coastal city a short metro ride from Newcastle.",
  },
  {
    id: "bristol",
    name: "Bristol",
    lat: 51.4545,
    lng: -2.5879,
    blurb: "A creative harbour city in the south west.",
  },
  {
    id: "luton",
    name: "Luton",
    lat: 51.8787,
    lng: -0.42,
    blurb: "Under an hour from central London, with lower living costs.",
  },
  {
    id: "online",
    name: "Online",
    blurb: "Part-time master's courses you can study from home.",
  },
];

export const cityById = Object.fromEntries(cities.map((c) => [c.id, c])) as Record<CityId, City>;
