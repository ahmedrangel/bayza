export default ({     
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/bayza.css",
    "aos/dist/aos.css"
  ],

  modules: [
    "nuxt-icon"
  ],
  
  nitro: {
    crawlLinks: true,
    routes: ["/"]
  }
});