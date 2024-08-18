import { tracks } from "~/utils/releases";

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event);
  const data = slug ? tracks.find(el => el.fanlinkId?.toLowerCase() === slug.toLowerCase() || el.id?.toLowerCase().replace(/-/g, "") === slug.toLowerCase()) : null;
  if (!data) return { data: null };

  delete data.fanlink;
  delete data.cover;
  delete data.label;
  delete data.link;
  delete data.video;
  delete data.type;
  delete data.description;
  delete data.album;
  delete data.genre;

  return data;
});
