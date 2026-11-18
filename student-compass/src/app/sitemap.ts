import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/courses", "/eligibility", "/how-it-works", "/resources", "/about", "/partners"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...guides.map((g) => ({ url: `${site.url}/resources/${g.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
