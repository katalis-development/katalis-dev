<template>
  <section
    id="pricing"
    class="min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-br from-[#060d1d] via-slate-800 to-[#070c16]"
  >
    <div class="max-w-7xl w-full text-center">
      <div
        class="text-center mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          class="text-4xl md:text-6xl py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600"
        >
          {{ $t("pricing.bundleTitle") }}
        </h2>
        <p class="text-gray-300 text-xl">{{ $t("pricing.bundleDesc") }}</p>
      </div>

      <!-- Toggle Annual/Monthly -->
      <div class="flex justify-center mb-12">
        <div class="relative bg-white/10 rounded-full p-1 inline-flex">
          <button
            @click="billingPeriod = 'monthly'"
            class="py-2 px-6 rounded-full text-sm font-medium transition-all duration-200"
            :class="
              billingPeriod === 'monthly'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300'
            "
          >
            {{ $t("pricing.billingOptions.monthly") }}
          </button>
          <button
            @click="billingPeriod = 'annual'"
            class="py-2 px-6 rounded-full text-sm font-medium transition-all duration-200 relative"
            :class="
              billingPeriod === 'annual'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300'
            "
          >
            <span>{{ $t("pricing.billingOptions.yearly") }}</span>
            <span
              v-if="billingPeriod === 'annual'"
              class="absolute -top-3 -right-2 bg-green-500 text-xs px-2 py-0.5 rounded-full text-white whitespace-nowrap"
            >
              {{ $t("pricing.save") }} 20%
            </span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
        <!-- Basic and Regular plans remain the same -->
        <div
          v-for="(plan, index) in standardPlans"
          :key="index"
          class="glass relative rounded-2xl p-8 text-left border transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-teal-400"
          :class="{
            'border-indigo-500': plan.discount && !plan.popular,
            'border-white/10': !plan.discount && !plan.popular,
            'ring-4 ring-yellow-300 border-yellow-400 scale-105 bg-white/5 shadow-lg':
              plan.popular,
          }"
          data-aos="fade-right"
          :data-aos-delay="index * 300"
        >
          <!-- Badge Tag -->
          <div
            v-if="plan.tag"
            class="absolute top-4 right-4 bg-indigo-600 text-xs px-3 py-1 rounded-full text-white font-medium"
          >
            {{ plan.tag }}
          </div>

          <!-- Badge Popular -->
          <div
            v-if="plan.popular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-full text-xs shadow-md uppercase tracking-wide"
          >
            {{ $t("pricing.recommended") }}
          </div>

          <h2 class="text-2xl font-semibold mb-2">{{ plan.name }}</h2>

          <div v-if="plan.discount">
            <p class="text-xl text-white/70 mb-1 line-through">
              {{
                formatRupiah(
                  billingPeriod === "annual"
                    ? plan.originalPrice
                    : Math.round(plan.originalPrice / 12)
                )
              }}
              <span class="text-xs">{{
                billingPeriod === "annual"
                  ? $t("pricing.perYear")
                  : $t("pricing.perMonth")
              }}</span>
            </p>
            <p class="text-3xl text-green-400 mb-1 font-bold">
              {{
                formatRupiah(
                  billingPeriod === "annual"
                    ? plan.price
                    : Math.round(plan.price / 12)
                )
              }}
              <span class="text-sm">{{
                billingPeriod === "annual"
                  ? $t("pricing.perYear")
                  : $t("pricing.perMonth")
              }}</span>
            </p>
            <p
              v-if="billingPeriod === 'annual'"
              class="text-sm text-gray-400 mb-4"
            >
              {{ formatRupiah(Math.round(plan.price / 12)) }} / bulan
            </p>
          </div>
          <div v-else>
            <p class="text-3xl text-white mb-1 font-bold">
              {{
                formatRupiah(
                  billingPeriod === "annual"
                    ? plan.price
                    : Math.round(plan.price / 12)
                )
              }}
              <span class="text-sm">{{
                billingPeriod === "annual"
                  ? $t("pricing.perYear")
                  : $t("pricing.perMonth")
              }}</span>
            </p>
            <p
              v-if="billingPeriod === 'annual'"
              class="text-sm text-gray-400 mb-4"
            >
              {{ formatRupiah(Math.round(plan.price / 12)) }} / bulan
            </p>
          </div>

          <p class="text-gray-300 mb-6">{{ plan.description }}</p>
          <ul class="space-y-3 text-sm text-gray-200">
            <li v-for="(feature, i) in plan.features" :key="i">
              ✔ {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Custom Package Card (Premium replacement) -->
        <div
          class="glass relative rounded-2xl p-8 text-left border border-indigo-500 transition duration-300 hover:scale-105 hover:shadow-2xl bg-white/5"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <!-- Badge Tag -->
          <div
            class="absolute top-4 right-4 bg-indigo-600 text-xs px-3 py-1 rounded-full text-white font-medium"
          >
            {{ $t("pricing.planTags.custom") }}
          </div>

          <!-- Title -->
          <h2 class="text-2xl font-semibold mb-2 text-white">
            {{ $t("pricing.customPlan.name") }}
          </h2>

          <p class="text-gray-300 mb-4">
            {{ $t("pricing.customPlan.description") }}
          </p>

          <!-- Main features section (from image example) -->
          <div class="space-y-4 my-6">
            <div class="text-lg text-teal-400 font-medium">
              <span class="text-teal-300">KatalisDev</span
              ><span class="text-gray-300"
                >, {{ $t("pricing.customPlan.tagline") }}</span
              >
            </div>

            <div class="text-sm text-gray-200">
              <p class="mb-2">
                <span class="text-teal-300">{{
                  $t("pricing.customPlan.canDo")
                }}</span>
                {{ $t("pricing.customPlan.service1") }}
              </p>
              <p class="mb-2">{{ $t("pricing.customPlan.service2") }}</p>
              <p class="mb-2">
                <span class="text-teal-300">{{
                  $t("pricing.customPlan.canDo")
                }}</span>
                {{ $t("pricing.customPlan.service3") }}
              </p>
              <p class="mb-4">{{ $t("pricing.customPlan.service4") }}</p>
            </div>
          </div>

          <!-- Pricing estimate -->
          <div class="mt-8 mb-4">
            <p class="text-gray-300 text-center">
              {{ $t("pricing.customPlan.estimateTitle") }}
            </p>
            <p class="text-2xl text-yellow-300 font-bold text-center my-2">
              {{ $t("pricing.customPlan.estimateMessage") }}
            </p>
          </div>
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
      billingPeriod: "monthly", // 'monthly' atau 'annual'
      planTypes: ["basic", "regular"],
      planPrices: {
        basic: {
          price: 11520000, // Rp11.520.000/tahun
          originalPrice: 23040000, // Rp23.040.000/tahun
          discount: true,
          popular: false,
          tag: this.$i18n.locale === "id" ? "Ekonomis" : "Economical",
        },
        regular: {
          price: 24000000, // Rp24.000.000/tahun
          originalPrice: 48000000, // Rp48.000.000/tahun
          discount: true,
          popular: true,
          tag: this.$i18n.locale === "id" ? "Terlaris" : "Best Seller",
        },
      },
    };
  },
  computed: {
    standardPlans() {
      return this.planTypes.map((type) => {
        const priceInfo = this.planPrices[type];
        return {
          key: type,
          name: this.$t(`pricing.plans.${type}.name`),
          price: priceInfo.price,
          originalPrice: priceInfo.originalPrice,
          description: this.$t(`pricing.plans.${type}.description`),
          features: this.getFeatures(type),
          discount: priceInfo.discount,
          popular: priceInfo.popular,
          tag: this.$t(`pricing.planTags.${this.getTagKey(type)}`),
        };
      });
    },
  },
  methods: {
    formatRupiah(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(value);
    },
    getFeatures(planType) {
      const features = [];
      let i = 0;

      while (true) {
        const feature = this.$t(`pricing.plans.${planType}.features.${i}`);
        if (feature === `pricing.plans.${planType}.features.${i}`) {
          break;
        }
        features.push(feature);
        i++;
      }

      return features;
    },
    getTagKey(planType) {
      const tagMap = {
        basic: "economical",
        regular: "bestSeller",
        premium: "complete",
      };
      return tagMap[planType];
    },
  },
  watch: {
    "$i18n.locale"() {
      Object.keys(this.planPrices).forEach((key) => {
        const planType = key;
        const tagKey = this.getTagKey(planType);
        this.planPrices[planType].tag = this.$t(`pricing.planTags.${tagKey}`);
      });
      this.$forceUpdate();
    },
  },
  created() {
    Object.keys(this.planPrices).forEach((key) => {
      const planType = key;
      const tagKey = this.getTagKey(planType);
      this.planPrices[planType].tag = this.$t(`pricing.planTags.${tagKey}`);
    });
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
