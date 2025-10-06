<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useProfileStore } from "~/store/profileStore";
const profileStore = useProfileStore();

const isTop = ref(true);

const handleScroll = () => {
  isTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <v-app-bar :class="[{ transparent: isTop }, 'header__navigation-bar']">
    <v-app-bar-title>
      <span>JOSHUA</span>
    </v-app-bar-title>
    <nav class="header__navigation">
      <a
        v-for="(navigation, index) in profileStore.navigations"
        :key="index"
        :href="`#${navigation.to}`"
        >{{ navigation.name }}</a
      >
    </nav>
    <div class="header__navigation-button">
      <v-btn icon size="small" :ripple="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-moon text-gray-700"
          aria-hidden="true"
          data-id="element-137"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </v-btn>

      <v-btn icon size="small" :ripple="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu text-gray-700 dark:text-gray-200"
          aria-hidden="true"
          data-id="element-139"
        >
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
          <path d="M4 6h16"></path>
        </svg>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.transparent {
  background-color: #f9fafb !important;
  box-shadow: none !important;
}

header {
  ::v-deep(.v-toolbar-title.v-app-bar-title) {
    margin-inline-start: 0px !important;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(to right, #5850ec, #7e3af2 50%, #d61f69);
    color: transparent;
    flex: unset;
    span {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
  ::v-deep(.v-toolbar__content) {
    padding: 1rem 0.75rem;
    justify-content: space-between;
  }
  ::v-deep(.v-btn) {
    padding: 0.5rem;
  }
  ::v-deep(.v-btn:last-child) {
    margin-left: 1rem;
    @media (min-width: 768px) {
      display: none;
    }
  }

  nav {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
    & > :not([hidden]) ~ :not([hidden]) {
      margin-left: 2rem; /* 8 × 0.25rem (Tailwind’s base spacing unit) */
    }
    a {
      color: #374151;
      font-weight: 500;
      text-decoration: none;
    }
    &:hover {
      color: #5850ec;
    }
  }
}
</style>
