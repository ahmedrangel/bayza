declare global {
  type Platforms = "amazon" | "amazon-music" | "apple" | "bandcamp" | "beatport" | "deezer" | "download" | "itunes" | "soundcloud" | "spotify" | "tidal" | "tiktok" | "yandex" | "youtube";

  interface Tracks {
    album?: string;
    artists?: string;
    cover?: string;
    dark?: boolean;
    date?: string;
    description?: string;
    duration?: string;
    fanlink?: string;
    fanlinkId?: string;
    fanlinks?: {
      "amazon"?: string;
      "amazon-music"?: string;
      "anghami"?: string;
      "apple"?: string;
      "bandcamp"?: string;
      "beatport"?: string;
      "deezer"?: string;
      "download"?: string;
      "itunes"?: string;
      "soundcloud"?: string;
      "spotify"?: string;
      "tidal"?: string;
      "tiktok"?: string;
      "vk"?: string;
      "yandex"?: string;
      "youtube"?: string;
    };
    genre?: string;
    id?: string;
    image?: string;
    label?: string;
    title?: string;
    type?: string;
    video?: string;
    year?: number;
  }
}

export {};
