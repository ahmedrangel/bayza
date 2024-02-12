import AOS from "aos";

export default defineNuxtPlugin(async () => {
  return {
    provide: { AOS }
  };
});