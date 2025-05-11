<template>
  <nav
    class="fixed z-30 w-full bg-black/15 backdrop-blur-sm px-10 py-4 shadow flex items-center justify-between"
  >
    <a href="#" class="text-lg lg:text-2xl font-bold text-white">
      Katalis Dev &lt;/&gt;
    </a>

    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-8 items-center">
      <a href="#" class="hover:text-blue-400 transition">{{ $t("nav.home") }}</a>
      <a href="#services" class="hover:text-blue-400 transition">{{ $t("nav.services") }}</a>
      <a href="#pricing" class="hover:text-blue-400 transition">{{ $t("nav.pricing") }}</a>
      <a href="#about" class="hover:text-blue-400 transition">{{ $t("nav.about") }}</a>
      <a href="#contact" class="hover:text-blue-400 transition">{{ $t("nav.contact") }}</a>

      <!-- Language Switcher -->
      <button
        @click="toggleLanguage"
        class="text-white hover:text-blue-400 transition flex items-center gap-1 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
        {{ $i18n.locale === "en" ? "ID" : "EN" }}
      </button>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex gap-3 md:hidden">
      <!-- Language Switcher -->
      <button
        @click="toggleLanguage"
        class="text-white hover:text-blue-400 transition flex items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
        {{ $i18n.locale === "en" ? "ID" : "EN" }}
      </button>

      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 8h16M4 16h16"
          />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Fullscreen Overlay -->
  <div
    v-if="isMenuOpen"
    @click="closeMenu"
    class="fixed inset-0 z-20 bg-white/5 backdrop-blur-md transition-all duration-300 md:hidden"
  ></div>

  <!-- Mobile Menu -->
  <div
    id="mobile-menu"
    class="fixed top-50 w-4/5 left-10 z-20 bg-black/60 rounded-3xl backdrop-blur-xs p-10 flex flex-col gap-6 text-center opacity-0 scale-95 transform transition-all duration-300 md:hidden"
    :class="{ 'opacity-100 scale-100': isMenuOpen }"
  >
    <a href="#" class="hover:text-blue-400 font-bold transition" @click="closeMenu" data-aos="fade-left" data-aos-duration="1000">{{ $t("nav.home") }}</a>
    <a href="#services" class="hover:text-blue-400 font-bold transition" @click="closeMenu" data-aos="fade-left" data-aos-duration="1200">{{ $t("nav.services") }}</a>
    <a href="#pricing" class="hover:text-blue-400 font-bold transition" @click="closeMenu" data-aos="fade-left" data-aos-duration="1400">{{ $t("nav.pricing") }}</a>
    <a href="#about" class="hover:text-blue-400 font-bold transition" @click="closeMenu" data-aos="fade-left" data-aos-duration="1600">{{ $t("nav.about") }}</a>
    <a href="#contact" class="hover:text-blue-400 font-bold transition" @click="closeMenu" data-aos="fade-left" data-aos-duration="1800">{{ $t("nav.contact") }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleLanguage() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "id" : "en";
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? "hidden" : "auto";
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
/* You can add scoped styling here if needed */
</style>
