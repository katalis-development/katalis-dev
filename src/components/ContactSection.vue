<template>
    <section id="contact" class="min-h-screen flex items-center justify-center px-6 py-20 bg-radial from-neutral-800 from-40% to-neutral-950" >
        <div class="max-w-4xl w-full text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
            Get In Touch
            </h2>
            <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            Have a project in mind? Let's build something amazing together.
            Drop us a message and we'll get back to you soon!
            </p>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div class="flex flex-col gap-2">
                <label for="name" class="text-left text-gray-400 text-sm">Name</label>
                <input type="text" id="name" placeholder="Your Name" class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>

            <div class="flex flex-col gap-2">
                <label for="email" class="text-left text-gray-400 text-sm">Email</label>
                <input type="email" id="email" placeholder="you@example.com" class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>

            <div class="flex flex-col gap-2 md:col-span-2">
                <label for="message" class="text-left text-gray-400 text-sm">Message</label>
                <textarea id="message" rows="5" placeholder="Write your message..." class="p-3 rounded-lg bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
            </div>

            <div class="md:col-span-2">
                <button type="submit" class="w-full bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 hover:opacity-90 text-white font-bold py-3 rounded-lg transition duration-300">
                Send Message
                </button>
            </div>
            </form>
        </div>
    </section>


</template>