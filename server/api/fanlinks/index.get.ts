import { tracks } from "~/utils/releases";

export default defineEventHandler(async () => {
  const trackWithFanlinks = tracks.filter(el => el.fanlinks);
  const data = trackWithFanlinks.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).filter(el => Number(new Date(el.date)) <= Date.now());
  if (!data) return { data: null };

  for (const d of data) {
    delete d.cover;
    delete d.label;
    delete d.link;
    delete d.video;
    delete d.type;
    delete d.description;
    delete d.album;
    delete d.genre;
  }

  return data;
});
