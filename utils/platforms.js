export const fanlinks = (data) => {
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      data[key].date = new Date(data[key].date);
    }
  }

  const sortedKeys = Object.keys(data).sort((a, b) => data[b].date - data[a].date);
  const sortedReleases = {};

  for (const key of sortedKeys) {
    sortedReleases[key] = data[key];
  }

  return sortedReleases;
};

export const fixSlug = (str) => {
  let release_str;
  if (str == "lo-vas-a-olvidar") {
    release_str = "lvao";
  } else if (str == "everythingiwanted") {
    release_str = "everything-i-wanted";
  } else if (str == "desert-rose-enta-omri") {
    release_str = "desert-rose";
  } else if (str == "my-head-my-heart" || str == "without-you" || str == "no-guarantee" || str == "hold-on-to-me" || str == "make-believe" || str == "not-my-baby" || str == "still-learning" || str == "strawberry-shortcake") {
    release_str = str;
  } else {
    release_str = str.replace(/-/g, "");
  }
  return release_str;
};

export const platforms = (data) => {
  let store_title;
  let icon = "";
  let icon_insert = "";
  const stores_array = [];
  let key = 0;
  if (!data) return [];
  Object.entries(data).forEach(([i, stores]) => {
    if (stores !== "" && i !== "dark" && i !== "title" && i !== "artists" && i !== "date" && i !== "image" &&
      i !== "image_secure" && i !== "tidal-buy" && i !== "amazon-music" && i !== "download") {
      icon = "" + i;
      icon_insert = "";
      store_title = "";
      if (i === "itunes") {
        store_title = "iTunes Store";
        icon = "ic:sharp-star-rate";
      } else if (i === "beatport") {
        store_title = "Beatport";
        icon = "simple-icons:beatport";
      } else if (i === "spotify") {
        store_title = "Spotify";
        icon = "simple-icons:spotify";
      } else if (i === "apple") {
        store_title = "Apple Music";
        icon = "simple-icons:apple";
      } else if (i === "soundcloud") {
        store_title = "SoundCloud";
        icon = "simple-icons:soundcloud";
      } else if (i === "youtube") {
        store_title = "YouTube";
        icon = "simple-icons:youtube";
      } else if (i === "amazon") {
        store_title = "Amazon";
        icon = "simple-icons:amazon";
      } else if (i === "deezer") {
        store_title = "Deezer";
        icon = "simple-icons:deezer";
      } else if (i === "napster") {
        store_title = "Napster";
        icon = "fa6-brands:napster";
      } else if (i === "tiktok") {
        store_title = "TikTok";
        icon = "simple-icons:tiktok";
      } else if (i === "yandex") {
        store_title = "Yandex Music";
        icon = "fa6-brands:yandex";
      } else if (i === "bandcamp") {
        store_title = "Bandcamp";
        icon = "simple-icons:bandcamp";
      } else if (i === "tidal") {
        store_title = "Tidal";
        icon = "simple-icons:tidal";
      } else if (i === "anghami") {
        store_title = "Anghami";
        icon_insert = "<span class=\"fab fa-anghami fa-fw\" aria-hidden=\"true\"><img src=\"/images/anghami-logo.svg\"></span>";
        icon = "";
      } else if (i === "vk") {
        store_title = "VKontakte";
        icon = "simple-icons:vk";
      } else {
        icon = "";
        icon_insert = "";
      }
      stores_array.push({
        id: i,
        store_title: store_title,
        stores: stores,
        icon: icon,
        key: key,
        icon_insert: icon_insert,
      });
      key = key + 1;
      icon_insert = "";
    }
  });
  const stores_order = ["spotify","apple","soundcloud","youtube","deezer","beatport","itunes","yandex","vk","anghami","amazon","tidal","napster","tiktok","bandcamp"];
  const sortedObj = stores_array.sort((a, b) => {
    return (
      stores_order.indexOf(a.id) - stores_order.indexOf(b.id)
    );
  });
  return sortedObj;
};