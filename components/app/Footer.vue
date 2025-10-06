<script lang="ts" setup></script>
<template>
  <v-footer class="footer px-0">
    <v-container class="footer__container">
      <div class="footer__content">
        <div class="footer__about">
          <h3>Joshua Abejero</h3>
          <p>
            Creating modern web experiences with cutting-edge technologies.
            Let's build something amazing together.
          </p>
          <div class="footer__social-media">
            <v-btn
              icon
              elevation="0"
              color="#1F2937"
              :ripple="false"
              size="x-small"
            >
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
                class="lucide lucide-linkedin text-white"
                aria-hidden="true"
                data-id="element-106"
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
              color="#1F2937"
              :ripple="false"
              size="x-small"
            >
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
                class="lucide lucide-twitter text-white"
                aria-hidden="true"
                data-id="element-108"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path>
              </svg>
            </v-btn>
            <v-btn
              icon
              elevation="0"
              color="#1F2937"
              :ripple="false"
              size="x-small"
            >
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
                class="lucide lucide-mail text-white"
                aria-hidden="true"
                data-id="element-110"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </v-btn>
          </div>
        </div>
        <div class="footer__quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#technology">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer__services">
          <h3>Services</h3>
          <ul>
            <li><a href="#projects">Web Development</a></li>
            <li><a href="#projects">Frontend Development</a></li>
            <li><a href="#projects">Backend Development</a></li>
            <li><a href="#projects">WordPress Development</a></li>
            <li><a href="#projects">CMS Integration</a></li>
            <li><a href="#projects">Database Design</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>&copy; 2025 Joshua Abejero. All rights reserved.</p>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
<style lang="scss" scoped>
.footer {
  color: #ffffff;
  background-color: #111827;
  padding-top: 4rem;
  padding-bottom: 2rem;
  &__content {
    gap: 3rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    display: grid;
    margin-bottom: 3rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  &__about {
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      background-clip: text;
      margin-bottom: 1.5rem;
      color: transparent;
      background-image: linear-gradient(to right, #8da2fb, #ac94fa);
    }
    p {
      margin-bottom: 1.5rem;
      color: #d1d5db;
    }
  }
  &__social-media {
    display: flex;
    ::v-deep(.v-btn:hover) {
      background-color: #5850ec !important;
    }
    ::v-deep(.v-btn:nth-child(2)),
    ::v-deep(.v-btn:nth-child(3)) {
      margin-left: 1rem;
    }
  }
  &__quick-links,
  &__services {
    h3 {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin-bottom: 1.5rem;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      a {
        color: #d1d5db;
        text-decoration: inherit;
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
          color: #8da2fb;
        }
      }
    }
    ul > * + * {
      margin-top: 0.75rem;
    }
  }
  &__bottom {
    padding-top: 2rem;
    border-top: 1px solid #1f2937;
  }
  &__copyright {
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    display: flex;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    p {
      color: #9ca3af;
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-bottom: 1rem;
    }
  }
}
</style>
