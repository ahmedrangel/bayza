const SITE = {
  name: "Bayza",
  domain: "bayzamusic.com",
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
  protocol: "https",
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
    youtube: "https://youtube.com/bayza",
    twitter: "https://twitter.com/bayzamusic",
    facebook: "https://facebook.com/bayzamusic",
    instagram: "https://instagram.com/bayzamusic",
    musicbrainz: "https://musicbrainz.org/artist/7b200a18-08d4-4d29-b0ce-ba6cd0a9b5e4"
  },
  platforms: {
    spotify: "https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX",
    soundcloud: "https://soundcloud.com/bayza",
    youtube: "https://youtube.com/bayza",
    apple: "https://music.apple.com/us/artist/bayza/882647839?app=music&ls=1",
    itunes: "https://music.apple.com/us/artist/bayza/882647839?app=itunes&ls=1",
    beatport: "https://www.beatport.com/artist/bayza/411994",
    deezer: "https://www.deezer.com/en/artist/6003758",
    amazon: "https://music.amazon.com/artists/B00KX8ETU6/bayza",
    tidal: "https://tidal.com/browse/artist/6374717",
    yandex: "https://music.yandex.com/artist/3753809",
    vk: "https://vk.com/artist/bayza",
    anghami: "https://play.anghami.com/artist/1414847",
    bandcamp: "https://bayza.bandcamp.com/"
  },
  merch: "https://merch.streamelements.com/bayza",
  fanlinks: "https://lnk.bayzamusic.com"
};

SITE.url = `${SITE.protocol}://${SITE.domain}`;

export { SITE };