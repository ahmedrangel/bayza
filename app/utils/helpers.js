export const dateFormat = (datestring) => {
  const date = new Date(datestring);
  const format = { year: "numeric", month: "long", day: "numeric" };
  const formatted = date.toLocaleDateString("en-US", format);
  return formatted;
};

export const releaseType = (type) => {
  return !type ? "" : type;
};

export const getAge = () => {
  const now = new Date();
  const birth = new Date("June 15, 1998 00:00:00");
  const diff = Math.abs(now - birth);
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const isReleaseBootleg = (type) => {
  if (type !== "bootleg") {
    return tracks.filter(elem => elem.type === type).sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return tracks.filter(elem => elem.type === type).sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const releasePageType = (type) => {
  if (type == "release") {
    return { release_type: "releases", type_page: "" };
  }
  return { release_type: "bootlegs", type_page: "bootlegs" };
};

export const onScreen = (el) => {
  const rect = el.getBoundingClientRect();
  return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
};
