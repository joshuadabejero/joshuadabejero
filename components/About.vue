<script setup></script>
<template>
  <section id="about" class="about">
    <v-container class="about__container">
      <div class="about__content">
        <div class="about__headline">
          <h1 class="about__title">About Me</h1>
          <div class="about__rectangle--underline"></div>
          <p class="about__description">
            I'm a passionate full-stack developer with expertise in building
            modern web applications. I love creating elegant solutions and
            bringing ideas to life through code.
          </p>
        </div>
        <div class="about__sub-content">
          <div class="about__images">
            <div class="about__image--container">
              <v-img
                class="about__image"
                cover
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80"
              />
              <div class="about__square--offset"></div>
            </div>
          </div>
          <div class="about__details">
            <h1>Transforming Ideas into Digital Reality</h1>
            <p>
              With over 8 years of experience in web development, I specialize
              in creating robust and scalable applications using modern
              technologies. My approach combines technical expertise with
              creative problem-solving to deliver exceptional digital
              experiences.
            </p>
            <div class="about__sub-details--group">
              <div>
                <div class="about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6366f1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    data-id="element-26"
                  >
                    <path d="m16 18 6-6-6-6"></path>
                    <path d="m8 6-6 6 6 6"></path>
                  </svg>
                </div>
                <span class="ml-1">Clean & Efficient Code</span>
              </div>
              <div>
                <div class="about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a855f7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-server"
                    aria-hidden="true"
                    data-id="element-27"
                  >
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      width="20"
                      height="8"
                      x="2"
                      y="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" x2="6.01" y1="6" y2="6"></line>
                    <line x1="6" x2="6.01" y1="18" y2="18"></line>
                  </svg>
                </div>
                <span>Database Design</span>
              </div>
              <div>
                <div class="about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ec4899"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-globe"
                    aria-hidden="true"
                    data-id="element-28"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path
                      d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                    ></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <span class="ml-1">Responsive Web Design</span>
              </div>
              <div>
                <div class="about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6366f1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-briefcase"
                    aria-hidden="true"
                    data-id="element-29"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <span class="ml-1">Project Management</span>
              </div>
            </div>
            <a href="#contact">
              <!-- Temporary Fix wrap in Anchor Tag -->
              <v-btn
                height="48"
                min-width="200"
                class="about__button"
                :ripple="false"
              >
                Let's Work Together
              </v-btn>
            </a>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="scss" scoped>
.about {
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
  &__rectangle--underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    background-image: linear-gradient(to right, #6875f5, #9061f9);
  }
  &__description {
    font-size: 1.125rem;
    line-height: 1.75rem;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    color: #4b5563;
  }
  &__sub-content {
    gap: 3rem;
    align-items: center;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  &__image--container {
    position: relative;
  }
  &__image {
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
    height: 24rem;
  }
  &__square--offset {
    background-image: linear-gradient(to bottom right, #6875f5, #9061f9);
    border-radius: 0.5rem;
    width: 8rem;
    height: 8rem;
    right: -1.5rem;
    bottom: -1.5rem;
    position: absolute;
  }
  &__details {
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 1.5rem;
    }
    p {
      margin-bottom: 1.5rem;
      color: #4b5563;
    }
  }
  &__sub-details--group {
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    display: grid;
    margin-bottom: 2rem;
    div {
      gap: 0.75rem;
      align-items: center;
      display: flex;

      .about__icon {
        padding: 0.5rem;
        border-radius: 0.375rem;
        background-color: #f3f4f6;
      }
      span {
        color: #374151;
      }
    }
  }
  &__button {
    background-image: linear-gradient(to right, #5850ec, #7e3af2);
    color: white;
    border: none;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0.375rem;
    display: inline-block;
    text-transform: capitalize;
    font-size: 16px;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &:hover {
      transform: translateY(-0.25rem);
      background-color: #5145cd;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 8px 10px -6px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
