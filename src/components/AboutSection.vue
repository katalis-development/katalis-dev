<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center bg-fixed bg-parallax text-white px-6 py-20"
  >
    <div class="max-w-5xl mx-auto text-center">
      <h2
        class="text-4xl md:text-5xl py-2 font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"
      >
        {{ $t("about.title") }}
      </h2>
      <p
        class="text-gray-300 text-lg md:text-xl leading-relaxed mb-10"
        v-html="$t('about.intro')"
      ></p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div
          class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-4">
            {{ $t("about.vision.title") }}
          </h3>
          <p class="text-gray-400">
            {{ $t("about.vision.desc") }}
          </p>
        </div>
        <div
          class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-4">
            {{ $t("about.mission.title") }}
          </h3>
          <p class="text-gray-400">
            {{ $t("about.mission.desc") }}
          </p>
        </div>
        <div
          class="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
        >
          <h3 class="text-xl font-semibold mb-4">
            {{ $t("about.values.title") }}
          </h3>
          <p class="text-gray-400">
            {{ $t("about.values.desc") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-parallax {
  background-image: url("../assets/dark-bg.jpg");
}
</style>
