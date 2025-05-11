<template>
    <section id="pricing" class=" min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#060d1d] via-slate-800 to-[#070c16]">
      <div class="max-w-7xl w-full text-center">
        <div class="text-center mb-24" data-aos="fade-up" data-aos-duration="1000">
            <h2
            class="text-4xl md:text-5xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"
            >
            {{ $t("pricing.title") }}
            </h2>
            <p class="text-gray-300">{{ $t("pricing.desc") }}</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
            <div
                v-for="(plan, index) in plans"
                :key="index"
                class="glass relative rounded-2xl p-8 text-left border transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-400"
                :class="{
                    'border-indigo-500': plan.discount && !plan.popular,
                    'border-white/10': !plan.discount && !plan.popular,
                    'ring-4 ring-yellow-300 border-yellow-400 scale-105 bg-white/5 shadow-lg': plan.popular
                }"
                 data-aos="fade-right"
                :data-aos-delay="index * 300"
            >
                <!-- Badge Diskon -->
                <div
                    v-if="plan.discount"
                    class="absolute top-4 right-4 bg-red-500 text-xs px-3 py-1 rounded-full text-white"
                >
                    Diskon 50%
                </div>

                <!-- Badge Paling Populer -->
                <div
                    v-if="plan.popular"
                    class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-full text-xs shadow-md uppercase tracking-wide"
                >
                    Paling Populer
                </div>

                <h2 class="text-2xl font-semibold mb-2">{{ plan.name }}</h2>

                <div v-if="plan.discount">
                    <p class="text-xl text-white mb-1 line-through">{{ formatRupiah(plan.originalPrice) }}</p>
                    <p class="text-2xl text-green-400 mb-4">{{ formatRupiah(plan.price) }}</p>
                </div>
                <div v-else>
                    <p class="text-xl text-white mb-4">{{ formatRupiah(plan.price) }} <span class="text-sm text-gray-400">/ proyek</span></p>
                </div>

                <p class="text-gray-300 mb-6">{{ plan.description }}</p>
                <ul class="space-y-3 text-sm text-gray-200">
                    <li v-for="(feature, i) in plan.features" :key="i">✔ {{ feature }}</li>
                </ul>
                </div>

        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "PricingPlans",
    data() {
      return {
        plans: [
          {
            name: "Basic",
            price: 1000000,
            description: "Cocok untuk portofolio atau website sederhana",
            features: ["1 Halaman Landing Page", "Desain Responsive", "Hosting 7 Hari"],
            discount: false,
          },
          {
            name: "Regular",
            price: 1500000,
            originalPrice: 3000000,
            description: "Untuk bisnis kecil & UMKM",
            features: [
              "Hingga 5 Halaman",
              "Formulir Kontak",
              "Mobile Friendly & SEO Dasar",
              "Gratis Hosting 1 Tahun",
            ],
            discount: true,
            popular: true
          },
          {
            name: "Premium",
            price: 3000000,
            originalPrice: 6000000,
            description: "Solusi lengkap untuk bisnis profesional",
            features: [
              "Unlimited Halaman",
              "Admin Panel + CMS",
              "Integrasi Pembayaran / API",
              "Support 3 Bulan",
            ],
            discount: true,
            popular: false
          },
        ],
      };
    },
    methods: {
      formatRupiah(value) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(value);
      },
    },
  };
  </script>
  
  <style scoped>
  body {
    background: radial-gradient(circle at top left, #0f172a, #000000);
  }
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  </style>
  