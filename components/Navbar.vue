<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark px-4 py-2 fixed-top smart-scroll">
    <NuxtLink class="navbar-brand" to="/">
      <img src="/images/bayza-logo.svg" width="100">
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" ref="nav" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto" @click="collapseNav()">
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <NuxtLink id="navbardrop" class="nav-link dropdown-toggle" to="/releases" data-bs-toggle="dropdown">Releases</NuxtLink>
          <div class="dropdown-menu">
            <NuxtLink class="dropdown-item" to="/releases/">All</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/all-bootlegs">Bootlegs</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2023">2023</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2022">2022</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2021">2021</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2020">2020</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2019">2019</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2018">2018</NuxtLink>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="SITE.fanlinks" target="_blank">Fanlinks</a>
        </li>
        <li class="nav-item">
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
      path: this.$route.path
    };
  },
  methods: {
    collapseNav () {
      const nav = this.$refs.nav;
      if (nav.classList.contains("show")) {
        this.$nuxt.$bootstrap.toogleCollapse(nav);
      }
    }
  },
  mounted () {
    if (document.querySelectorAll(".smart-scroll").length > 0) {
      let last_scroll_top = 0;
      window.addEventListener("scroll", function() {
        const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll_top < last_scroll_top) {
          document.querySelector(".smart-scroll").classList.remove("scrolled-down");
          document.querySelector(".smart-scroll").classList.add("scrolled-up");
        } else {
          document.querySelector(".smart-scroll").classList.remove("scrolled-up");
          document.querySelector(".smart-scroll").classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
      });
    }
    const scrollFunction = () => {
      if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) || (window.innerWidth < 767)) {
        document.querySelector("#navbar").style.background = "#121212";
        document.querySelector("#navbar").style.fontSize = "1rem";
        document.querySelector("#navbar img").style.width = 100;
      }else {
        document.querySelector("#navbar").style.background = "transparent";
        document.querySelector("#navbar").style.fontSize = "1.3rem";
        document.querySelector("#navbar img").style.width = 130;
      }
    };
    window.onscroll = () => {scrollFunction();};
  }
};
</script>