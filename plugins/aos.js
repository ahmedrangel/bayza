import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== "undefined") {
    nuxtApp.AOS = AOS.init({ once: true, duration: 500 });
  }
});