import { SITE } from "./utils/site-info.js";

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/bayza.css",
    "~/assets/css/fanlinks.css"
  ],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "robots", content: "index, follow" }
      ],
      link : [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/android-chrome-512x512.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#181818" },
      ]
    }
  },
  modules: [
    "nuxt-icon",
    "@nuxtjs/sitemap",
    "nuxt-aos",
    "@nuxt/eslint"
  ],
  features: {
    inlineStyles: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"]
    }
  },
  site: {
    url: SITE.url,
  },
  sitemap: {
    discoverImages: false,
    xslColumns: [
      { label: "URL", width: "65%" },
      { label: "Priority", select: "sitemap:priority", width: "12.5%" },
      { label: "Last Modified", select: "sitemap:lastmod", width: "35%" }
    ]
  },
  routeRules: {
    "/": { sitemap: { priority: 1 } },
    "/*/**": { sitemap: { priority: 0.8, lastmod: new Date().toISOString() } }
  },
  aos: {
    once: true,
    easing: "ease-in-sine",
    duration: 500
  }
});