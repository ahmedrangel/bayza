import type { H3Event } from "h3";
import json from "../../../content/fanlinks.json";

const data: Record<string, any> = json;

export default defineEventHandler(async (event: H3Event) => {
  const { slug } = getRouterParams(event);
  return data[slug.toLowerCase()];
});