import { tracks } from "~/utils/releases";

export default defineEventHandler(async (event) => {
  const slug = getQuery(event)?.slug as string;

  const data = slug ? tracks.filter(el => el.fanlinkId?.toLowerCase() === slug.toLowerCase() || el.id?.toLowerCase().replace(/-/g, "") === slug.toLowerCase()) : tracks.filter(el => el.fanlinks);

  for (const t of data) {
    delete t.fanlink;
    delete t.cover;
    delete t.label;
    delete t.link;
    delete t.video;
    delete t.type;
    delete t.description;
    delete t.album;
    delete t.genre;
  }

  return { data };
});
