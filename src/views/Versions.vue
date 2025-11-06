<template>
  <section class="flex items-center justify-center p-8">
    <div class="max-w-2xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-xl p-8 mt-10">
      <h2 class="text-3xl font-semibold text-center mb-10 text-cyan-400">
        Fejlesztési mérföldkövek 🧱
      </h2>

      <fwb-timeline>
          <fwb-timeline-item class="group">
            <fwb-timeline-point class="bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-300" />
            <fwb-timeline-content class="pl-4">
              <fwb-timeline-time class="text-cyan-300">Update - 5.2 ( 2025. Okt. 21. )</fwb-timeline-time>
              <fwb-timeline-title class="text-xl text-white font-semibold mt-1 group-hover:text-cyan-400 transition-colors">
                Plusz funkciók:
              </fwb-timeline-title>
              <fwb-timeline-body class="text-gray-300 leading-relaxed">
                - Új Customer típusok: <br>
                - Magánszemély & Cég
              </fwb-timeline-body>
            </fwb-timeline-content>
          </fwb-timeline-item>

          <fwb-timeline-item class="group">
            <fwb-timeline-point class="bg-indigo-400 group-hover:bg-indigo-300 transition-colors duration-300" />
            <fwb-timeline-content class="pl-4">
              <fwb-timeline-time class="text-indigo-300">Update - 5.1 ( 2025. Okt. 21. )</fwb-timeline-time>
              <fwb-timeline-title class="text-xl text-white font-semibold mt-1 group-hover:text-indigo-400 transition-colors">
                Finomítások:
              </fwb-timeline-title>
              <fwb-timeline-body class="text-gray-300 leading-relaxed">
                - Az adatbázisban a készlet darabszáma automatikusan csökken rendelések leadásakor <br>
                - Hibaüzenet javítás: váratlan hiba & invalid művelet pontosítása <br>
                - Dátum nem jelenik meg a rendelés leadásánál a Swagger UI-on - de az adatbázisban igen
              </fwb-timeline-body>
            </fwb-timeline-content>
          </fwb-timeline-item>

          <fwb-timeline-item class="group">
            <fwb-timeline-point class="bg-pink-400 group-hover:bg-pink-300 transition-colors duration-300" />
            <fwb-timeline-content class="pl-4">
              <fwb-timeline-time class="text-pink-300">Update - 2.0 ( 2025. Okt. 14. )</fwb-timeline-time>
              <fwb-timeline-title class="text-xl text-white font-semibold mt-1 group-hover:text-pink-400 transition-colors">
                Újabb feature-ök:
              </fwb-timeline-title>
              <fwb-timeline-body class="text-gray-300 leading-relaxed">
                - Auth, User <br>
                - Model-ek <br>
                - DTO-k: <br>
                - Külön AuthDTO, CustomerDTO, OrderDTO és ProductDTO <br>
                - Külön mappákba vett normál és Response DTO-k is! <br>
                - Repositores és Services: <br>
                - Külön IRepositores és IServices is megjelent
              </fwb-timeline-body>
            </fwb-timeline-content>
          </fwb-timeline-item>

          <fwb-timeline-item class="group">
            <fwb-timeline-point class="bg-orange-400 group-hover:bg-orange-300 transition-colors duration-300" />
            <fwb-timeline-content class="pl-4">
              <fwb-timeline-time class="text-orange-300">Update - 1.0 ( 2025. Okt. 8. )</fwb-timeline-time>
              <fwb-timeline-title class="text-xl text-white font-semibold mt-1 group-hover:text-orange-400 transition-colors">
                Feature-ök és programrészek:
              </fwb-timeline-title>
              <fwb-timeline-body class="text-gray-300 leading-relaxed">
                - Customer, Order, OrderProduct, Product <br>
                - Model-ek <br>
                - DTO-k: <br>
                - Kontrollerek <br>
                - AppDbContext.cs & appsettings.json & Program.cs az aktuális verziónak megfelelően működnek
              </fwb-timeline-body>
            </fwb-timeline-content>
          </fwb-timeline-item>
        </fwb-timeline>
    </div>
  </section>
</template>

<script setup>
import {
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTime,
  FwbTimelineTitle,
} from 'flowbite-vue'
</script>
