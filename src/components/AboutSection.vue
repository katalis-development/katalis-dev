<template>
    <section
      id="about"
      class="min-h-screen flex items-center justify-center bg-parallax bg-cover bg-center text-white px-8 py-20"
      :class="{ 'bg-fixed': isDesktop }"
    >
      <div class="max-w-5xl mx-auto text-center">
        <h2
          class="text-4xl md:text-6xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 mb-12"
          data-aos="fade-up" data-aos-duration="1000"  
        >
          {{ $t("about.title") }}
        </h2>
        <p
          class="text-gray-300 text-xl md:text-xl leading-relaxed mb-10"
          v-html="$t('about.intro')"
          data-aos="fade-up" data-aos-duration="1200"  
        ></p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div
            class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left" data-aos-duration="1000"  
            >
            <h3 class="text-2xl font-semibold mb-4">
              {{ $t("about.vision.title") }}
            </h3>
            <p class="text-gray-400 text-lg">
              {{ $t("about.vision.desc") }}
            </p>
          </div>
          <div
            class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left" data-aos-duration="1400"  
            >
            <h3 class="text-2xl font-semibold mb-4">
              {{ $t("about.mission.title") }}
            </h3>
            <p class="text-gray-400 text-lg">
              {{ $t("about.mission.desc") }}
            </p>
          </div>
          <div
            class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            data-aos="fade-left" data-aos-duration="1600"  
          >
            <h3 class="text-2xl font-semibold mb-4">
              {{ $t("about.values.title") }}
            </h3>
            <p class="text-gray-400 text-lg">
              {{ $t("about.values.desc") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDesktop: true,
      };
    },
    mounted() {
      this.isDesktop = window.innerWidth >= 768;
    },
  };
  </script>
  
  <style scoped>
  .bg-parallax {
    background-image: url("/dark-bg.jpg");
  }
  
  </style>
  