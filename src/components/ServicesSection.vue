<script></script>

<template>
  <section id="services" class="relative bg-fixed bg-parralax">
    <div class="backdrop-blur-md bg-black/60 py-20">
      <div class="max-w-7xl mx-auto px-10 text-center">
        <h2
          class="text-4xl md:text-5xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-sky-700 mb-12"
        >
          {{ $t("services.title") }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-teal-400 mb-4">
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
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.webDev.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.webDev.desc") }}</p>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-pink-400 mb-4">
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
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.mobileApps.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.mobileApps.desc") }}</p>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-indigo-400 mb-4">
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
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.uiux.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.uiux.desc") }}</p>
          </div>

          <!-- Card 4 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-yellow-400 mb-4">
              <svg
                class="w-10 h-10"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.seo.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.seo.desc") }}</p>
          </div>

          <!-- Card 5 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-green-400 mb-4">
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
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.cloud.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.cloud.desc") }}</p>
          </div>

          <!-- Card 6 -->
          <div
            class="bg-white/10 flex flex-col items-center backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div class="text-purple-400 mb-4">
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
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ $t("services.maintenance.title") }}
            </h3>
            <p class="text-gray-300">{{ $t("services.maintenance.desc") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-parralax {
  background-image: url("../assets/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
