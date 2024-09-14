<script setup lang="ts">
const nav = ref<HTMLElement>();
const logoNav = ref<HTMLElement>();
const collapsibleNav = ref<HTMLElement>();
const { $bootstrap } = useNuxtApp();
const scrolledDown = ref(false);

const collapseNav = () => {
  if (collapsibleNav.value!.classList.contains("show")) {
    $bootstrap.toogleCollapse(collapsibleNav.value);
  }
};

const onScroll = () => {
  scrolledDown.value = (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10 || window.innerWidth < 767);
};

let last_scroll_top = 0;

const scrollHandler = () => {
  const scroll_top = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll_top < last_scroll_top) {
    nav.value!.classList.remove("scrolled-down");
    nav.value!.classList.add("scrolled-up");
  }
  else {
    nav.value!.classList.remove("scrolled-up");
    nav.value!.classList.add("scrolled-down");
  }
  last_scroll_top = scroll_top;
};

onMounted(() => {
  if (nav.value) window.addEventListener("scroll", scrollHandler);
  window.onscroll = () => onScroll();
});

const releasesYearsDropDown = [];
const yearMax = Math.max(...tracks.filter(el => el.year as number).map(el => el.year as number));
const yearMin = Math.min(...tracks.filter(el => el.year as number).map(el => el.year as number));

for (let y = yearMax; y >= yearMin; y--) {
  releasesYearsDropDown.push({ title: y, href: `/releases/${y}` });
}

const releasesDropDown = [
  { title: "All", href: "/releases" },
  { title: "Bootlegs", href: "/releases/bootlegs" },
  ...releasesYearsDropDown
];
</script>

<template>
  <nav id="navbar" ref="nav" class="navbar navbar-expand-md navbar-dark px-4 py-2 fixed-top smart-scroll" :class="scrolledDown ? 'bg-darkest h6' : 'bg-transparent h5'">
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
            <template v-for="(r, i) of releasesDropDown" :key="i">
              <NuxtLink class="dropdown-item" :to="r.href" @click="collapseNav()">{{ r.title }}</NuxtLink>
            </template>
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
