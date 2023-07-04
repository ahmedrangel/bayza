export const dateFormat = (datestring) => {
  const date = new Date(datestring);
  const format = { year: "numeric", month: "long", day: "numeric" };
  const formatted = date.toLocaleDateString("en-US", format);
  return formatted;
};

export const releaseType = (type) => {
  const link = !type ? "" : type;
  return link;
};

export const getAge = () => {
  const now = new Date();
  const birth = new Date("June 15, 1998 00:00:00");
  const diff = Math.abs(now - birth);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); 
  return age;
};