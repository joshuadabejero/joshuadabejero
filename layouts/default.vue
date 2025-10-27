<script setup>
useHead({
  title: "Joshua — Web Developer",
  meta: [
    {
      name: "description",
      content: "Full Stack Developer specializing in Laravel and Vue.js",
    },

    { property: "og:type", content: "website" },
    { property: "og:title", content: "Joshua - Web Developer" },
    {
      property: "og:description",
      content: "Full Stack Developer specializing in Laravel and Vue.js.",
    },
    { property: "og:url", content: "https://your-domain.com" },
    {
      property: "og:image",
      content: "https://joshuadabejero.netlify.app/images/og-image.jpg",
    },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Joshua — Web Developer" },
    {
      name: "twitter:description",
      content: "Full Stack Developer specializing in Laravel and Vue.js.",
    },
    {
      name: "twitter:image",
      content: "https://joshuadabejero.netlify.app/images/og-image.jpg",
    },
  ],
});
</script>
<template>
  <v-app>
    <AppHeader />
    <v-main>
      <NuxtPage />
    </v-main>
    <AppFooter />
  </v-app>
</template>
