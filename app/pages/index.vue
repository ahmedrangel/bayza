<script setup>
definePageMeta({ layout: "site" });
const hover = ref(false);

const schemaOrg = {
  "@context": "http://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": SITE.name,
      "url": SITE.url,
      "image": `${SITE.url}/${SITE.logo}`
    },
    {
      "@type": "Organization",
      "name": SITE.name,
      "url": SITE.url,
      "logo": `${SITE.url}/${SITE.logo}`,
      "image": `${SITE.url}/${SITE.cover}`,
      "description": SITE.meta_description
    },
    {
      "@type": ["Person", "MusicGroup"],
      "@id": SITE.socials.musicbrainz,
      "name": SITE.name,
      "alternateName": SITE.person.fullname,
      "url": SITE.url,
      "image": `${SITE.url}/${SITE.cover}`,
      "description": SITE.meta_description,
      "birthDate": SITE.person.birthdate,
      "birthPlace": {
        "@type": "AdministrativeArea",
        "@id": SITE.person.province.id,
        "name": SITE.person.province.name,
        "containedIn": {
          "@type": "Country",
          "@id": SITE.person.country.id,
          "name": SITE.person.country.name
        }
      },
      "sameAs": [
        SITE.socials.youtube,
        SITE.socials.soundcloud,
        SITE.socials.facebook,
        SITE.socials.twitter,
        SITE.socials.instagram
      ]
    }
  ]
};

useSeoMeta({
  title: SITE.name,
  description: SITE.description,
  keywords: SITE.keywords,
  // OG
  ogUrl: SITE.url,
  ogType: "website",
  ogTitle: SITE.name,
  ogSieName: SITE.name,
  ogDescription: SITE.description,
  ogImage: `${SITE.url}/${SITE.cover}`,
  ogImageWidth: 300,
  ogImageHeight: 300,
  ogImageAlt: SITE.name,
  // Twitter
  twitterCard: "summary",
  twitterTitle: SITE.name,
  twitterDescription: SITE.description,
  twitterImage: `${SITE.url}/${SITE.logo}`,
  twitterSite: `@${SITE.twitter}`
});

useHead({
  script: [{ type: "application/ld+json", children: JSON.stringify(schemaOrg) }],
  link: [{ rel: "canonical", href: SITE.url }]
});

const lastTrack = computed(() => {
  return tracks.sort((a, b) => new Date(b.date) - new Date(a.date)).filter(el => new Date(el.date) <= Date.now())[0];
});

const upcoming = computed(() => {
  return tracks.filter(el => new Date(el.date) > Date.now());
});

const indexTracks = computed (() => {
  return tracks.sort((a, b) => new Date(b.date) - new Date(a.date)).filter(el => new Date(el.date) <= Date.now()).slice(0, 12 - upcoming.value.length);
});

const featuredVideos = [
  "https://www.youtube-nocookie.com/embed/nQ0A1WWxuFY",
  "https://www.youtube-nocookie.com/embed/HRrD3Mj3sEY",
  "https://www.youtube-nocookie.com/embed/-vx3oZ4j4h0",
  "https://www.youtube-nocookie.com/embed/BwKO7sfFVAA"
];
</script>

<template>
  <main>
    <section id="dark" class="cabecera text-white py-5">
      <div class="container pt-4 cabecera-adjust" style="overflow-x: hidden;">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 text-start d-none d-md-block" data-aos="fade-right">
            <h1 class="display-4 text-uppercase">{{ SITE.name }}</h1>
            <h4 class="my-3 font-weight-light">{{ SITE.description }}</h4>
            <h5 class="mb-0 font-weight-light"><span>Contact: </span><a class="text-white" :href="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</a></h5>
          </div>
          <div class="col-12 col-md-12 text-center d-block d-md-none mt-4 mb-4" data-aos="zoom-in">
            <h1 class="display-4 text-uppercase mb-0">{{ SITE.name }}</h1>
            <h4 class="mt-2 mb-3 font-weight-light">{{ SITE.description }}</h4>
            <small><p class="mb-0"><span>Contact: </span><a class="text-white" :href="`mailto:${SITE.email}`" target="_blank">{{ SITE.email }}</a></p></small>
          </div>
          <div class="col-12 col-md-6 row text-end px-0 align-items-center" data-aos="fade-left">
            <div class="col-12 col-md-7 d-none d-md-block pe-0 text-secondary">
              <h5>Latest Release:</h5>
              <NuxtLink :to="`/releases/${lastTrack.year}${releaseType(lastTrack.link)}/${lastTrack.id}`" class="text-white latest-release-title" :class="{ underline: hover }">
                <h3 class="font-weight-light">{{ lastTrack.title }}</h3>
              </NuxtLink>
              <div><h5 class="font-weight-light">by {{ lastTrack.artists }}</h5></div>
              <small><p class="mb-0 mt-1">{{ dateFormat(lastTrack.date) }}</p></small>
            </div>
            <NuxtLink :to="`/releases/${lastTrack.year}${releaseType(lastTrack.link)}/${lastTrack.id}`" class="col-12 col-md-5 d-none d-md-block p-0 latest-release-cover" @mouseover="hover=true" @mouseout="hover=false">
              <div class="me-0 text-start px-2">
                <img id="covers" class="mx-auto d-flex w-100" :src="`/images/releases/${lastTrack.year}/${lastTrack.cover}.jpg`" alt="" style="max-width:230px;">
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section id="latest releases" class="bg-darkest">
      <div class="container text-secondary py-5 text-center" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">Recent Music</h3>
        <h5 class="font-weight-light">Check out my latest releases</h5>
        <div class="row my-4 text-start">
          <div v-for="(u, i) of upcoming" :key="i" class="col-6 col-lg-3" data-aos="fade-in">
            <div class="item">
              <div class="cover">
                <div class="upcoming-container">
                  <img class="img-fluid scale-on-hover upcoming" :src="`/images/releases/${u.year}/${u.cover}.jpg`">
                  <div class="centered">
                    <h4>Upcoming</h4>
                    <small><h5>{{ dateFormat(u.date) }}</h5></small>
                  </div>
                </div>
                <h5 class="mb-0"><small><p class="mb-0 mt-2">{{ u.title }}</p></small></h5>
                <small><p class="mb-4">{{ u.artists }}</p></small>
              </div>
            </div>
          </div>
          <div v-for="(tracks, index) of indexTracks" :key="index" class="col-6 col-lg-3" data-aos="fade-in">
            <div class="item">
              <div class="cover">
                <NuxtLink :to="`/releases/${tracks.year}${releaseType(tracks.link)}/${tracks.id}`">
                  <div class="overflow-hidden">
                    <img id="covers" class="img-fx img-fluid release-color-covers scale-on-hover" :src="`/images/releases/${tracks.year}/${tracks.cover}.jpg`" :alt="`${tracks.artists} - ${tracks.title}`">
                  </div>
                  <h5 class="mb-0" style="font-size: 1.25rem;"><small><p class="mb-0 mt-2">{{ tracks.title }}</p></small></h5>
                </NuxtLink>
                <small><p class="mb-0">{{ tracks.artists }}</p></small>
                <small><p class="mb-4">{{ dateFormat(tracks.date) }}</p></small>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink class="btn btn-outline-releases px-4 py-1" to="/releases/" data-aos="flip-left">See all releases</NuxtLink>
      </div>
    </section>
    <section id="music" class="bg-dark text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">Listen</h3>
        <h5 class="font-weight-light">Stream/Buy my music on your favorite platform</h5>
        <div class="mt-4 d-flex flex-wrap justify-content-center">
          <template v-for="(platform, i) of SITE.platforms" :key="i">
            <div v-if="platform.url" class="m-1">
              <a class="icons-hover text-white platform-icons rounded-3 d-flex justify-content-center align-items-center" :href="platform.url" target="_blank" :title="platform.title" :style="{ background: platform.background, color: platform.color + '!important' }">
                <Icon v-if="platform.icon" :name="platform.icon" style="font-size: 25px" />
                <img v-else :src="platform.logo" style="height: 25px;">
              </a>
            </div>
          </template>
        </div>
        <div class="row text-white">
          <div class="col-lg-6" data-aos="fade-right">
            <div class="mt-4">
              <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0tCEnL?utm_source=generator&theme=0" width="95%" height="500" frameBorder="0" allow="autoplay; clipboard-write; fullscreen; picture-in-picture;" loading="lazy" />
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left">
            <div class="mt-4">
              <iframe width="95%" height="500" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38787166&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=true&amp;show_teaser=true&amp;visual=false" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="yt_videos" class="bg-darkest text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">VIDEOS</h3>
        <h5 class="font-weight-light">Featured youtube videos</h5>
        <div class="row text-white">
          <div v-for="(v, i) of featuredVideos" :key="i" class="col-lg-6 mt-4" data-aos="fade-in">
            <div class="ratio ratio-16x9">
              <iframe class="rounded" width="1280" height="720" :src="v" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="bg-dark text-secondary text-center py-5">
      <div class="container" style="overflow-x: hidden;">
        <h3 class="mt-3 text-uppercase text-white">About</h3>
        <div id="about-desc" class="row">
          <div class="col-lg-8 my-3 font-weight-light text-justify" data-aos="fade-right">
            <p>
              Ahmed Rangel, also known as
              <b><a href="https://open.spotify.com/artist/0UFz5jBFwlNKaq1JwESYnX" target="_blank" title="Bayza Spotify">Bayza</a></b>, is a <span id="age">{{ getAge() }}</span> years old electronic/dance music producer from La Chorrera, Panama <i class="em em-flag-pa" aria-role="presentation" aria-label="Panama Flag" />.
            </p>
            <p>
              His very first steps with music comes  in 2014 releasing a big room house music during many years. It was until 2017 when he transitioned his style to melbourne bounce. In 2019 he finds himself in deep house style which fits him perfectly. He started making remixes of famous pop songs, then in September 2019 he self-released his first album named Genuine. In 2020 Bayza mainly focused on producing deep house with slap house influence and you should looking forward for his coming tunes.
            </p>
            <p>
              In 2021 Bayza is hitting his very first 1M plays on Spotify with his <b><a href="/releases/2020/everythingiwanted" target="_blank" title="Everything I Wanted | Bayza">Everything I Wanted</a></b>'s cover.
            </p>
            <p>
              He has currently signed tracks with Records Labels such as
              "<b><a href="https://instagram.com/bounceunited" target="_blank" title="Bounce United's Instagram">Bounce United</a></b>,
              <b><a href="https://www.youtube.com/channel/UCoo_WkQMj2h-WFi7nBQjtyw" target="_blank" title="Miss DeepShine's YouTube Channel">DeepShine Records</a></b>,
              <b><a href="https://instagram.com/palmtherapysounds" target="_blank" title="Palm Therapy Sounds's Instagram">Palm Therapy Sounds</a></b>,
              <b><a href="https://instagram.com/onesevenmusic" target="_blank" title="One Seven Music's Instagram">One Seven Music</a></b>,
              <b><a href="https://instagram.com/frqncy_official" target="_blank" title="FRQNCY's Instagram">FRQNCY</a></b>,
              <b><a href="https://instagram.com/thenightdrive_nd" target="_blank" title="The Night Drive's Instagram">The Night Drive</a></b>,
              <b>Melodicity Recordings</b>,
              <b><a href="https://www.instagram.com/miamibeats" target="_blank" title="Miami Beats's Instagram">Miami Beats</a></b>,
              <b><a href="https://www.instagram.com/stormmusicgroup" target="_blank" title="Storm's Instagram">Storm Music Group</a></b>,
              <b><a href="https://www.instagram.com/differenttwinsrecords" target="_blank" title="Storm's Instagram">Different Twins Records</a></b>".
            </p>
          </div>
          <div class="col-lg-4 text-center"><img id="covers" class="img-fluid shadow" src="/images/bayza-about.jpg" data-aos="fade-left"></div>
        </div>
      </div>
    </section>
  </main>
</template>
