import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      brandName: "Katalis Dev",
    },
    hero: {
      title: "Catalyzing Your Digital Transformation with",
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
      plans: {
        basic: {
          name: "Basic",
          description: "Perfect for portfolios or simple websites",
          features: {
            0: "1 Landing Page",
            1: "Responsive Design",
            2: "7 Days Hosting",
          },
        },
        regular: {
          name: "Regular",
          description: "For small businesses & SMEs",
          features: {
            0: "Up to 5 Pages",
            1: "Contact Form",
            2: "Mobile Friendly & Basic SEO",
            3: "Free 1 Year Hosting",
          },
        },
        premium: {
          name: "Premium",
          description: "Complete solution for professional businesses",
          features: {
            0: "Unlimited Pages",
            1: "Admin Panel + CMS",
            2: "Payment / API Integration",
            3: "3 Months Support",
          },
        },
      },
      discount: "50% Discount",
      popular: "Most Popular",
      perProject: "/ project",
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
    // Bahasa Indonesia yang lebih santai dan ramah
    nav: {
      home: "Beranda",
      services: "Layanan",
      pricing: "Harga",
      about: "Tentang Kita",
      contact: "Hubungi",
      brandName: "Katalis Dev",
    },
    hero: {
      title: "Bikin Bisnis Kamu Makin Kece dengan",
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
      plans: {
        basic: {
          name: "Basic",
          description: "Pas buat portofolio atau website simpel",
          features: {
            0: "1 Halaman Landing Page",
            1: "Desain Keren Responsive",
            2: "Hosting 7 Hari",
          },
        },
        regular: {
          name: "Regular",
          description: "Buat bisnis kecil & UMKM",
          features: {
            0: "Sampai 5 Halaman",
            1: "Form Kontak",
            2: "Mobile Friendly & SEO Dasar",
            3: "Gratis Hosting 1 Tahun",
          },
        },
        premium: {
          name: "Premium",
          description: "Buat bisnis yang pengen tampil profesional",
          features: {
            0: "Halaman Tanpa Batas",
            1: "Admin Panel + CMS",
            2: "Integrasi Pembayaran / API",
            3: "Support 3 Bulan",
          },
        },
      },
      discount: "Diskon 50%",
      popular: "Paling Laris!",
      perProject: "/ proyek",
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
