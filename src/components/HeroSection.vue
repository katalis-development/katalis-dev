<template>
  <section class="min-h-screen hero-bg relative safe-top">
    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent py-50"
    ></div>
    <div class="p-10 lg:p-20 flex gap-20 flex-wrap lg:flex-nowrap justify-between">
      <div class="w-full lg:w-2/3 flex flex-col lg:mt-24 mt-20">
        <div class="lg:mb-12 mb-10 flex flex-col gap-5">
          <h1
            class="text-5xl lg:text-6xl font-extrabold leading-12 md:leading-13 lg:leading-22 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-rose-500">
            {{ $t("hero.title") }}
          </h1>
          <p
            class="text-xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-200 leading-8 lg:leading-5 tracking-wider">
            {{ $t("hero.subtitle") }}
          </p>
        </div>
        <a href="#contact"
          class="px-8 lg:mt-10 animate-pulse z-10 flex items-center gap-2 self-baseline py-3 rounded-full bg-gradient-to-r from-teal-500 via-sky-400 to-indigo-600 text-white font-semibold text-lg shadow-lg hover:opacity-80 transition-opacity duration-300 transform hover:scale-105 cursor-pointer"
        >
          <span>{{ $t("hero.cta") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
      <img
        src="../assets/hero.png"
        class="hidden lg:inline-block lg:w-4xl h-max rounded-4xl mt-20"
        alt=""
      />
    </div>
  </section>
</template>

<style>
.hero-bg {
  background: url("../assets/bg-banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.safe-top {
  padding-top: env(safe-area-inset-top);
}
</style>
