<template>
  <div>
    <intermediatory-text :payload="intermediatory[0]"></intermediatory-text>
    <v-row>
      <v-spacer></v-spacer>
      <v-col
        ><v-text-field
          v-model="search"
          prepend-icon="mdi-magnify"
        ></v-text-field
      ></v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="project in filteredProjects"
        :key="project.title"
        class="d-flex"
        cols="auto"
      >
        <v-card
          class="elevation-5 text-center mx-auto overflow-hidden"
          style="max-width: 380px"
        >
          <v-img height="200px" :src="project.thumbnail"></v-img>
          <v-card-title class="justify-center"
            ><a class="custom-title-link" :href="'/projects/' + project.slug">{{
              project.title
            }}</a></v-card-title
          >
          <v-card-text>{{ project.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ProjectsIndexPage',
  data() {
    return {
      search: null,
      intermediatory: [
        {
          title: 'Projects',
          description: 'Showcasing best of my projects',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Projects',
    }
  },
  computed: {
    getProjects() {
      return this.$store.state.projects
    },
    filteredProjects() {
      return this.searchFilter()
    },
  },
  watch: {
    search() {
      this.searchFilter()
    },
  },
  methods: {
    searchFilter() {
      if (!this.search) {
        return this.getProjects.projects
      } else {
        const searchLowerCase = this.search.toLowerCase()
        return this.getProjects.projects.filter((project) =>
          project.title.toLowerCase().match(searchLowerCase)
        )
      }
    },
  },
}
</script>
