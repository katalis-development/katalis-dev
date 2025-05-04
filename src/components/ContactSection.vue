<template>
  <section
    id="contact"
    class="min-h-screen flex items-center justify-center px-6 py-20 bg-radial from-neutral-800 from-40% to-neutral-950"
  >
    <div class="max-w-4xl w-full text-center">
      <h2
        class="text-4xl md:text-5xl font-extrabold mb-6 py-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"
      >
        {{ $t("contact.title") }}
      </h2>
      <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
        {{ $t("contact.subtitle") }}
      </p>
      <form
        class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg"
      >
        <div class="flex flex-col gap-2">
          <label for="name" class="text-left text-gray-400 text-sm">{{
            $t("contact.name")
          }}</label>
          <input
            type="text"
            id="name"
            :placeholder="$t('contact.namePlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-left text-gray-400 text-sm">{{
            $t("contact.email")
          }}</label>
          <input
            type="email"
            id="email"
            :placeholder="$t('contact.emailPlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label for="message" class="text-left text-gray-400 text-sm">{{
            $t("contact.message")
          }}</label>
          <textarea
            id="message"
            rows="5"
            :placeholder="$t('contact.messagePlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
        </div>
        <div class="md:col-span-2">
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 hover:opacity-90 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            {{ $t("contact.submit") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";

const { t } = useI18n();

onMounted(() => {
  console.log("Contact title:", t("contact.title"));
  console.log("i18n locale:", useI18n().locale.value);
});
</script>
