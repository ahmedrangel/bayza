<script setup>
definePageMeta({ layout: "site" });

useSeoMeta({
  title: `Releases | ${SITE.name}`,
  description: "Releases",
  keywords: "releases, singles, stream, music, dance, EDM",
  // OG
  ogUrl: `${SITE.url}/releases`,
  ogType: "website",
  ogTitle: `${SITE.name} Releases`,
  ogSieName: SITE.name,
  ogDescription: "Releases",
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageAlt: `${SITE.name} Releases`,
  // Twitter
  twitterCard: "summary",
  twitterTitle: `${SITE.name} Releases`,
  twitterDescription: "Releases",
  twitterImage: `${SITE.url}/${SITE.logo}`,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  link: [{ rel: "canonical", href: SITE.url + "/releases" }]
});

const allTracks = computed(() => {
  return tracks.sort((a, b) => new Date(b.date) - new Date(a.date));
});
</script>

<template>
  <main>
    <section id="releases" class="bg-darkest">
      <div class="container text-secondary text-center py-5">
        <h3 class="mt-5 text-uppercase text-white">All Releases</h3>
        <div class="row my-4 text-start">
          <div v-for="(tracks, index) of allTracks" :key="index" class="col-6 col-lg-3" data-aos="fade-in">
            <div class="item">
              <div class="cover">
                <NuxtLink :to="`/releases/${tracks.year}${releaseType(tracks.link)}/${tracks.release}`">
                  <div class="overflow-hidden">
                    <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${tracks.year}/${tracks.cover}.jpg`" :alt="`${ tracks.artists } - ${ tracks.title }`">
                  </div>
                  <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ tracks.title }}</p></small></h5>
                </NuxtLink>
                <small><p class="mb-0">{{ tracks.artists }}</p></small>
                <small><p class="mb-4">{{ dateFormat(tracks.date) }}</p></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>