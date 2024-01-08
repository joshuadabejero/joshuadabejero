<template>
  <div>
    <v-img
      class="elevation-5 align-center"
      height="500"
      :src="require(`~/assets/img/desk.jpg`)"
    >
      <div class="text-center text-sm-left ml-sm-5 ml-md-12 black--text">
        <p class="display-4">
          <mark>I am</mark>
          <span class="display-3"><mark> a developer }</mark></span>
        </p>
        <p class="sub-heading ml-sm-6"><mark>Welcome to my website!</mark></p>
      </div>
    </v-img>
    <intermediatory-text :payload="intermediatory[0]"></intermediatory-text>
    <v-parallax class="elevation-5" :src="require(`~/assets/img/material.jpg`)">
      <v-img
        class="ml-md-12"
        width="500"
        height="500"
        :src="require(`~/assets/img/splash.png`)"
      ></v-img>
    </v-parallax>
    <intermediatory-text :payload="intermediatory[1]"></intermediatory-text>
    <v-row justify="center">
      <v-col
        v-for="pillar in pillars"
        :key="pillar.title"
        class="d-flex"
        cols="auto"
      >
        <v-card
          class="elevation-5 text-center mx-auto overflow-hidden"
          style="max-width: 380px"
        >
          <v-img height="200px" :src="pillar.image"></v-img>
          <v-card-title class="justify-center">{{ pillar.title }}</v-card-title>
          <v-card-text>{{ pillar.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <intermediatory-text :payload="intermediatory[2]"></intermediatory-text>
    <v-row justify="center">
      <v-col
        v-for="technology in getTechonologies.technologies"
        :key="technology.name"
        class="d-flex"
        cols="auto"
      >
        <v-tooltip bottom>
          <template #activator="{ on }">
            <v-btn icon fab x-large v-on="on">
              {{ technology.name }}
              <v-icon v-if="technology.icon">{{ technology.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ technology.description }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <intermediatory-text :payload="intermediatory[3]"></intermediatory-text>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="company in getCompanies.companies"
        :key="company.key"
      >
        <span slot="opposite">{{ company.date }}</span>
        <v-card class="elevation-5">
          <v-card-title class="headline">{{ company.position }}</v-card-title>
          <v-card-subtitle class="subtitle-1">{{
            company.name
          }}</v-card-subtitle>
          <v-card-text>{{ company.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <intermediatory-text :payload="intermediatory[4]"></intermediatory-text>
    <div class="text-center mb-12">
      <v-btn class="" href="/cv-resume-2024.pdf" download>Download</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      intermediatory: [
        {
          title: 'Joshua Abejero',
          description: 'Your favorite web developer',
        },
        {
          title: 'Coding is life',
          description: 'I love creating web applications',
        },
        {
          title: 'Technologies',
          description: 'Specific technology for specific task',
        },
        {
          title: 'Experience',
          description: 'Knowledge is power',
        },
        {
          title: 'CV / Resume',
          description: 'Click the download link below!',
        },
      ],
      pillars: [
        {
          image: require(`~/assets/img/api-development.jpg`),
          title: 'API Development',
          description: 'Building Restful APIs with ExpressJs',
        },
        {
          image: require(`~/assets/img/web-development.jpg`),
          title: 'Web Development',
          description: 'Building Web Applications and eCommerce sites',
        },
        {
          image: require(`~/assets/img/system-development.jpg`),
          title: 'System Development',
          description: 'Building System Applications for Business Solutions',
        },
      ],
      technologies: [],
    }
  },
  head() {
    return {
      title: 'Home',
    }
  },
  computed: {
    getTechonologies() {
      return this.$store.state.technologies
    },
    getCompanies() {
      return this.$store.state.companies
    },
  },
}
</script>

<style scoped>
mark {
  background-color: white;
}
</style>
