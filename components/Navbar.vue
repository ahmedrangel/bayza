<template>
  <nav id="navbar" ref="nav" class="navbar navbar-expand-md navbar-dark px-4 py-2 fixed-top smart-scroll">
    <NuxtLink class="navbar-brand" to="/">
      <img ref="logoNav" src="/images/bayza-logo.svg" width="100">
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" ref="collapsibleNav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" @click="collapseNav()">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <span id="navbardrop" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Releases</span>
          <div class="dropdown-menu">
            <NuxtLink class="dropdown-item" to="/releases/" @click="collapseNav()">All</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/all-bootlegs" @click="collapseNav()">Bootlegs</NuxtLink>
            <!--<NuxtLink class="dropdown-item" to="/releases/2024" @click="collapseNav()">2024</NuxtLink>-->
            <NuxtLink class="dropdown-item" to="/releases/2023" @click="collapseNav()">2023</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2022" @click="collapseNav()">2022</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2021" @click="collapseNav()">2021</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2020" @click="collapseNav()">2020</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2019" @click="collapseNav()">2019</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2018" @click="collapseNav()">2018</NuxtLink>
          </div>
        </li>
        <li class="nav-item" @click="collapseNav()">
          <a class="nav-link" :href="SITE.fanlinks" target="_blank">Fanlinks</a>
        </li>
        <li class="nav-item" @click="collapseNav()">
          <NuxtLink class="nav-link" to="/#about">About</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavbarComponent",
  data () {
    return {
      path: this.$route.path,
      nav: "",
    };
  },
  mounted () {
    this.nav = this.$refs.nav;
    if (this.nav) {
      let last_scroll_top = 0;
      window.addEventListener("scroll", () => {
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll_top < last_scroll_top) {
          this.nav.classList.remove("scrolled-down");
          this.nav.classList.add("scrolled-up");
        } else {
          this.nav.classList.remove("scrolled-up");
          this.nav.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
    }
    const scrollFunction = () => {
      if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) || (window.innerWidth < 767)) {
        this.nav.style.background = "#121212";
        this.nav.style.fontSize = "1rem";
        this.$refs.logoNav.style.width = 100;
      } else {
        this.nav.style.background = "transparent";
        this.nav.style.fontSize = "1.3rem";
        this.$refs.logoNav.style.width = 130;
      }
    };
    window.onscroll = () => {scrollFunction();};
  },
  methods: {
    collapseNav () {
      if (this.$refs.collapsibleNav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(this.$refs.collapsibleNav);
      }
    }
  }
};
</script>