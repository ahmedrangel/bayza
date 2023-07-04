<script setup>
definePageMeta({ layout: "site" });
</script>
<template>
  <section id="releases" class="bg-darkest">
    <div class="container text-secondary text-center py-5">
      <h3 class="mt-5 text-uppercase text-white">Releases</h3>
      <h4 class="font-weight-light">{{ param }}</h4>
      <div class="row my-4 text-start">
        <div v-for="(tracks, index) of listTracks" :key="index" class="col-6 col-lg-3" data-aos="fade-in" data-aos-easing="ease-in-sine">
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
</template>
<script>
export default {
  name: "YearPage",
  data () {
    return {
      param: this.$route.params.year,
    };
  },
  computed: {
    listTracks () {
      return this.isBootleg();
    },
  },
  created () {
    const url = `${SITE.url}/releases/${this.param}`;
    const cover = `${SITE.url}/${SITE.cover}`;
    const logo = `${SITE.url}/${SITE.logo}`;
    const title = `${SITE.name} ${this.listTracks[0].year} ${this.listTracks[0].type}`;
    const description = `${this.listTracks[0].year} ${this.listTracks[0].type}`;
    useHead({
      title: `${this.param} | ${SITE.name}`,
      meta: [
        { name: "keywords", content: `releases, ${this.listTracks[0].year}, ${this.listTracks[0].type}, singles, stream, music, dance, EDM` },
        { name: "description", content: description },
        // Protocolo Open Graph
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:site_name", content: SITE.name },
        { property: "og:image", content: cover },
        { property: "og:image:width", content: "300" },
        { property: "og:image:height", content: "300" },
        { property: "og:image:alt", content: title },
        { property: "og:description", content: description },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:image", content: logo },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:site", content: `@${SITE.twitter}` }
      ],
      link: [
        { rel: "canonical", href: url }
      ]
    });
  },
  methods: {
    isBootleg () {
      const type = "-bootlegs";
      if (!this.param.includes(type)) {
        return tracks.filter((elem) => {
          return elem.year == this.param;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (this.param === "all-bootlegs") {
        return tracks.filter((elem) => {
          return elem.link === type;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
      } else {
        return tracks.filter((elem) => {
          return elem.year === Number(this.param.replace(type, "")) && elem.link === type;
        }).sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    }
  }
};
</script>