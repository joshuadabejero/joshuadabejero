import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: false,
  }),
  actions: {
    toggleDark() {
      this.isDark = !this.isDark;
      if (process.client) {
        document.body.classList.toggle("dark", this.isDark);
      }
    },
  },
});
