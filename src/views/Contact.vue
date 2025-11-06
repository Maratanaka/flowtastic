<template>
  <section class="flex flex-col items-center justify-center p-8">
    <div class="max-w-3xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl p-8 mt-10">
      <h1 class="text-3xl font-semibold text-center text-cyan-400 mb-6">Kapcsolat 🔗</h1>
      <p class="text-gray-300 leading-relaxed mb-6 text-center">
        Van kérdésed, vagy szeretnél velünk együtt dolgozni? Írj nekünk bátran!
      </p>

      <form class="flex flex-col gap-4">
        <input
          autocomplete="name"
          id="name"
          type="text"
          placeholder="Név"
          class="p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          autocomplete="email"
          id="email"
          type="email"
          placeholder="Email"
          class="p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          id="message"
          rows="5"
          placeholder="Üzenet"
          class="p-3 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>
        <button
          type="submit"
          class="bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Küldés
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
</script>
