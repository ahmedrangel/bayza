<script setup>
definePageMeta({ layout: "site" });
const { params } = useRoute();
const { years, release } = params;
const { data: results } = await useFetch("/api/fanlinks/" + fixSlug(release));

const releaseTrack = computed(() => {
  return tracks.filter((elem) => {
    return elem.release === release;
  })[0];
});

const moreTracks = computed(() => {
  return isReleaseBootleg(years).slice(0, 8);
});

const url = `${SITE.url}/releases/${years}/${release}`;
const imageUrl = `${SITE.url}/images/releases/${years}/${releaseTrack.value.cover}.jpg`;
const title = `${releaseTrack.value.artists} - ${releaseTrack.value.title}`;
const description = releaseTrack.value.description != null ? releaseTrack.value.description : releaseTrack.value.title;

const schemaOrg = {
  "@context": "http://schema.org",
  "@type": "MusicRecording",
  name: releaseTrack.value.title,
  url: url,
  image: imageUrl,
  genre: releaseTrack.value.genre,
  duration: releaseTrack.value.duration,
  datePublished: new Date(releaseTrack.value.date),
  byArtist: [{
    "@type": "MusicGroup",
    "name": releaseTrack.value.artists
  }]
};

useSeoMeta({
  title: `${years} | ${SITE.name}`,
  description: description,
  keywords: `release, ${releaseTrack.value.title}, ${releaseTrack.value.genre}, ${releaseTrack.value.year}, play, stream, download, fanlink, music, EDM`,
  // OG
  ogUrl: `${SITE.url}/releases/${years}/${release}`,
  ogType: "website",
  ogTitle: title,
  ogSieName: SITE.name,
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
  link: [{ rel: "canonical", href: `${SITE.url}/releases/${years}/${release}` }]
});

const obj = platforms(results.value);
</script>

<template>
  <main>
    <section id="releases" class="bg-darkest">
      <div class="container text-secondary text-center pt-3 pb-4 px-3">
        <h3 class="mt-5 text-capitalize text-white">{{ releaseTrack.title }}</h3>
        <h4 class="font-weight-light mb-0">{{ releaseTrack.artists }}</h4>
        <div id="reproductor" class="me-5 ms-5 px-5" data-aos="fade-in">
          <div class="text-center py-3">
            <div class="video-container">
              <iframe width="1280" height="720" :src="`https://www.youtube-nocookie.com/embed/${releaseTrack.video}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; gyroscope; fullscreen;" />
            </div>
          </div>
        </div>
        <div id="track-info" class="row mt-4 mb-4 pt-3 bg-dark">
          <div class="col-12 col-lg-5 info text-center mb-3 px-3">
            <img class="img-fx img-fluid release-color-covers" :src="`/images/releases/${releaseTrack.year}/${releaseTrack.cover}.jpg`" :alt="`${releaseTrack.artists} - ${releaseTrack.title}`">
          </div>
          <div class="track-info-tags col-12 col-lg-7 meta text-justify px-3">
            <div class="tags">
              <h5 v-if="releaseTrack.description" class="mb-0"><span class="meta-heading mb-0 text-white">Description:</span></h5>
              <!-- eslint-disable-next-line vue/no-v-html-->
              <h6 class="mb-2"><span v-html="releaseTrack.description" /></h6>
              <h5 v-if="releaseTrack.genre" class="mb-0"><span class="meta-heading mb-0 text-white">Genre:</span></h5>
              <h6 class="mb-2"><span class="tag">{{ releaseTrack.genre }}</span></h6>
              <h5 v-if="releaseTrack.album" class="mb-0"><span class="meta-heading mb-0 text-white">Album:</span></h5>
              <h6 class="mb-2"><span class="tag">{{ releaseTrack.album }}</span></h6>
              <h5 v-if="releaseTrack.label" class="mb-0"><span class="meta-heading mb-0 text-white">Label:</span></h5>
              <h6 class="mb-2"><span class="tag">{{ releaseTrack.label }}</span></h6>
              <h5 v-if="releaseTrack.date" class="mb-0"><span class="meta-heading mb-0 text-white">Release date:</span></h5>
              <h6 class="mb-2"><span class="tag">{{ dateFormat(releaseTrack.date) }}</span></h6>
              <h5 v-if="releaseTrack.duration" class="mb-0"><span class="meta-heading mb-0 text-white">Duration:</span></h5>
              <h6 class="mb-2"><span class="tag">{{ releaseTrack.duration }}</span></h6>
              <h5 v-if="releaseTrack.fanlink" class="mb-0"><span class="meta-heading mb-0 text-white">Fanlink:</span></h5>
              <h6 class="mb-2"><span><a class="tag d-inline-flex align-items-center" target="_blank" :href="`https://${releaseTrack.fanlink}`">{{ releaseTrack.fanlink }}<Icon class="external-link ms-1 fa-fw" name="ri:external-link-line" /></a></span></h6>
              <div id="platforms" class="mt-2 mb-1 d-flex flex-wrap justify-content-left">
                <div v-for="(value, index) of obj" :key="index" class="me-2 mb-2" :title="value.store_title" data-aos="fade-up">
                  <a :class="`icons-fx text-white platform-icons ${value.id}_card rounded-circle`" :href="value.stores" target="_blank">
                    <Icon v-if="value.id !== 'anghami'" class="fa-fw" :name="value.icon" />
                    <span v-else><span class="fab fa-anghami fa-fw" aria-hidden="true">
                      <img src="/images/anghami-logo.svg"></span></span><span class="visually-hidden">{{ value.store_title }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="border-top: 2px solid #bbbbbb; width: 30%;" />
        <div id="more_tracks" class="pt-4 text-start">
          <div id="more_releases" class="pb-4">
            <h4 class="m-0 text-white">More <a class="tag" :href="`/releases/${releasePageType(releaseTrack.type).type_page}`">{{ releasePageType(releaseTrack.type).release_type }}</a> by Bayza</h4>
          </div>
          <div class="row">
            <div v-for="(item, index) of moreTracks" :key="index" class="col-6 col-lg-3" data-aos="fade-in">
              <div class="item">
                <div class="cover">
                  <NuxtLink :to="`/releases/${item.year}${releaseType(item.link)}/${item.release}`">
                    <div class="overflow-hidden">
                      <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${item.year}/${item.cover}.jpg`" :alt="`${item.artists} - ${item.title}`">
                    </div>
                    <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ item.title }}</p></small></h5>
                  </NuxtLink>
                  <small><p class="mb-0">{{ item.artists }}</p></small>
                  <small><p class="mb-4">{{ dateFormat(item.date) }}</p></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>