import { createI18n } from "vue-i18n";

const messages = {
  en: {
    brandName: "Katalis Dev",
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      title: "Your Brand Deserves More Than Just a Template",
      subtitle:
        "We craft modern, scalable web solutions to elevate your brand and accelerate your success.",
      cta: "Get Started",
    },
    services: {
      title: "Our Premium Services",
      desc: "Experience the best solutions we offer to help your business grow and thrive!",
      webDev: {
        title: "Web Development",
        desc: "Building modern, responsive, and scalable websites with cutting-edge technologies.",
      },
      mobileApps: {
        title: "Mobile Apps",
        desc: "Creating beautiful and functional mobile applications tailored to your needs.",
      },
      uiux: {
        title: "UI/UX Design",
        desc: "Designing user-centric interfaces that are visually stunning and easy to use.",
      },
      seo: {
        title: "SEO Optimization",
        desc: "Boost your website's visibility and rank higher on search engines organically.",
      },
      cloud: {
        title: "Cloud Integration",
        desc: "Seamlessly integrate cloud services to scale and modernize your business operations.",
      },
      maintenance: {
        title: "Maintenance & Support",
        desc: "Providing continuous updates, monitoring, and technical support to keep you running smoothly.",
      },
    },
    pricing: {
      title: "Our Exclusive Pricing Plans",
      desc: "Discover the best value for your business with our tailored plans, designed to fit every need and budget.",
      bundleTitle: "Complete Digital Business Packages",
      bundleDesc:
        "Choose the right bundle to scale your business digitally with professional features and support.",
      planTags: {
        economical: "Economical",
        bestSeller: "Best Seller",
        complete: "Premium",
        custom: "Design Pro",
      },
      billingOptions: {
        monthly: "Monthly",
        yearly: "Yearly",
      },
      customPlan: {
        name: "Custom Design",
        description: "High-end tailored solutions for your best needs",
        tagline: "ready to make your brand pop?",
        canDo: "We can",
        service1: "create designs from scratch, custom sketches",
        service2: "Pricing depends on your requested features",
        service3: "improve with the latest technology",
        service4: "Yearly or quarterly maintenance available",
        estimateTitle: "Price Estimate",
        estimateMessage: "Let's chat about what you need! 😊",
        buttonSubtext: "Let's chat to see if we're a good match!",
      },
      plans: {
        basic: {
          name: "Basic",
          description: "Cost-effective solution for new businesses",
          features: {
            0: "3 Page Responsive Website",
            1: "Basic Contact Form",
            2: "6 Months Free Hosting",
            3: "1 Minor Revision",
          },
        },
        regular: {
          name: "Regular",
          description: "Complete package for growing businesses",
          features: {
            0: "8 Page Responsive Website",
            1: "Contact Form + WhatsApp Integration",
            2: "1 Year Free Hosting",
            3: "Simple Admin Dashboard",
            4: "3 Minor Revisions",
          },
        },
        premium: {
          name: "Premium",
          description: "Premium solution for professional businesses",
          features: {
            0: "Unlimited Pages",
            1: "Custom CMS + Admin Dashboard",
            2: "Payment & API Integration",
            3: "2 Years Free Hosting",
            4: "6 Months Priority Support",
            5: "Digital Strategy Consultation",
            6: "Unlimited Revisions (30 days)",
          },
        },
      },
      discount: "50% Discount",
      popular: "Most Popular",
      perProject: "/ project",
      mostValue: "Best Value",
      recommended: "Recommended",
      startFrom: "Starting from",
      annualBilling: "Annual Billing",
      perYear: "/ year",
      perMonth: "/ month",
      save: "Save",
    },
    about: {
      title: "About Katalis Dev",
      intro:
        'At <span class="font-semibold text-white">Katalis Dev</span>, we are passionate about helping businesses embrace the digital era. With a deep commitment to innovation and quality, we craft powerful websites, mobile apps, and digital experiences that catalyze your growth and transformation.',
      vision: {
        title: "Our Vision",
        desc: "To empower businesses by delivering world-class digital solutions and driving impactful transformation.",
      },
      mission: {
        title: "Our Mission",
        desc: "To innovate, design, and develop products that not only meet but exceed client expectations with cutting-edge technologies.",
      },
      values: {
        title: "Our Values",
        desc: "Integrity, innovation, collaboration, and a relentless drive for excellence in every project we undertake.",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "Have a project in mind? Let's build something amazing together. Drop us a message and we'll get back to you soon!",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Write your message...",
      submit: "Send Message",
      letsTalk: "Let's Talk 👋",
    },
    footer: {
      tagline:
        "Leading the way in digital innovation, delivering high-performance solutions for businesses worldwide.",
      copyright: "© 2025 Katalis Dev. All Rights Reserved.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      crafted: "Crafted with ❤️ by Katalis Dev | Designed for the modern web.",
    },
  },
  id: {
    brandName: "Katalis Dev",
    nav: {
      home: "Beranda",
      services: "Layanan",
      pricing: "Harga",
      about: "Tentang",
      contact: "Kontak",
      letsTalk: "Yuk Ngobrol",
    },
    hero: {
      title: "Brand Kamu Pantas Lebih Dari Sekadar Template",
      subtitle:
        "Kita bikin website keren yang bakal naikin brand kamu ke level berikutnya!",
      cta: "Yuk, Mulai!",
    },
    services: {
      title: "Layanan Kece Kita",
      desc: "Coba deh solusi terbaik dari kita buat ngembangin bisnis kamu!",
      webDev: {
        title: "Bikin Website",
        desc: "Kita bikinin website keren, responsif, dan gampang diakses pakai teknologi terkini.",
      },
      mobileApps: {
        title: "Aplikasi Mobile",
        desc: "Aplikasi yang cantik dan fungsional, pas banget sama kebutuhan kamu.",
      },
      uiux: {
        title: "Desain UI/UX",
        desc: "Desain antarmuka yang ciamik dan gampang dipake, bikin pengguna betah.",
      },
      seo: {
        title: "Optimasi SEO",
        desc: "Biar website kamu nongol di halaman pertama pencarian Google!",
      },
      cloud: {
        title: "Integrasi Cloud",
        desc: "Ngebantu bisnis kamu pake layanan cloud dengan mulus buat operasional yang lebih modern.",
      },
      maintenance: {
        title: "Dukungan & Maintenance",
        desc: "Selalu update, pantau, dan bantu teknis biar website kamu tetap jalan mulus.",
      },
    },
    pricing: {
      title: "Pilih Paket Harga yang Cocok",
      desc: "Ada paket buat semua kebutuhan dan budget, dari yang simpel sampai yang lengkap!",
      bundleTitle: "Paket Lengkap Bisnis Digital",
      bundleDesc:
        "Pilih bundel yang sesuai untuk mengembangkan bisnis Anda secara digital dengan fitur dan dukungan profesional.",
      planTags: {
        economical: "Ekonomis",
        bestSeller: "Terlaris",
        complete: "Premium",
        custom: "Design Pro",
      },
      billingOptions: {
        monthly: "Bulanan",
        yearly: "Tahunan",
      },
      customPlan: {
        name: "Design Custom",
        description: "Solusi premium khusus untuk kebutuhan terbaik anda",
        tagline: "Mau brand kamu lebih kece?",
        canDo: "Bisa",
        service1: "design eksklusif dari awal dengan konsep unik",
        service2: "Solusi khusus sesuai kebutuhan dan visi bisnis Anda",
        service3: "improve dengan teknologi terkini",
        service4: "Paket maintenance fleksibel (3 atau 12 bulan)",
        estimateTitle: "Investasi bisnis Anda",
        estimateMessage: "Yuk ngobrol tentang kebutuhanmu! 😊",
        buttonSubtext: "Mari diskusikan kebutuhan Anda bersama kami",
      },
      plans: {
        basic: {
          name: "Basic",
          description: "Solusi hemat untuk bisnis yang baru mulai",
          features: {
            0: "Website 3 Halaman Responsif",
            1: "Form Kontak Dasar",
            2: "Gratis Hosting 6 Bulan",
            3: "1 Revisi Minor",
          },
        },
        regular: {
          name: "Regular",
          description: "Paket lengkap untuk bisnis yang berkembang",
          features: {
            0: "Website 8 Halaman Responsif",
            1: "Form Kontak + Integrasi WhatsApp",
            2: "Gratis Hosting 1 Tahun",
            3: "Dasbor Admin Sederhana",
            4: "3 Revisi Minor",
          },
        },
        premium: {
          name: "Premium",
          description: "Solusi premium untuk bisnis profesional",
          features: {
            0: "Website Halaman Tak Terbatas",
            1: "CMS Kustom + Dasbor Admin",
            2: "Integrasi Pembayaran & API",
            3: "Gratis Hosting 2 Tahun",
            4: "Support Prioritas 6 Bulan",
            5: "Konsultasi Strategi Digital",
            6: "Revisi Tak Terbatas (30 hari)",
          },
        },
      },
      discount: "Diskon 50%",
      popular: "Paling Laris!",
      perProject: "/ proyek",
      mostValue: "Nilai Terbaik",
      recommended: "Rekomendasi",
      startFrom: "Mulai dari",
      annualBilling: "Penagihan Tahunan",
      perYear: "/ tahun",
      perMonth: "/ bulan",
      save: "Hemat",
      getStarted: "Mulai Sekarang",
    },
    about: {
      title: "Kenalan sama Katalis Dev",
      intro:
        'Di <span class="font-semibold text-white">Katalis Dev</span>, kita suka banget bantu bisnis masuk ke era digital. Dengan semangat inovasi dan kualitas, kita bikin website keren, aplikasi mobile, dan pengalaman digital yang bakal dorong pertumbuhan bisnismu!',
      vision: {
        title: "Visi Kita",
        desc: "Pengen bantu bisnis kamu tumbuh dengan solusi digital keren yang berdampak.",
      },
      mission: {
        title: "Misi Kita",
        desc: "Bikin produk inovatif yang ngga cuma sesuai, tapi lebih dari yang kamu harapkan.",
      },
      values: {
        title: "Nilai Kita",
        desc: "Jujur, inovatif, kolaboratif, dan selalu kasih yang terbaik di setiap proyek.",
      },
    },
    contact: {
      title: "Yuk, Ngobrol!",
      subtitle:
        "Punya ide proyek? Ayo kita wujudkan bareng! Tinggal kirim pesan, nanti kita hubungin balik secepatnya!",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      namePlaceholder: "Nama kamu",
      emailPlaceholder: "Email kamu",
      messagePlaceholder: "Tulis pesanmu di sini...",
      submit: "Kirim Pesan",
      letsTalk: "Ngobrol Yuk 👋",
    },
    footer: {
      tagline:
        "Jadi pionir inovasi digital, kasih solusi terbaik buat bisnis di seluruh dunia.",
      copyright: "© 2025 Katalis Dev. Hak Cipta Dilindungi.",
      quickLinks: "Link Cepat",
      followUs: "Follow Kita",
      crafted:
        "Dibuat dengan ❤️ oleh Katalis Dev | Dirancang buat web zaman now.",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});

export default i18n;
