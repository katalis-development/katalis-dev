<template>
  <section
    id="services"
    class="min-h-screen flex items-center relative justify-center py-20 bg-gradient-to-br from-[#060d1d] via-blue-900 to-[#070c16]"
  >
   <!-- Grid Pattern Background -->
   <div class="absolute inset-0 grid-pattern"></div>

    <div class="max-w-6xl px-8 mx-auto relative z-10">
      <div class="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
        <h2
          class="text-4xl md:text-6xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"
        >
          {{ $t("services.title") }}
        </h2>

        <p class="text-gray-300 text-lg lg:text-xl">{{ $t("services.desc") }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in serviceCards"
          :key="index"
          class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="bg-white/10 text-black rounded-full p-4 mb-4">
            <!-- Pakai v-html untuk inject SVG string -->
            <div v-html="card.icon" class="w-10 h-10"></div>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">{{ $t(card.title) }}</h3>
          <p class="text-gray-300 text-center">{{ $t(card.description) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const serviceCards = [
  {
    icon: ` <div class="text-teal-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </div>`,
    title: 'services.webDev.title',
    description: 'services.webDev.desc',
  },
  {
    icon: `<div class="text-pink-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>`,
    title: 'services.mobileApps.title',
    description: 'services.mobileApps.desc',
  },
  {
    icon: `<div class="text-indigo-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
              />
            </svg>
          </div>`,
    title: 'services.uiux.title',
    description: 'services.uiux.desc',
  },
  {
    icon: ` <div class="text-yellow-400 mb-4">
            <svg
              class="w-10 h-10"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>`,
    title: 'services.seo.title',
    description: 'services.seo.desc',
  },
  {
    icon: ` <div class="text-green-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
              />
            </svg>
          </div>`,
    title: 'services.cloud.title',
    description: 'services.cloud.desc',
  },
  {
    icon: ` <div class="text-purple-400 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>
          </div>`,
    title: 'services.maintenance.title',
    description: 'services.maintenance.desc',
  }
]

</script>

<style scoped>
  .grid-pattern {
    background: 
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px) 0 0,
      linear-gradient(180deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px) 0 0;
    background-size: 20px 20px;
    opacity: 0.2; /* Fade effect */
    z-index: 0;
  }
</style>
