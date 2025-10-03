<script lang="ts" setup>
import { ref } from "vue";
import { useProfileStore } from "~/store/profileStore";
import { Category, CategoryLabels } from "~/constants/category";
const profileStore = useProfileStore();
const selectedCategory = ref<number | 0>(0);
const categories = Object.values(Category).filter(
  (v) => typeof v === "number"
) as Category[];

function selectCategory(category: number) {
  selectedCategory.value = category;
}

const filteredProjects = computed(() => {
  if (selectedCategory.value === 0) return profileStore.projects;
  return profileStore.projects.filter(
    (p) => p.category === selectedCategory.value
  );
});
</script>
<template>
  <section id="projects" class="projects">
    <v-container class="projects__container">
      <div class="projects__content">
        <div class="projects__headline">
          <h1 class="projects__title">My Projects</h1>
          <div class="projects__rectangle--underline"></div>
          <p class="projects__description">
            Here are some of my recent projects that showcase my skills and
            experience. Each project reflects my commitment to quality and
            attention to detail.
          </p>
        </div>
        <div class="projects__category">
          <v-btn
            @click="selectCategory(0)"
            :class="selectedCategory === 0 ? 'selectedCategory' : ''"
            variant="flat"
            :ripple="false"
          >
            All
          </v-btn>
          <v-btn
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            :class="selectedCategory === category ? 'selectedCategory' : ''"
            variant="flat"
            :ripple="false"
          >
            {{ CategoryLabels[category] }}
          </v-btn>
        </div>
        <div class="projects__wrapper">
          <v-card
            v-for="(project, index) in filteredProjects"
            :key="index"
            class="project"
            max-width="400"
          >
            <v-img
              class="project__image align-end text-white"
              height="200"
              :src="`/images/projects/${project.thumbnail}`"
              cover
            >
            </v-img>
            <div class="project__details">
              <v-card-title class="project__title">{{
                project.title
              }}</v-card-title>
              <v-card-text class="project__description">{{
                project.description
              }}</v-card-text>
              <div class="project__technology--wrapper">
                <v-chip
                  v-for="(technology, index) in project.technologies"
                  :key="index"
                  class="project__technology"
                  label
                  size="x-small"
                >
                  {{ technology }}
                </v-chip>
              </div>
              <div
                v-if="project.link.demo && project.link.source"
                class="project__actions"
              >
                <v-btn
                  v-if="project.link.demo"
                  variant="text"
                  :ripple="false"
                  target="_blank"
                  :href="project.link.demo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-external-link"
                    aria-hidden="true"
                    data-id="element-195"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                  </svg>
                  <span>Live Demo</span>
                </v-btn>
                <v-btn
                  v-if="project.link.source"
                  variant="text"
                  :ripple="false"
                  target="_blank"
                  :href="project.link.source"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github"
                    aria-hidden="true"
                    data-id="element-197"
                  >
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    ></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span>Source Code</span>
                </v-btn>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.projects {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #f9fafb;
  &__container {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  &__headline {
    text-align: center;
    margin-bottom: 4rem;
  }
  &__title {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
  }
  &__rectangle--underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    background-image: linear-gradient(to right, #6875f5, #9061f9);
  }
  &__description {
    color: #4b5563;
    font-size: 1.125rem;
    line-height: 1.75rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
  }
  &__category {
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 3rem;
    ::v-deep(.v-btn) {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      border-radius: 9999px;
      text-transform: capitalize;
      background-color: #f3f4f6;
    }
    ::v-deep(.v-btn.selectedCategory) {
      color: #fff;
      background-image: linear-gradient(to right, #5850ec, #7e3af2);
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  &__content {
    .project {
      overflow: hidden;
      border-radius: 0.5rem;
      transition: all 0.3s;
      &:hover {
        transform: translateY(-0.25rem);
      }
      &__image {
        overflow: hidden;
        height: 12rem;
        transition: transform 0.5s ease;
        &:hover {
          transform: scale(1.1);
        }
        ::v-deep(.v-img__img--cover) {
          object-position: top;
        }
      }
      &__details {
        padding: 1.5rem;
      }
      &__title {
        color: #1f2937;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin-bottom: 0.5rem;
        padding: 0;
      }
      &__description {
        color: #4b5563;
        margin-bottom: 1rem;
        padding: 0;
        font-size: 16px;
      }
      &__technology {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 0.25rem;
        color: #42389d;
        background-color: #e5edff;
        &--wrapper {
          gap: 0.5rem;
          flex-wrap: wrap;
          display: flex;
          margin-bottom: 1.5rem;
        }
      }
      &__actions {
        justify-content: space-between;
        display: flex;
        ::v-deep(.v-btn) {
          padding: 0;
        }
        ::v-deep(.v-btn .v-btn__content) {
          display: flex;
          gap: 0.25rem;
          font-weight: 500;
          font-size: 16px;
          text-transform: capitalize;
        }
        ::v-deep(.v-btn:first-child .v-btn__content) {
          color: #4f46e5;
        }
        ::v-deep(.v-btn:hover:first-child .v-btn__content) {
          color: #3730a3;
        }
        ::v-deep(.v-btn:last-child .v-btn__content) {
          color: #374151;
        }
        ::v-deep(.v-btn:hover:last-child .v-btn__content) {
          color: #111827;
        }
        ::v-deep(.v-btn .v-btn__overlay) {
          display: none !important;
        }
      }
    }
  }
}
</style>
