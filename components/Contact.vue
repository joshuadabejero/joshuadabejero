<script lang="ts" setup>
import { useProfileStore } from "~/store/profileStore";
const profileStore = useProfileStore();
</script>
<template>
  <section id="contact" class="contact">
    <v-container class="contact__container">
      <div class="contact__content">
        <div class="contact__headline">
          <h1 class="contact__title">Get In Touch</h1>
          <div class="contact__rectangle--underline"></div>
          <p class="contact__description">
            Have a project in mind or want to collaborate? Feel free to reach
            out and I'll get back to you as soon as possible.
          </p>
        </div>
        <div class="contact__card-wrapper">
          <v-card class="contact__card" rounded="lg">
            <v-card-title class="contact__card-title"
              >Send Me a Message</v-card-title
            >
            <v-sheet>
              <v-form>
                <v-text-field
                  label="Full Name"
                  variant="outlined"
                  color="#6366f1"
                ></v-text-field>
                <v-text-field
                  label="email@example.com"
                  variant="outlined"
                  color="#6366f1"
                ></v-text-field>
                <v-text-field
                  label="Project Inquiry"
                  variant="outlined"
                  color="#6366f1"
                ></v-text-field>
                <v-textarea
                  label="Your message here..."
                  variant="outlined"
                  color="#6366f1"
                  auto-grow
                ></v-textarea>
                <v-btn size="large" :ripple="false" color="#5850ec" block>
                  <template v-slot:prepend>
                    <v-icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-send"
                        aria-hidden="true"
                        data-id="element-58"
                      >
                        <path
                          d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                        ></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                    </v-icon>
                  </template>
                  <span> Send Message </span>
                </v-btn>
              </v-form>
            </v-sheet>
          </v-card>
          <div>
            <v-card class="contact__information" rounded="lg">
              <v-card-title class="contact__information-title"
                >Contact Information</v-card-title
              >
              <div class="contact__information-details">
                <div class="contact__information-icon--wrapper">
                  <div class="contact__information-icon">
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
                      class="lucide lucide-map-pin"
                      aria-hidden="true"
                      data-id="element-68"
                    >
                      <path
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      ></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Makati City, Philippines</p>
                  </div>
                </div>
                <div class="contact__information-icon--wrapper">
                  <div class="contact__information-icon">
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
                      class="lucide lucide-phone"
                      aria-hidden="true"
                      data-id="element-74"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>(+63) 962 494 0593</p>
                  </div>
                </div>
                <div class="contact__information-icon--wrapper">
                  <div class="contact__information-icon">
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
                      class="lucide lucide-mail"
                      aria-hidden="true"
                      data-id="element-80"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>joshuadabejero@gmail.com</p>
                  </div>
                </div>
              </div>
            </v-card>
            <v-card class="contact__working-hours" rounded="lg">
              <v-card-title class="contact__working-hours-title"
                >Working Hours</v-card-title
              >
              <div class="contact__working-hours--wrapper">
                <div
                  v-for="(schedule, index) in profileStore.schedules"
                  :key="index"
                  class="working-hours"
                >
                  <span>{{ schedule.day }}</span>
                  <span>{{ schedule.time }}</span>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.contact {
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
  &__card-wrapper {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
    display: grid;
    gap: 3rem;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  &__card {
    ::v-deep(.v-btn) {
      color: #ffffff;
      text-transform: capitalize;
      font-weight: 500;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      border-radius: 0.375rem;
      // gap: 0.5rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      display: flex;
      background-image: linear-gradient(to right, #5850ec, #7e3af2);
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 0.15s;
      &:hover {
        transform: translateY(-0.25rem);
        background-color: #5145cd !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 8px 10px -6px rgba(0, 0, 0, 0.1);
      }
    }
  }
  &__card, // Removes redundancy
  &__information,
  &__working-hours {
    padding: 2rem;
    &-title {
      color: transparent;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      background-clip: text;
      background-image: linear-gradient(to right, #6875f5, #9061f9);
      padding: 0;
      margin-bottom: 1.5rem;
    }
  }
  &__information {
    margin-bottom: 2rem;
  }
  &__information-icon {
    padding: 0.75rem;
    border-radius: 9999px;
    display: flex;
    &--wrapper {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      div {
        h4 {
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 1.75rem;
          margin-bottom: 0.25rem;
          color: #1f2937;
        }
        p {
          color: #4b5563;
        }
      }
    }
    &--wrapper:nth-child(1) .contact__information-icon {
      color: #5850ec;
      background-color: #e5edff;
    }
    &--wrapper:nth-child(2) .contact__information-icon {
      color: #7e3af2;
      background-color: #edebfe;
    }
    &--wrapper:nth-child(3) .contact__information-icon {
      color: #d61f69;
      background-color: #fce8f3;
    }
  }
  &__information-details > * + * {
    margin-top: 1.5rem;
  }
  &__working-hours .working-hours {
    padding-bottom: 0.75rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    &:nth-child(-n + 2) {
      border-bottom: 1px solid;
      border-color: #e5e7eb;
    }
    & ~ .working-hours {
      margin-top: 1rem;
      margin-bottom: 0;
    }
    &:last-child {
      padding: 0;
    }
    span:nth-child(2) {
      color: #4b5563;
    }
  }
}
</style>
