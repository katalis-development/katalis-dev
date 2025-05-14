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
             @click="setBillingPeriod('monthly')"
            class="py-2 cursor-pointer px-6 rounded-full text-sm font-medium transition-all duration-200"
            :class="
              billingPeriod === 'monthly'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300'
            "
          >
            {{ $t("pricing.billingOptions.monthly") }}
          </button>
          <button
             @click="setBillingPeriod('annual')"
            class="py-2 cursor-pointer px-6 rounded-full text-sm font-medium transition-all duration-200 relative"
            :class="
              billingPeriod === 'annual'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300'
            "
          >
            <span>{{ $t("pricing.billingOptions.yearly") }}</span>
            <span
              v-if="billingPeriod === 'annual'"
              class="absolute -top-4 -right-2 bg-green-500 text-xs px-2 py-0.5 rounded-full text-white whitespace-nowrap"
            >
              {{ $t("pricing.annualSave") }}
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
          <!-- Badge Discount -->
          <span
              
              class=" bg-green-500 text-xs px-2 py-1 rounded-full text-white font-semibold whitespace-nowrap"
            >
              {{ $t("pricing.save") }} {{ plan.discountAmount }}%  
          </span>
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
              {{ formatRupiah(Math.round(plan.price / 12)) }} {{ $t("pricing.perMonth") }}
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
              {{ formatRupiah(Math.round(plan.price / 12)) }} {{ $t("pricing.perMonth") }}
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
              <span class="text-gray-300">{{ $t("pricing.customPlan.tagline") }}</span>
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

<script setup>
  import { ref, computed, watch, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();

  const planTypes = ['basic', 'regular'];
  const billingPeriod = ref('monthly'); // atau 'annual'
  const setBillingPeriod = (period) => {
    billingPeriod.value = period;
  };

  const planPrices = computed(() => {
    const isMonthly = billingPeriod.value === 'monthly';
    const isIndo = locale.value === 'id';

    const basicOriginalPrice = 4000000;
    const regularOriginalPrice = 8500000;
    const basicDiscount = isMonthly ? 15 : 25;
    const regularDiscount = isMonthly ? 25 : 35;

    const calculatePrice = (original, discount) => {
      return Math.round(original * (1 - discount / 100));
    };

    return {
      basic: {
        originalPrice: basicOriginalPrice,
        discountAmount: basicDiscount,
        price: calculatePrice(basicOriginalPrice, basicDiscount),
        discount: true,
        popular: false,
        tag: isIndo ? 'Ekonomis' : 'Economical',
      },
      regular: {
        originalPrice: regularOriginalPrice,
        discountAmount: regularDiscount,
        price: calculatePrice(regularOriginalPrice, regularDiscount),
        discount: true,
        popular: true,
        tag: isIndo ? 'Terlaris' : 'Best Seller',
      },
    };
  });


  function formatRupiah(value) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  }

  function getTagKey(planType) {
    const tagMap = {
      basic: 'economical',
      regular: 'bestSeller',
      premium: 'complete',
    };
    return tagMap[planType];
  }

  function getFeatures(planType) {
    const features = [];
    let i = 0;

    while (true) {
      let feature = t(`pricing.plans.${planType}.features.${i}`);

      // Custom fitur untuk basic annual
      if (planType === 'basic' && i === 2) {
        if (billingPeriod.value === 'annual') {
          feature = locale.value === 'id'
            ? 'Gratis Hosting 1 Tahun'
            : '1 Year Free Hosting';
        }
      }

       // Custom fitur untuk regular annual
      if (planType === 'regular' && i === 2) {
        if (billingPeriod.value === 'annual') {
          feature = locale.value === 'id'
            ? 'Gratis Hosting 1 Tahun'
            : '1 Year Free Hosting';
        }
      }

      // Stop jika key tidak ditemukan
      if (feature === `pricing.plans.${planType}.features.${i}`) {
        break;
      }

      features.push(feature);
      i++;
    }

    return features;
  }

  const standardPlans = computed(() =>
    planTypes.map((type) => {
      const priceInfo = planPrices.value[type];
      return {
        key: type,
        name: t(`pricing.plans.${type}.name`),
        price: priceInfo.price,
        originalPrice: priceInfo.originalPrice,
        description: t(`pricing.plans.${type}.description`),
        features: getFeatures(type),
        discount: priceInfo.discount,
        discountAmount: priceInfo.discountAmount,
        popular: priceInfo.popular,
        tag: t(`pricing.planTags.${getTagKey(type)}`),
      };
    })
  );

  // Watcher: update tag saat locale berubah
  watch(locale, () => {
    Object.keys(planPrices.value).forEach((key) => {
      const tagKey = getTagKey(key);
      planPrices.value[key].tag = t(`pricing.planTags.${tagKey}`);
    });
  });

  // Initial tag update saat component mount
  onMounted(() => {
    Object.keys(planPrices.value).forEach((key) => {
      const tagKey = getTagKey(key);
      planPrices.value[key].tag = t(`pricing.planTags.${tagKey}`);
    });
  });
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
