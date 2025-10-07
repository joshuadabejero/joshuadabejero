<script setup></script>

<template>
  <section id="home" class="home">
    <v-container class="home__container">
      <div class="home__content">
        <div class="home__description">
          <h1>
            <span>Hi, I'm</span>
            <span>Joshua Abejero</span>
          </h1>
          <p>
            Full Stack Developer specializing in <span>Laravel</span> and
            <span>Vue.js</span>
          </p>
          <div class="home__button-container">
            <v-btn
              class="home__button home__button--primary"
              height="52"
              min-width="142"
              color="#5850ec"
              :ripple="false"
              href="#contact"
              >Get in Touch</v-btn
            >
            <v-btn
              class="home__button home__button--secondary"
              height="52"
              min-width="142"
              elevation="0"
              variant="outlined"
              color="#5850ec"
              href="#projects"
              >View My Work</v-btn
            >
          </div>
          <div class="home__social-media">
            <v-btn
              icon
              elevation="0"
              color="#f3f4f6"
              :ripple="false"
              size="small"
              target="_blank"
              href="https://github.com/joshuadabejero"
            >
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
                class="lucide lucide-github text-gray-700 dark:text-gray-300"
                aria-hidden="true"
                data-id="element-164"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                ></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </v-btn>
            <v-btn
              icon
              elevation="0"
              color="#f3f4f6"
              :ripple="false"
              size="small"
              target="_blank"
              href="https://www.linkedin.com/in/joshua-abejero-898342129/"
            >
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
                class="lucide lucide-linkedin text-gray-700 dark:text-gray-300"
                aria-hidden="true"
                data-id="element-166"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                ></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </v-btn>
            <v-btn
              icon
              elevation="0"
              color="#f3f4f6"
              :ripple="false"
              size="small"
              target="_blank"
              href="https://www.facebook.com/joshuadabejero"
            >
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
                class="lucide lucide-facebook text-gray-700 dark:text-gray-300"
                aria-hidden="true"
              >
                <path
                  d="M15 3h-2c-1.1 0-2 .9-2 2v3H9v3h2v8h3v-8h2.5l.5-3H14V5c0-.3.2-.5.5-.5H15V3z"
                />
              </svg>
            </v-btn>
          </div>
        </div>
        <div class="home__image">
          <v-avatar
            ><v-img
              alt="Joshua"
              src="~/assets/images/profile-picture.jpg"
            ></v-img
          ></v-avatar>
          <div class="home__image-description">
            <p>8+ Years Experience</p>
          </div>
        </div>
      </div>
    </v-container>
    <v-btn
      href="#about"
      class="home__next-button"
      icon
      :ripple="false"
      size="small"
    >
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
        class="lucide lucide-chevron-down text-indigo-600 dark:text-indigo-400"
        aria-hidden="true"
        data-id="element-175"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </v-btn>
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  position: relative;
  overflow: hidden;
  background-color: #f9fafb;
  &__container {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__description {
    text-align: center;
    flex: 1 1 0%;
    gap: 3rem;
    @media (min-width: 768px) {
      text-align: left;
    }
    h1 {
      margin-bottom: 1rem;
      font-weight: 700;
      font-size: 2.25rem;
      line-height: 2.5rem;
      @media (min-width: 768px) {
        font-size: 3.75rem;
        line-height: 1;
      }
      span:first-child {
        display: block;
      }
      span:last-child {
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(
          to right,
          #5850ec,
          #7e3af2 50%,
          #d61f69
        );
      }
    }
    p {
      margin-bottom: 2rem;
      color: #4b5563;
      font-size: 1.25rem;
      line-height: 1.75rem;
      @media (min-width: 768px) {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      span {
        font-weight: 600;
      }
      span:first-child {
        color: #5850ec;
      }
      span:nth-child(2) {
        color: #059669;
      }
    }
  }
  &__button {
    text-transform: capitalize;
    font-size: 16px;

    &-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      @media (min-width: 768px) {
        justify-content: flex-start;
      }
    }
    &:first-child {
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
    &:last-child {
      border: 2px solid #5850ec;
    }
  }
  &__image {
    flex: 1 1 0%;
    position: relative;
    display: flex;
    justify-content: center;
    ::v-deep(.v-avatar) {
      background-image: linear-gradient(
        to bottom right,
        #6875f5,
        #9061f9,
        #e74694
      );
      width: 16rem;
      height: 16rem;
      @media (min-width: 768px) {
        width: 20rem;
        height: 20rem;
      }
    }
    ::v-deep(.v-img) {
      mix-blend-mode: overlay;
    }
    &-description {
      position: absolute;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      border-radius: 9999px;
      box-shadow: 0 0 0 0 transparent, 0 0 0 0 transparent,
        0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 1);
      bottom: -1rem;
    }
  }
  &__social-media {
    justify-content: center;
    margin-top: 2rem;
    display: flex;
    margin-top: 2rem;
    gap: 1rem;
    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }
  &__next-button {
    animation: bounce 1s infinite;
    position: absolute;
    bottom: 2rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    @media (max-width: 361px) {
      display: none;
    }
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

// For continuation of DARK MODE
body.dark {
  section.home {
    background: linear-gradient(to right, #111827, #1f2937, #1e1b4b);
  }
}
</style>
