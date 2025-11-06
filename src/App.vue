<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex flex-col">
    <!-- 🌌 NAVBAR -->
    <header class="border-b border-slate-700 bg-slate-900/70 backdrop-blur-xl sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center font-bold text-gray-900">
            F
          </div>
          <span class="text-xl font-semibold tracking-wide text-cyan-400">FlowTastic</span>
        </div>

        <!-- Menü gomb (mobilra) -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Menü (desktop) -->
        <ul class="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><RouterLink to="/" class="hover:text-cyan-400 transition-colors">Kezdőlap</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-cyan-400 transition-colors">Rólunk</RouterLink></li>
          <li><RouterLink to="/versions" class="hover:text-cyan-400 transition-colors">Verziók</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-cyan-400 transition-colors">Kapcsolat</RouterLink></li>
          <li><RouterLink to="/readme" class="text-cyan-400 transition-colors">README</RouterLink></li>
        </ul>
      </nav>

      <!-- Menü (mobil) -->
      <transition name="fade">
        <ul v-if="menuOpen" class="md:hidden flex flex-col bg-slate-900 border-t border-slate-700 text-gray-300 p-4 space-y-3">
          <li><RouterLink to="/" class="block hover:text-cyan-400 transition-colors">Kezdőlap</RouterLink></li>
          <li><RouterLink to="/about" class="block hover:text-cyan-400 transition-colors">Rólunk</RouterLink></li>
          <li><RouterLink to="/versions" class="block hover:text-cyan-400 transition-colors">Verziók</RouterLink></li>
          <li><RouterLink to="/contact" class="block hover:text-cyan-400 transition-colors">Kapcsolat</RouterLink></li>
          <li><RouterLink to="/readme" class="hover:text-cyan-400 transition-colors">README</RouterLink></li>
        </ul>
      </transition>
    </header>

    <!-- 🔄 ROUTER VIEW -->
    <main class="flex-grow">
      <RouterView />
    </main>

    <!-- 🌙 FOOTER -->
    <footer class="border-t border-slate-700 bg-slate-900/70 backdrop-blur-xl mt-10">
      <fwb-footer class="dark-footer">
        <fwb-footer-copyright
          by="Flowbite™"
          href="https://flowbite.com/"
          copyright-message="All Rights Reserved."
        />
        <fwb-footer-link-group>
          <fwb-footer-link href="#">About</fwb-footer-link>
          <fwb-footer-link href="#">Privacy Policy</fwb-footer-link>
          <fwb-footer-link href="#">Licensing</fwb-footer-link>
          <fwb-footer-link href="#">Contact</fwb-footer-link>
          <fwb-footer-link href="#">README</fwb-footer-link>
        </fwb-footer-link-group>
      </fwb-footer>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import {
  FwbFooter,
  FwbFooterCopyright,
  FwbFooterLink,
  FwbFooterLinkGroup,
} from 'flowbite-vue'

const menuOpen = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dark-footer {
  background-color: #1e293b !important; /* Tailwind bg-slate-800 színe */
  color: white !important;
}
</style>
