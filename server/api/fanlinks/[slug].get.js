import data from "../../../content/fanlinks.json";

export default defineEventHandler(async (event) => {
  const { slug } = getRouterParams(event);
  return data[slug.toLowerCase()];
});