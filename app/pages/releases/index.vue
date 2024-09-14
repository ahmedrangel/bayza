<script setup lang="ts">
definePageMeta({ layout: "site" });

useSeoMeta({
  title: `Releases | ${SITE.name}`,
  description: "Releases",
  // OG
  ogUrl: `${SITE.url}/releases`,
  ogType: "website",
  ogTitle: `${SITE.name} Releases`,
  ogSiteName: SITE.name,
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

const pagination = ref(0);
const perPage = 12;
const lastRow = ref<HTMLElement[]>();
const allTracks = ref<Tracks[]>([]);

const getTracks = (page: number) => {
  const startIndex = (page) * perPage;
  const endIndex = startIndex + perPage;
  return tracks.sort((a, b) => Number(new Date(b.date as string)) - Number(new Date(a.date as string))).filter(el => Number(new Date(el.date as string)) <= Date.now() && el.id).slice(startIndex, endIndex);
};

allTracks.value.push(...getTracks(pagination.value));

const scrollHandler = () => {
  if (onScreen(lastRow.value![0]!) && getTracks(pagination.value + 1).length) {
    pagination.value++;
    const newTracks = getTracks(pagination.value);
    allTracks.value.push(...newTracks);
  }
};

onMounted(() => {
  addEventListener("scroll", scrollHandler);
});

onBeforeUnmount(() => {
  removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <main>
    <section id="releases" class="bg-darkest">
      <div class="container text-secondary text-center py-5">
        <h3 class="mt-5 text-uppercase text-white">All Releases</h3>
        <div class="row my-4 text-start">
          <template v-for="(tracks, i) of allTracks" :key="i">
            <div class="col-6 col-lg-3" data-aos="fade-in">
              <div class="item">
                <div class="cover">
                  <NuxtLink :to="`/track/${tracks.id}`">
                    <div class="overflow-hidden">
                      <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${tracks.year}/${tracks.cover}.jpg`" :alt="`${tracks.artists} - ${tracks.title}`">
                    </div>
                    <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ tracks.title }}</p></small></h5>
                  </NuxtLink>
                  <small><p class="mb-0">{{ tracks.artists }}</p></small>
                  <small v-if="tracks.date"><p class="mb-4">{{ dateFormat(tracks.date) }}</p></small>
                </div>
              </div>
            </div>
            <span v-if="i === allTracks.length - 1" ref="lastRow" class="m-0 p-0" />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
