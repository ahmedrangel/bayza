<script setup lang="ts">
definePageMeta({ layout: "site" });

const { params } = useRoute();
const { years } = params;

const pagination = ref(0);
const perPage = 12;
const lastRow = ref<HTMLElement[]>();
const listTracks = ref<Tracks[]>([]);

const getTracks = (page: number) => {
  const startIndex = (page) * perPage;
  const endIndex = startIndex + perPage;
  if (years === "bootlegs") return tracks.filter(el => el.type === "bootleg").slice(startIndex, endIndex);
  return tracks.filter(el => el.year === Number(years)).slice(startIndex, endIndex);
};

listTracks.value.push(...getTracks(pagination.value));

if (!listTracks.value[0]) {
  throw createError({
    statusCode: 404,
    message: "Tracks not found",
    fatal: true
  });
}

const title = `${SITE.name} ${listTracks.value[0].year} ${listTracks.value[0].type}`;
const description = `${listTracks.value[0].year} ${listTracks.value[0].type}`;

useSeoMeta({
  title: `${years} | ${SITE.name}`,
  description: description,
  // OG
  ogUrl: `${SITE.url}/releases/${years}`,
  ogType: "website",
  ogTitle: title,
  ogSiteName: SITE.name,
  ogDescription: description,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageAlt: title,
  // Twitter
  twitterCard: "summary",
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${SITE.url}/${SITE.logo}`,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  link: [{ rel: "canonical", href: `${SITE.url}/releases/${years}` }]
});

const scrollHandler = () => {
  if (onScreen(lastRow.value![0]!) && getTracks(pagination.value + 1).length) {
    pagination.value++;
    const newTracks = getTracks(pagination.value);
    listTracks.value.push(...newTracks);
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
        <h3 class="mt-5 text-uppercase text-white">Releases</h3>
        <h4 class="font-weight-light">{{ years }}</h4>
        <div class="row my-4 text-start">
          <template v-for="(tracks, i) of listTracks" :key="i">
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
            <span v-if="i === listTracks.length - 1" ref="lastRow" class="m-0 p-0" />
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
