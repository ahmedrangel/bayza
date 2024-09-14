export const dateFormat = (datestring: string) => {
  const date = new Date(datestring);
  const format: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const formatted = date.toLocaleDateString("en-US", format);
  return formatted;
};

export const releaseType = (type: string) => {
  return !type ? "" : type;
};

export const getAge = () => {
  const now = new Date();
  const birth = new Date("June 15, 1998 00:00:00");
  const diff = Math.abs(Number(now) - Number(birth));
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

export const isReleaseBootleg = (type: string) => {
  if (type !== "bootleg") {
    return tracks.filter(elem => elem.type === type).sort((a, b) => Number(new Date(b.date as string)) - Number(new Date(a.date as string)));
  }
  return tracks.filter(elem => elem.type === type).sort((a, b) => Number(new Date(b.date as string)) - Number(new Date(a.date as string)));
};

export const releasePageType = (type: string) => {
  if (type == "release") {
    return { release_type: "releases", type_page: "" };
  }
  return { release_type: "bootlegs", type_page: "bootlegs" };
};

export const onScreen = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth);
};
