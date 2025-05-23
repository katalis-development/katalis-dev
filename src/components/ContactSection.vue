<template>
  <section id="contact" class="min-h-screen flex items-center justify-center px-6 py-20 relative" style="background: radial-gradient(circle at top left, #0f172a, #000000);">
    <!-- Grid Pattern Background -->
    <div class="absolute inset-0 grid-pattern"></div>

    <div class="max-w-4xl w-full text-center relative z-10">
      <h2 class="text-4xl md:text-6xl font-extrabold mb-6 py-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600" data-aos="fade-up" 
      data-aos-duration="1000">
        {{ $t("contact.title") }}
      </h2>
      <p class="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10" data-aos="fade-up" data-aos-duration="1200">
        {{ $t("contact.subtitle") }}
      </p>

      <!-- Form -->
      <form v-if="showForm" @submit="sendEmail" class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg" data-aos="fade-up" data-aos-duration="1400">
        <div class="flex flex-col gap-2">
          <label for="name" class="text-left text-gray-400 text-sm">{{ $t("contact.name") }}</label>
          <input
            type="text"
            id="name"
            name="name"
            :placeholder="$t('contact.namePlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-left text-gray-400 text-sm">{{ $t("contact.email") }}</label>
          <input
            type="email"
            id="email"
            name="email"
            :placeholder="$t('contact.emailPlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label for="message" class="text-left text-gray-400 text-sm">{{ $t("contact.message") }}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            :placeholder="$t('contact.messagePlaceholder')"
            class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>
        </div>
        <div class="md:col-span-2">
          <button
            type="submit"
            class="w-full bg-gradient-to-r cursor-pointer from-teal-400 via-blue-500 to-indigo-600 hover:opacity-90 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            {{ $t("contact.submit") }}
          </button>
        </div>
      </form>

      <!-- Success/Error Message -->
      <div v-if="statusMessage" :class="statusClass" class="mt-6 p-4 rounded-lg shadow-lg text-center text-lg font-bold" data-aos="fade-up" data-aos-duration="1600">
        {{ statusMessage }}
      </div>
    </div>
  </section>
</template>

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

<script>
  import emailjs from 'emailjs-com';

  export default {
    data() {
      return {
        showForm: true, // Menyimpan apakah form ditampilkan
        statusMessage: '', // Pesan status (success/error)
        statusClass: '' // Kelas untuk styling sukses/gagal
      };
    },
    methods: {
      sendEmail(event) {
        event.preventDefault(); // Menghentikan form submit default

        // Ambil data dari form
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Kirim email menggunakan EmailJS
        emailjs
          .sendForm('service_fjabmgl', 'template_9zxhpb2', event.target, 'PG4ZLiFx0CeK4hBZD')
          .then(
            (result) => {
              console.log(result.text);
              // Update status message untuk sukses
              this.statusMessage = 'Message Sent Successfully!';
              this.statusClass = 'bg-green-500 text-white'; // Gaya sukses
              this.showForm = false; // Sembunyikan form setelah berhasil
            },
            (error) => {
              console.error(error.text);
              // Update status message untuk error
              this.statusMessage = 'An error occurred. Please try again later.';
              this.statusClass = 'bg-red-500 text-white'; // Gaya error
            }
          );
      }
    }
  };
</script>


