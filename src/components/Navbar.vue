<template>
    <nav class="fixed z-20 w-full bg-black/10 backdrop-blur-sm px-10 py-4 shadow flex items-center justify-between">
    
        <a href="#" class="text-lg lg:text-2xl font-bold text-white">
            Katalis Dev &lt;/&gt;
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8 items-center">
            <a href="#" class="hover:text-blue-400 font-semibold transition">Home</a>
            <a href="#services" class="hover:text-blue-400 font-semibold transition">Services</a>
            <a href="#about" class="hover:text-blue-400 font-semibold transition">About</a>
            <a href="#contact" class="hover:text-blue-400 font-semibold transition">Contact</a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
            <button id="menu-toggle" class="text-white focus:outline-none">
            <!-- Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            </button>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="lg:hidden absolute top-12 right-6 bg-black/60 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-6 text-center opacity-0 scale-95 transform transition-all duration-300">
            <a href="#" class="hover:text-blue-400 font-bold transition">Home</a>
            <a href="#services" class="hover:text-blue-400 font-bold transition">Services</a>
            <a href="#about" class="hover:text-blue-400 font-bold transition">About</a>
            <a href="#contact" class="hover:text-blue-400 font-bold transition">Contact</a>
        </div>
    </nav>
</template>

<script>
   export default {
    mounted() {
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');

        if (!mobileMenu.classList.contains('hidden')) {
            setTimeout(() => {
            mobileMenu.classList.add('opacity-100', 'scale-100');
            mobileMenu.classList.remove('opacity-0', 'scale-95');
            }, 10);
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('opacity-100', 'scale-100');
            mobileMenu.classList.add('opacity-0', 'scale-95');
            document.body.style.overflow = 'auto';
        }
        });
    }
    }
</script>

<style>
   
</style>