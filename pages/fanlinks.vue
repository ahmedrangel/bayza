<script setup>
definePageMeta({ layout: "site" });
const { data: results } = await useFetch("/api/fanlinks");
const data = fanlinks(results.value);

useSeoMeta({
  title: "Fanlinks | " + SITE.name,
  description: "Bayza Fanlinks",
  keywords: SITE.keywords + ", fanlinks",
  // OG
  ogUrl: SITE.url + "/fanlinks",
  ogType: "website",
  ogTitle: "Fanlinks | " + SITE.name,
  ogSieName: SITE.name,
  ogDescription: "Bayza Fanlinks",
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageAlt: SITE.name,
  // Twitter
  twitterCard: "summary",
  twitterTitle: "Fanlinks | " + SITE.name,
  twitterDescription: "Bayza Fanlinks",
  twitterImage: `${SITE.url}/${SITE.logo}`,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  link: [{ rel: "canonical", href: SITE.url + "/fanlinks" }]
});
</script>

<template>
  <main>
    <section id="fanlinks" class="overflow-hidden">
      <div class="bg-fanlinks h-100 position-fixed start-0 end-0" />
      <div class="container py-5 px-2">
        <div class="row g-2">
          <div v-for="(key, i) in data" :key="i" class="col-6 col-md-4 col-lg-3">
            <div class="card overflow-hidden my-3 p-0 bg-dark border-0 text-white">
              <img class="img-fluid" :src="key.image_secure">
              <div class="p-2 p-lg-3 text-center">
                <h5>{{ key.title }}</h5>
                <h6 class="mb-0">{{ key.artists }}</h6>
              </div>
              <a type="button" target="_blank" class="btn btn-primary btn-lg text-white text-decoration-none" :href="`${SITE.fanlinks}/${i}`">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>