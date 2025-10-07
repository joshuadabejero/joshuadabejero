// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  app: {
    head: {
      title: "joshuadabejero@dev",
    },
  },
  compatibilityDate: "2025-05-15",
  css: ["@/assets/css/vuetify-overrides.css"],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: "swap",
    download: true,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
