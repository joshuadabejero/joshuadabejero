<script lang="ts" setup>
import { useProfileStore } from "~/store/profileStore";
const profileStore = useProfileStore();
import { ref, watch, onMounted } from "vue";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const density = ref<"default" | "compact">("compact");

onMounted(() => {
  density.value = mdAndUp.value ? "default" : "compact";
});

watch(mdAndUp, (val) => {
  density.value = val ? "default" : "compact";
});
</script>

<template>
  <section id="work" class="work">
    <v-container class="work__container">
      <div class="work__content">
        <div class="work__headline">
          <h1 class="work__title">Work History</h1>
          <div class="work__rectangle--underline"></div>
          <p class="work__description">
            My professional journey has equipped me with valuable experience and
            expertise in web development. Here's where I've worked and what I've
            accomplished.
          </p>
        </div>
      </div>
      <div class="work__timeline">
        <v-timeline align="start" :density="density">
          <v-timeline-item
            v-for="(experience, index) in profileStore.experiences"
            :key="index"
            dot-color="#e0e7ff"
            icon-color="#9061f9"
            icon="mdi-home"
            fill-dot
          >
            <v-card class="experience">
              <v-card-title class="experience__title">
                <div class="experience__title-icon">
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
                    class="lucide lucide-briefcase"
                    aria-hidden="true"
                    data-id="element-246"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <div class="experience__title-content">
                  {{ experience.title }}
                </div>
              </v-card-title>
              <v-card-subtitle class="experience__company">
                <div class="experience__company-icon">
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
                    class="lucide lucide-building"
                    aria-hidden="true"
                    data-id="element-250"
                  >
                    <rect
                      width="16"
                      height="20"
                      x="4"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                  </svg>
                </div>
                <div class="experience__company-content">
                  {{ experience.company }}
                </div>
              </v-card-subtitle>
              <v-card-subtitle class="experience__meta">
                <div class="experience__date">
                  <div class="experience__date-icon">
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
                      class="lucide lucide-calendar"
                      aria-hidden="true"
                      data-id="element-254"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>
                  <div class="experience__date-content">
                    {{ profileStore.formatMonthYear(experience.datefrom) }} -
                    {{ profileStore.formatMonthYear(experience.dateto) }}
                  </div>
                </div>
                <div class="experience__address">
                  <div class="experience__address-icon">
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
                      class="lucide lucide-map-pin"
                      aria-hidden="true"
                      data-id="element-257"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div class="experience__address-content">
                    {{ experience.address }}
                  </div>
                </div>
              </v-card-subtitle>
              <v-card-text class="experience__details">
                <p class="experience__description">
                  {{ experience.description }}
                </p>
                <h3 class="experience__responsibilities-title">
                  Key Responsibilities:
                </h3>
                <ul class="experience__responsibilities">
                  <li
                    v-for="(
                      responsibility, index
                    ) in experience.responsibilities"
                    :key="index"
                    class="experience__responsibility"
                  >
                    {{ responsibility }}
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.card__color--gradient {
  background: linear-gradient(to right, #6366f1, #a855f7);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.work {
  background-color: white;
  padding-top: 5rem;
  padding-bottom: 5rem;
  &__headline {
    text-align: center;
    margin-bottom: 4rem;
  }
  &__title {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
    @media (min-width: 768px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }
  &__description {
    font-size: 1.125rem;
    line-height: 1.75rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    color: #4b5563;
  }
  &__rectangle--underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    background-image: linear-gradient(to right, #6875f5, #9061f9);
  }
  &__timeline {
    .experience {
      padding: 1.5rem;
      &__title {
        color: #1f2937;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.75rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0;
        margin-bottom: 0.5rem;
        &-icon {
          display: flex;
          color: #5850ec;
          padding: 0.5rem;
          border-radius: 9999px;
          background-color: #edebfe;
        }
        &-content {
          color: #1f2937;
          font-weight: 700;
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
      &__company {
        font-weight: 500;
        font-size: 1.125rem;
        line-height: 1.75rem;
        background-clip: text;
        color: #9061f9;
        opacity: unset;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
        padding: 0;
        &-icon {
          display: flex;
          padding: 0.5rem;
          border-radius: 9999px;
          background-color: #edebfe;
        }
        &-content {
          color: transparent;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 1.75rem;
          background-clip: text;
          background-image: linear-gradient(to right, #6875f5, #9061f9);
        }
      }
      &__meta {
        font-size: 0.875rem;
        line-height: 1.25rem;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        display: flex;
        padding: 0;
      }
      &__date {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        &-icon {
          display: flex;
        }
      }
      &__address {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        &-icon {
          display: flex;
        }
      }
      &__details {
        padding: 0;
      }
      &__description {
        color: #4b5563;
      }
      &__responsibilities {
        list-style-position: inside;
        color: #4b5563;
        &-title {
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #4b5563;
          margin-top: 1rem;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  section {
    ::v-deep(.v-timeline-divider) {
      display: none !important;
    }

    ::v-deep(.v-timeline-item__body) {
      margin-left: 0 !important;
      padding-left: 0 !important;
    }
  }
}
</style>
