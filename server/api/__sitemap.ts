import { releaseType } from "~/utils/helpers";
import { tracks } from "~/utils/releases";

export default defineEventHandler(() => {
  const routeRules = [] as Record<string, any>;
  for (const t of tracks.filter(el => Number(new Date(el.date)) <= Number(Date.now()))) {
    if (!t.year || !t.id) continue;
    const rules = [`/releases/${t.year}${releaseType(t.link)}/${t.id}`];
    for (const r of rules) {
      routeRules.push({ loc: r, lastmod: new Date().toISOString() });
    }
  }

  const uniqueYears = new Set(tracks.map(t => t.year).filter(y => y));
  for (const y of uniqueYears) {
    routeRules.push({ loc: `/releases/${y}`, lastmod: new Date().toISOString() });
  }

  routeRules.push({ loc: "/releases/all-bootlegs", lastmod: new Date().toISOString() });

  return routeRules;
});
