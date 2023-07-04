<template>
  <footer id="contact" class="page-footer bg-darkest text-white text-left font-weight-light">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-4">
          <h4>Stream Music</h4>
          <ul class="alt">
            <li><a target="_blank" :href="SITE.platforms.spotify">Spotify</a></li>
            <li><a target="_blank" :href="SITE.platforms.soundcloud">SoundCloud</a></li>
            <li><a target="_blank" :href="SITE.platforms.youtube">YouTube</a></li>
            <li><a target="_blank" :href="SITE.platforms.apple">Apple Music</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Buy Music</h4>
          <ul class="alt">
            <li>
              <a target="_blank" :href="SITE.platforms.itunes">iTunes</a>
            </li>
            <li>
              <a target="_blank" :href="SITE.platforms.beatport">Beatport</a>
            </li>
            <li>
              <a target="_blank" :href="SITE.platforms.amazon">Amazon</a>
            </li>
            <li>
              <a target="_blank" :href="SITE.platforms.bandcamp">Bandcamp</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Contact</h4>
          <ul class="icons mb-0">
            <li class="spotify">
              <a :href="SITE.platforms.spotify" target="_blank"><Icon class="" name="simple-icons:spotify" /></a>
            </li>
            <li class="soundcloud">
              <a :href="SITE.platforms.soundcloud" target="_blank"><Icon class="" name="simple-icons:soundcloud" /></a>
            </li>
            <li class="youtube">
              <a :href="SITE.platforms.youtube" target="_blank"><Icon class="" name="simple-icons:youtube" /></a>
            </li>
            <li class="instagram">
              <a :href="SITE.socials.instagram" target="_blank"><Icon class="" name="simple-icons:instagram" /></a>
            </li>
            <li class="facebook">
              <a :href="SITE.socials.facebook" target="_blank"><Icon class="" name="simple-icons:facebook" /></a>
            </li>
            <li class="twitter">
              <a :href="SITE.socials.twitter" target="_blank"><Icon class="" name="simple-icons:twitter" /></a>
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
<script>
export default {
  name: "FooterComponent"
};
</script>