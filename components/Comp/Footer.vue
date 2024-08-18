<script setup>
const streamMusic = SITE.platforms.filter(el => ["spotify", "soundcloud", "youtube", "apple"].includes(el.id));
const buyMusic = SITE.platforms.filter(el => ["itunes", "beatport", "amazon-music", "bandcamp"].includes(el.id));
const contact = SITE.platforms.filter(el => ["spotify", "soundcloud", "youtube"].includes(el.id));
const socials = [
  {
    id: "instagram",
    url: SITE.socials.instagram,
    icon: "simple-icons:instagram"
  },
  {
    id: "facebook",
    url: SITE.socials.facebook,
    icon: "simple-icons:facebook"
  },
  {
    id: "twitter",
    url: SITE.socials.twitter,
    icon: "simple-icons:x"
  }
];

for (const s of socials) {
  contact.push(s);
}
</script>

<template>
  <footer id="contact" class="page-footer bg-darkest text-white text-left font-weight-light">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4">
          <h4>Stream Music</h4>
          <ul class="alt">
            <li v-for="(stream, i) of streamMusic" :key="i">
              <a target="_blank" :href="stream.url">{{ stream.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Buy Music</h4>
          <ul class="alt">
            <li v-for="(buy, i) of buyMusic" :key="i">
              <a target="_blank" :href="buy.url">{{ buy.title }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Contact</h4>
          <ul class="icons mb-0">
            <li v-for="(c, i) of contact" :key="i" :class="c.id">
              <a :href="c.url" target="_blank"><Icon class="" :name="c.icon" /></a>
            </li>
          </ul>
          <ul class="contact">
            <li>
              <span class="ml-2">Email: </span><a class="mx-0" href="mailto:info@bayzamusic.com" target="_blank">info@bayzamusic.com</a>
            </li>
          </ul>
        </div>
        <div class="col-md-12 text-center mt-4 text-small">
          <p class="mb-0">© Bayza. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
