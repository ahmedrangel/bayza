<template>
  <nav id="navbar" class="navbar navbar-expand-md navbar-dark px-4 py-2 fixed-top smart-scroll">
    <a class="navbar-brand" href="/">
      <img src="/images/bayza-logo.svg" width="100">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon" />
    </button>
    <div id="collapsibleNavbar" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a id="navbardrop" class="nav-link dropdown-toggle" href="/releases" data-toggle="dropdown">Releases</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="/releases/">All</a>
            <a class="dropdown-item" href="/releases/all-bootlegs">Bootlegs</a>
            <a class="dropdown-item" href="/releases/2023">2023</a>
            <a class="dropdown-item" href="/releases/2022">2022</a>
            <a class="dropdown-item" href="/releases/2021">2021</a>
            <a class="dropdown-item" href="/releases/2020">2020</a>
            <a class="dropdown-item" href="/releases/2019">2019</a>
            <a class="dropdown-item" href="/releases/2018">2018</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" :href="SITE.fanlinks" target="_blank">Fanlinks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#about">About</a>
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