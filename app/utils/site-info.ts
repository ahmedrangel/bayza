const protocol = "https";
const domain = "bayza.music";

const SITE = {
  name: "Bayza",
  domain: domain,
  person: {
    fullname: "Ahmed Rangel",
    birthdate: "1998-06-15",
    country: {
      id: "https://musicbrainz.org/area/6f85633b-dff4-3fb4-babd-fb89b3628041",
      name: "Panama"
    },
    province: {
      id: "https://musicbrainz.org/area/e4038ab2-0e15-4987-855a-adf4f0878645",
      name: "Panamá"
    }
  },
  protocol: protocol,
  meta_description: "Bayza is a Panamanian musician and producer.",
  description: "Panamanian musician and producer",
  keywords: "bayza, website, dj, producer, panama, music, EDM, dance, musician, artist, ahmed",
  email: "info@bayzamusic.com",
  logo: "images/logomt.jpg",
  image: "images/ahmed_bannerweb3.jpg",
  cover: "images/logomt-sq-300.jpg",
  spotify_id: "0UFz5jBFwlNKaq1JwESYnX",
  twitter: "bayzamusic",
  instagram: "bayzamusic",
  socials: {
    spotify: "https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX",
    soundcloud: "https://soundcloud.com/bayza",
    youtube: "https://youtube.com/@bayza",
    twitter: "https://twitter.com/bayzamusic",
    facebook: "https://facebook.com/bayzamusic",
    instagram: "https://instagram.com/bayzamusic",
    musicbrainz: "https://musicbrainz.org/artist/7b200a18-08d4-4d29-b0ce-ba6cd0a9b5e4"
  },
  platforms: [
    {
      id: "spotify",
      title: "Spotify",
      icon: "simple-icons:spotify",
      url: "https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX",
      background: "#1db954"
    },
    {
      id: "soundcloud",
      title: "SoundCloud",
      icon: "simple-icons:soundcloud",
      url: "https://soundcloud.com/bayza",
      background: "linear-gradient(180deg,#f70,#ff3400)"
    },
    {
      id: "youtube",
      title: "YouTube",
      icon: "simple-icons:youtube",
      url: "https://youtube.com/@bayza",
      background: "#ff0000"
    },
    {
      id: "apple",
      title: "Apple Music",
      icon: "simple-icons:apple",
      url: "https://music.apple.com/us/artist/bayza/882647839?app=music&ls=1",
      background: "linear-gradient(180deg,#fb5b73,#fa243c)"
    },
    {
      id: "itunes",
      title: "iTunes",
      icon: "simple-icons:itunes",
      url: "https://music.apple.com/us/artist/bayza/882647839?app=itunes&ls=1",
      background: "linear-gradient(135deg,#fa243c,#8d54fe,#22c9fd)"
    },
    {
      id: "beatport",
      title: "Beatport",
      icon: "simple-icons:beatport",
      url: "https://www.beatport.com/artist/bayza/411994",
      color: "#00ff95",
      background: "#020202"
    },
    {
      id: "deezer",
      title: "Deezer",
      icon: "simple-icons:deezer",
      url: "https://www.deezer.com/en/artist/6003758",
      background: "#a238ff"
    },
    {
      id: "amazon-music",
      title: "Amazon Music",
      icon: "simple-icons:amazon",
      url: "https://music.amazon.com/artists/B00KX8ETU6/bayza",
      background: "linear-gradient(180deg,#4300fd,#2b206e)"
    },
    {
      id: "tidal",
      title: "Tidal",
      icon: "simple-icons:tidal",
      url: "https://tidal.com/browse/artist/6374717",
      background: "#010101"
    },
    {
      id: "yandex",
      title: "Yandex Music",
      icon: "brandico:yandex",
      url: "https://music.yandex.com/artist/3753809",
      color: "#f33",
      background: "#ffcb00"
    },
    {
      id: "vk",
      title: "VK",
      icon: "simple-icons:vk",
      url: "https://vk.com/artist/bayza",
      background: "#07f"
    },
    {
      id: "anghami",
      title: "Anghami",
      url: "https://play.anghami.com/artist/1414847",
      background: "#010101",
      logo: "/images/anghami-logo.svg"
    },
    {
      id: "bandcamp",
      title: "Bandcamp",
      icon: "simple-icons:bandcamp",
      url: "https://bayza.bandcamp.com/",
      background: "#1da0c3"
    },
    {
      id: "tiktok",
      title: "TikTok",
      icon: "simple-icons:tiktok",
      background: "#010101"
    }
  ],
  merch: "https://merch.streamelements.com/bayza",
  fanlinks: "https://lnk.bayza.music",
  url: `${protocol}://${domain}`
};

export { SITE };
