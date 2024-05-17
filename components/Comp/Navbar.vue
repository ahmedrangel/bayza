<script setup>
const nav = ref("nav");
const logoNav = ref("logoNav");
const collapsibleNav = ref("CollapsibleNav");
const { $bootstrap } = useNuxtApp();

const collapseNav = () => {
  if (collapsibleNav.value.classList.contains("show")) {
    $bootstrap.toogleCollapse(collapsibleNav.value);
  }
};

const onScroll = () => {
  if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) || (window.innerWidth < 767)) {
    nav.value.style.background = "#121212";
    nav.value.style.fontSize = "1rem";
    logoNav.value.style.width = 100;
  } else {
    nav.value.style.background = "transparent";
    nav.value.style.fontSize = "1.3rem";
    logoNav.value.style.width = 130;
  }
};

let last_scroll_top = 0;

const scrollHandler = () => {
  const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll_top < last_scroll_top) {
    nav.value.classList.remove("scrolled-down");
    nav.value.classList.add("scrolled-up");
  } else {
    nav.value.classList.remove("scrolled-up");
    nav.value.classList.add("scrolled-down");
  }
  last_scroll_top = scroll_top;
};

onMounted(() => {
  if (nav.value) window.addEventListener("scroll", scrollHandler);
  window.onscroll = () => onScroll();
});
</script>

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
            <NuxtLink class="dropdown-item" to="/releases" @click="collapseNav()">All</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/all-bootlegs" @click="collapseNav()">Bootlegs</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2024" @click="collapseNav()">2024</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2023" @click="collapseNav()">2023</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2022" @click="collapseNav()">2022</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2021" @click="collapseNav()">2021</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2020" @click="collapseNav()">2020</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2019" @click="collapseNav()">2019</NuxtLink>
            <NuxtLink class="dropdown-item" to="/releases/2018" @click="collapseNav()">2018</NuxtLink>
          </div>
        </li>
        <li class="nav-item" @click="collapseNav()">
          <NuxtLink class="nav-link" to="/fanlinks">Fanlinks</NuxtLink>
        </li>
        <li class="nav-item" @click="collapseNav()">
          <NuxtLink class="nav-link" to="/#about">About</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>