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

export const isBootleg = (year) => {
  const type = "-bootlegs";
  if (!year.includes(type)) {
    return tracks.filter((elem) => {
      return elem.year == year;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (year === "all-bootlegs") {
    return tracks.filter((elem) => {
      return elem.link === type;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return tracks.filter((elem) => {
    return elem.year === Number(year.replace(type, "")) && elem.link === type;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const isReleaseBootleg = (year) => {
  const type = "-bootlegs";
  if (!year.includes(type)) {
    return tracks.filter((elem) => {
      return elem.link !== type && elem.release !== year;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return tracks.filter((elem) => {
    return elem.link === type && elem.release !== year;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const releasePageType = (type) => {
  if (type == "Releases") {
    return {release_type: "releases", type_page: ""};
  }
  return {release_type: "bootlegs", type_page: "all-bootlegs"};
};