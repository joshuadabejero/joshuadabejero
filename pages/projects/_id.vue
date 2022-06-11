<template>
  <div v-if="getProject != null" class="found text-center">
    <v-img
      class="elevation-5"
      :position="
        getProject.title == 'HRbliz GE / PE' ||
        getProject.title == 'HRbliz GE / PE - BFS API'
          ? 'left'
          : getProject.title == 'Torn City 3rd Party'
          ? 'top'
          : 'center'
      "
      height="700"
      :src="getProject.image"
    ></v-img>
    <div class="ma-10 text-center">
      <h1 class="display-1">{{ getProject.title }}</h1>
      <p class="subtitle">{{ getProject.description }}</p>
      <span v-if="getProject.url != null"
        >link: <a :href="getProject.url">{{ getProject.url }}</a></span
      >
    </div>
    <v-btn class="mb-5" href="/projects">BACK</v-btn>
  </div>
  <div v-else class="not-found">
    <intermediatory-text :payload="intermediatory[0]"></intermediatory-text>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSlugPage',
  data() {
    return {
      intermediatory: [
        {
          title: 'Error: 404',
          description: 'Page not found!',
        },
      ],
    }
  },
  head() {
    return {
      title: this.$route.params.id.toUpperCase(),
    }
  },
  computed: {
    getProject() {
      return this.$store.state.projects.project.find(
        (project) => project.slug === this.$route.params.id
      )
    },
  },
}
</script>
