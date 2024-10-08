<script setup lang="ts">
definePageMeta({ layout: "site" });
const { params } = useRoute();
const { id } = params;

const track = computed(() => {
  return tracks.filter((elem) => {
    return elem.id === id;
  })[0];
}).value;

if (!track) {
  throw createError({
    statusCode: 404,
    message: "Music not found",
    fatal: true
  });
}

const moreTracks = computed(() => {
  return isReleaseBootleg(track.type!).filter(el => Number(new Date(el.date as string)) <= Date.now() && el.id !== id && el.id).slice(0, 8);
});

const url = `${SITE.url}/track/${id}`;
const imageUrl = `${SITE.url}/images/releases/${track.year}/${track.cover}.jpg`;
const title = `${track.artists} - ${track.title}`;
const description = track.description != null ? track.description : track.title;

const schemaOrg = {
  "@context": "http://schema.org",
  "@type": "MusicRecording",
  "name": track.title,
  "url": url,
  "image": imageUrl,
  "genre": track.genre,
  "duration": track.duration,
  "datePublished": new Date(track.date as string),
  "byArtist": [{
    "@type": "MusicGroup",
    "name": track.artists
  }]
};

useSeoMeta({
  title: `${title} | ${SITE.name}`,
  description: description,
  // OG
  ogUrl: url,
  ogType: "website",
  ogTitle: title,
  ogSiteName: SITE.name,
  ogDescription: description,
  ogImage: imageUrl,
  ogImageWidth: 500,
  ogImageHeight: 500,
  ogImageAlt: title,
  // Twitter
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imageUrl,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [{ type: "application/ld+json", children: JSON.stringify(schemaOrg) }],
  link: [{ rel: "canonical", href: url }]
});

const platformOrder = ["spotify", "apple", "soundcloud", "youtube", "deezer", "beatport", "itunes", "yandex", "vk", "anghami", "amazon-music", "tidal", "tiktok", "bandcamp"];
const fanlinkKeys = track?.fanlinks ? (Object.keys(track.fanlinks)).sort((a, b) => platformOrder.indexOf(a) - platformOrder.indexOf(b)) as Platforms[] : null;

const platformMatch = (name: string) => {
  return SITE.platforms.find(el => el.id === name);
};
</script>

<template>
  <main>
    <section id="releases" class="bg-darkest">
      <div class="container text-secondary text-center pt-3 pb-4 px-3">
        <h3 class="mt-5 text-capitalize text-white">{{ track.title }}</h3>
        <h4 class="font-weight-light mb-0">{{ track.artists }}</h4>
        <div v-if="track.video" id="reproductor" class="mx-5 px-5 pt-3" data-aos="fade-in">
          <VideoContainer :video-id="track.video" />
        </div>
        <div id="track-info" class="row mt-4 mb-4 pt-3 bg-dark">
          <div class="col-12 col-lg-5 info text-center mb-3 px-3">
            <img class="img-fx img-fluid release-color-covers" :src="`/images/releases/${track.year}/${track.cover}.jpg`" :alt="`${track.artists} - ${track.title}`">
          </div>
          <div class="track-info-tags col-12 col-lg-7 meta text-justify px-3">
            <div class="tags">
              <span v-if="track.description">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Description:</span></h5>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <h6 class="mb-2"><span v-html="track.description" /></h6>
              </span>
              <span v-if="track.genre">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Genre:</span></h5>
                <h6 class="mb-2"><span class="tag">{{ track.genre }}</span></h6>
              </span>
              <span v-if="track.album">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Album:</span></h5>
                <h6 class="mb-2"><span class="tag">{{ track.album }}</span></h6>
              </span>
              <span v-if="track.label">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Label:</span></h5>
                <h6 class="mb-2"><span class="tag">{{ track.label }}</span></h6>
              </span>
              <span v-if="track.date">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Release date:</span></h5>
                <h6 class="mb-2"><span class="tag">{{ dateFormat(track.date) }}</span></h6>
              </span>
              <span v-if="track.duration">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Duration:</span></h5>
                <h6 class="mb-2"><span class="tag">{{ track.duration }}</span></h6>
              </span>
              <span v-if="track.fanlink">
                <h5 class="mb-0"><span class="meta-heading mb-0 text-white">Fanlink:</span></h5>
                <h6 class="mb-2"><span><a class="tag d-inline-flex align-items-center" target="_blank" :href="`https://${track.fanlink}`">{{ track.fanlink }}<Icon class="external-link ms-1 fa-fw" name="ri:external-link-line" /></a></span></h6>
              </span><div id="platforms" class="mt-2 mb-1 d-flex flex-wrap justify-content-left">
                <template v-for="(platform, i) of fanlinkKeys" :key="i">
                  <div v-if="track.fanlinks && track.fanlinks[platform] && platformMatch(platform)" class="m-1" data-aos="fade-up">
                    <a class="icons-hover text-white platform-icons rounded-3 d-flex justify-content-center align-items-center" :href="track.fanlinks[platform]" target="_blank" :title="platformMatch(platform)?.title" :style="{ background: platformMatch(platform)?.background, color: platformMatch(platform)?.color + '!important' }">
                      <Icon v-if="platformMatch(platform)?.icon" :name="String(platformMatch(platform)?.icon)" style="font-size: 25px" />
                      <img v-else :src="platformMatch(platform)?.logo" style="height: 25px;">
                    </a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div style="border-top: 2px solid #bbbbbb; width: 30%;" />
        <div id="more_tracks" class="pt-4 text-start">
          <div id="more_releases" class="pb-4">
            <h4 class="m-0 text-white">More <a class="tag" :href="`/releases/${releasePageType(track.type!).type_page}`">{{ releasePageType(track.type!).release_type }}</a> by Bayza</h4>
          </div>
          <div class="row">
            <div v-for="(item, i) of moreTracks" :key="i" class="col-6 col-lg-3" data-aos="fade-in">
              <div class="item">
                <div class="cover">
                  <NuxtLink :to="`/track/${item.id}`">
                    <div class="overflow-hidden">
                      <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${item.year}/${item.cover}.jpg`" :alt="`${item.artists} - ${item.title}`">
                    </div>
                    <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ item.title }}</p></small></h5>
                  </NuxtLink>
                  <small><p class="mb-0">{{ item.artists }}</p></small>
                  <small v-if="item.date"><p class="mb-4">{{ dateFormat(item.date) }}</p></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
