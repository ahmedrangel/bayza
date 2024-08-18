import { tracks } from "~/utils/releases";

export default defineEventHandler(() => {
  return tracks.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
});
