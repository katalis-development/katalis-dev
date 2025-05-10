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
    nav: {
      home: "Beranda",
      services: "Layanan",
      pricing: "Harga",
      about: "Tentang",
      contact: "Kontak",
      brandName: "Katalis Dev",
    },
    hero: {
      title: "Mengkatalisasi Transformasi Digital Anda dengan",
      subtitle:
        "Kami menciptakan solusi web modern, skalabel untuk mengangkat merek Anda dan mempercepat kesuksesan Anda.",
      cta: "Mulai Sekarang",
    },
    services: {
      title: "Layanan Unggulan Kami",
      desc: "Nikmati solusi terbaik yang kami tawarkan untuk membantu bisnismu tumbuh dan berkembang!",
      webDev: {
        title: "Pengembangan Web",
        desc: "Membangun situs web modern, responsif, dan skalabel dengan teknologi terkini.",
      },
      mobileApps: {
        title: "Aplikasi Mobile",
        desc: "Menciptakan aplikasi mobile yang indah dan fungsional sesuai kebutuhan Anda.",
      },
      uiux: {
        title: "Desain UI/UX",
        desc: "Mendesain antarmuka yang berpusat pada pengguna yang menakjubkan dan mudah digunakan.",
      },
      seo: {
        title: "Optimasi SEO",
        desc: "Tingkatkan visibilitas situs web Anda dan peringkat lebih tinggi di mesin pencari secara organik.",
      },
      cloud: {
        title: "Integrasi Cloud",
        desc: "Mengintegrasikan layanan cloud dengan mulus untuk menskalakan dan memodernisasi operasi bisnis Anda.",
      },
      maintenance: {
        title: "Pemeliharaan & Dukungan",
        desc: "Menyediakan pembaruan berkelanjutan, pemantauan, dan dukungan teknis untuk menjaga Anda tetap berjalan lancar.",
      },
    },
    pricing: {
      title: "Pilih Paket Harga Sesuai Kebutuhanmu",
      desc: "Temukan paket yang tepat dengan harga terbaik untuk bisnismu, mulai dari yang simple hingga yang lengkap!"
    },
    about: {
      title: "Tentang Katalis Dev",
      intro:
        'Di <span class="font-semibold text-white">Katalis Dev</span>, kami bersemangat membantu bisnis merangkul era digital. Dengan komitmen mendalam terhadap inovasi dan kualitas, kami menciptakan situs web, aplikasi mobile, dan pengalaman digital yang kuat yang mengkatalisasi pertumbuhan dan transformasi Anda.',
      vision: {
        title: "Visi Kami",
        desc: "Memberdayakan bisnis dengan memberikan solusi digital kelas dunia dan mendorong transformasi yang berdampak.",
      },
      mission: {
        title: "Misi Kami",
        desc: "Berinovasi, merancang, dan mengembangkan produk yang tidak hanya memenuhi tetapi melampaui harapan klien dengan teknologi mutakhir.",
      },
      values: {
        title: "Nilai-nilai Kami",
        desc: "Integritas, inovasi, kolaborasi, dan dorongan tanpa henti untuk keunggulan dalam setiap proyek yang kami lakukan.",
      },
    },
    contact: {
      title: "Hubungi Kami",
      subtitle:
        "Punya proyek dalam pikiran? Mari kita bangun sesuatu yang luar biasa bersama. Kirimkan pesan dan kami akan segera menghubungi Anda!",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Tulis pesan Anda...",
      submit: "Kirim Pesan",
    },
    footer: {
      tagline:
        "Memimpin jalan dalam inovasi digital, memberikan solusi berkinerja tinggi untuk bisnis di seluruh dunia.",
      copyright: "© 2025 Katalis Dev. Hak Cipta Dilindungi.",
      quickLinks: "Tautan Cepat",
      followUs: "Ikuti Kami",
      crafted:
        "Dibuat dengan ❤️ oleh Katalis Dev | Dirancang untuk web modern.",
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
