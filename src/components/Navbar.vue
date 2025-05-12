<template>
  <nav
    :class="['fixed max-w-screen z-50 transition-all duration-1000 bg-white/15 px-5 lg:px-10 py-4 shadow flex items-center justify-between backdrop-blur-sm', isScrolled ? 'my-0 w-full rounded-none' : 'rounded-3xl my-7 mx-8 lg:ml-28 w-10/12']"
  >
    <a href="#" class="flex items-center justify-center gap-1">
      <img src="/icon.svg" class="w-8">  <!-- &lt;/&gt; -->
      <p class="text-lg lg:text-xl text-white "> Katalis Dev</p>
    </a>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex gap-8 text-xl items-center">
      <a href="#" class="text-neutral-300 hover:text-white transition">{{ $t("nav.home") }}</a>
      <a href="#services" class="text-neutral-300 hover:text-white transition">{{ $t("nav.services") }}</a>
      <a href="#pricing" class="text-neutral-300 hover:text-white transition">{{ $t("nav.pricing") }}</a>
      <a href="#about" class="text-neutral-300 hover:text-white transition">{{ $t("nav.about") }}</a>
      <a href="#contact" class="text-neutral-300 hover:text-white transition">{{ $t("nav.contact") }}</a>

      <!-- Language Switcher -->
      <button
        @click="toggleLanguage"
        class="text-neutral-300 hover:text-white transition flex items-center gap-1 cursor-pointer"
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

    <div class="hidden md:block">
      <a href="#contact" class="flex gap-2 items-center px-8 py-3 text-lg font-semibold rounded-lg border-white bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600">
        Let's Talk
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </span>
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex items-center gap-5 md:hidden">
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

      <button @click="toggleMenu" class="lg:hidden flex gap-1 flex-col z-50">
        <div :class="[
          'bg-neutral-600 dark:bg-white block transition-all duration-600 ease-out h-0.5 w-6 rounded-sm',
          isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
        ]"></div>
        <div :class="[
          'bg-neutral-600 dark:bg-white block transition-all duration-600 ease-out h-0.5 w-5 rounded-sm',
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        ]"></div>
        <div :class="[
          'bg-neutral-600 dark:bg-white block transition-all duration-600 ease-out h-0.5 w-4 rounded-sm',
          isMenuOpen ? '-rotate-45 -translate-y-2 w-6' : 'translate-y-0.5'
        ]"></div>
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
    :class="{ 'opacity-100 scale-100 pointer-events-auto': isMenuOpen, 'pointer-events-none': !isMenuOpen }"
  >
    <a
      href="#"
      class="hover:text-blue-400 font-bold transition"
      @click="closeMenu"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {{ $t("nav.home") }}
    </a>
    <a
      href="#services"
      class="hover:text-blue-400 font-bold transition"
      @click="closeMenu"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      {{ $t("nav.services") }}
    </a>
    <a
      href="#pricing"
      class="hover:text-blue-400 font-bold transition"
      @click="closeMenu"
      data-aos="fade-left"
      data-aos-duration="1400"
    >
      {{ $t("nav.pricing") }}
    </a>
    <a
      href="#about"
      class="hover:text-blue-400 font-bold transition"
      @click="closeMenu"
      data-aos="fade-left"
      data-aos-duration="1600"
    >
      {{ $t("nav.about") }}
    </a>
    <a
      href="#contact"
      class="hover:text-blue-400 font-bold transition"
      @click="closeMenu"
      data-aos="fade-left"
      data-aos-duration="1800"
    >
      {{ $t("nav.contact") }}
    </a>
    <a href="#contact" class="flex gap-2 justify-center items-center px-8 py-3 text-lg font-semibold rounded-lg border-white bg-linear-to-r from-cyan-700 via-blue-500 to-indigo-600">
        Let's Talk
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </span>
      </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
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
    handleScroll() {
      this.isScrolled = window.scrollY > 20
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
};
</script>

<style scoped>
/* You can add scoped styling here if needed */

</style>
