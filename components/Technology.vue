<script lang="ts" setup>
import { useProfileStore } from "~/store/profileStore";
const profileStore = useProfileStore();
</script>
<template>
  <section id="technology" class="technology">
    <v-container class="technology__container">
      <div class="technology__content">
        <div class="technology__headline">
          <h1 class="technology__title">Tech Stack</h1>
          <div class="technology__rectangle--underline"></div>
          <p class="technology__description">
            I work with a variety of technologies to create modern, efficient,
            and scalable applications. Here's the tech stack I use in my
            projects.
          </p>
        </div>
        <div class="technology__card-wrapper">
          <v-card
            v-for="technology in profileStore.technologies"
            :key="technology.name"
            class="technology__card"
          >
            <v-card-title class="technology__category">
              <span
                class="technology__category-icon"
                v-html="technology.icon"
              ></span>
              <span class="technology__category-name">{{
                technology.name
              }}</span>
            </v-card-title>
            <div class="technology__items">
              <div
                v-for="item in technology.items"
                :key="item.name"
                class="technology__item"
              >
                <span class="technology__item-icon" v-html="item.icon"></span>
                <span class="technology__item-name">{{ item.name }}</span>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.technology {
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
  &__card {
    padding: 1.5rem;
    &-wrapper {
      gap: 2.5rem;
      grid-template-columns: repeat(1, minmax(0px, 1fr));
      display: grid;
      @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0px, 1fr));
      }
    }
    &:nth-child(5) {
      @media (min-width: 768px) {
        grid-column: span 2;
      }
      .technology__items {
        @media (min-width: 768px) {
          // Override last card group in md+ screen.
          grid-template-columns: repeat(5, minmax(0px, 1fr)) !important;
        }
      }
    }
  }
  &__category {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    gap: 0.75rem;
    padding: 0;
    &-icon {
      display: flex;
      padding: 0.5rem;
      background-color: #f3f4f6;
      border-radius: 9999px;
    }
    &-name {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;
      background-clip: text;
      color: transparent;
      background-image: linear-gradient(to right, #6875f5, #9061f9);
    }
  }
  &__items {
    gap: 1.5rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    display: grid;
    @media (min-width: 640px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  &__item {
    padding: 1rem;
    border-radius: 0.5rem;
    align-items: center;
    flex-direction: column;
    display: flex;
    background-color: #f9fafb;
    transition: all 0.3s;
    &:hover {
      background-image: linear-gradient(to bottom right, #eef2ff, #f5f3ff);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transform: translateY(-0.25rem);
    }
    &-icon {
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      display: flex;
      margin-bottom: 0.75rem;
    }
    &-name {
      font-weight: 500;
      text-align: center;
      color: #1f2937;
      font-size: 0.875rem; // Make text not passes the item space boundary
      line-height: 1.25rem;
    }
  }
  &__card:last-child {
    .technology__category {
      justify-content: center;
      align-items: center;
    }
    .technology__item {
      background-color: unset !important;
    }
  }
}
</style>
