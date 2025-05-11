<template>
  <footer class="relative text-white py-10 px-6 overflow-hidden">
    <!-- Background Blur Layer -->
    <div class="absolute inset-0 bg-footer">
      <div class="w-full h-full backdrop-blur-xs"></div>
    </div>

    <!-- Content Layer -->
    <div class="relative z-10 max-w-7xl mx-auto text-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <!-- Company Info -->
        <div class="flex flex-col items-center">
          <h3
            class="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-sky-300"
            data-aos="fade-up" data-aos-duration="1000"
            >
            {{ $t("nav.brandName") }}
          </h3>
          <p class="text-neutral-300 mb-4" data-aos="fade-up" data-aos-duration="1200">
            {{ $t("footer.tagline") }}
          </p>
          <p class="text-neutral-300 text-sm" data-aos="fade-up" data-aos-duration="1400">
            {{ $t("footer.copyright") }}
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col items-center">
          <h4 class="text-lg font-semibold mb-4 text-neutral-300" data-aos="fade-up" data-aos-duration="1000">
            {{ $t("footer.quickLinks") }}
          </h4>
          <ul class="text-gray-400 space-y-2">
            <li data-aos="fade-up" data-aos-duration="1000">
              <a href="#" class="hover:text-teal-400 transition">{{
                $t("nav.home")
              }}</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1100">
              <a href="#" class="hover:text-teal-400 transition">{{
                $t("nav.services")
              }}</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1200">
              <a href="#" class="hover:text-teal-400 transition">{{
                $t("nav.about")
              }}</a>
            </li>
            <li data-aos="fade-up" data-aos-duration="1300">
              <a href="#" class="hover:text-teal-400 transition">{{
                $t("nav.contact")
              }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="flex flex-col items-center">
          <h4 class="text-lg font-semibold mb-4 text-gray-300" data-aos="fade-up" data-aos-duration="1000">
            {{ $t("footer.followUs") }}
          </h4>
          <div class="flex space-x-6 text-gray-400 text-2xl">
            <a href="#" class="hover:text-teal-400 transition" data-aos="fade-left" data-aos-duration="1200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
            <a href="#" class="hover:text-teal-400 transition" data-aos="fade-left" data-aos-duration="1400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                  cx="19.38"
                  cy="42.035"
                  r="44.899"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fd5"></stop>
                  <stop offset=".328" stop-color="#ff543f"></stop>
                  <stop offset=".348" stop-color="#fc5245"></stop>
                  <stop offset=".504" stop-color="#e64771"></stop>
                  <stop offset=".643" stop-color="#d53e91"></stop>
                  <stop offset=".761" stop-color="#cc39a4"></stop>
                  <stop offset=".841" stop-color="#c837ab"></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <radialGradient
                  id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                  cx="11.786"
                  cy="5.54"
                  r="29.813"
                  gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#4168c9"></stop>
                  <stop
                    offset=".999"
                    stop-color="#4168c9"
                    stop-opacity="0"
                  ></stop>
                </radialGradient>
                <path
                  fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                  d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                ></path>
                <path
                  fill="#fff"
                  d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                ></path>
                <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                <path
                  fill="#fff"
                  d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                ></path>
              </svg>
            </a>
            <a href="#" class="hover:text-teal-400 transition" data-aos="fade-left" data-aos-duration="1400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#2aa4f4"></stop>
                  <stop offset="1" stop-color="#007ad9"></stop>
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                ></path>
              </svg>
            </a>
            <a href="#" class="hover:text-teal-400 transition" data-aos="fade-left" data-aos-duration="1500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="36"
                height="36"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FF3D00"
                  d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                ></path>
                <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-6">
        <p class="text-sm text-neutral-300">
          {{ $t("footer.crafted") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-footer {
  background-image: url("../assets/bg-footer.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
