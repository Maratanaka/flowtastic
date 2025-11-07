<template>
  <h1 class="title">Teljes Dokumentáció 🖊️</h1>
    <section class="flex justify-center p-8 pt-28 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-8 max-w-7xl w-full">
        <!-- Sidebar -->
        <Sidebar />
          <!-- Main Content -->
            <div class="space-y-8 scroll-smooth">
              <!-- ===========================
                    MODELLEK
              ============================ -->
                <h2 id="database" class="text-3xl font-semibold mb-10 text-cyan-400 scroll-mt-24">
                  1. Adatmodell és Kapcsolatok
                </h2>
                  <!-- Modellek dinamikusan -->
                  <fwb-card
                    v-for="card in modelCardList"
                    :key="card.id"
                    :id="card.id"
                    variant="horizontal"
                    class="w-full scroll-mt-24 dark-card"
                  >
                    <div class="p-5">
                      <h5 class="mb-2 text-2xl font-bold text-white">{{ card.title }}</h5>
                        <CodeBlock lang="csharp" :code="codeMap[card.code]" />
                        <!-- Magyarázat a kód alatt -->
                        <p v-if="card.description" class="mt-4 text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {{ card.description }}
                        </p>
                    </div>
                  </fwb-card>
                  <!-- Kapcsolatok -->
                    <fwb-card id="relationships" variant="horizontal" class="w-full scroll-mt-24 dark-card">
                      <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold text-white">1.7 Adatbázis Kapcsolatok</h5>
                        <ul class="list-disc ml-5 text-gray-400">
                          <li>User ↔ Customer: 1:1 kapcsolat</li>
                          <li>Customer ↔ Order: 1:N kapcsolat</li>
                          <li>Order ↔ Product: N:N kapcsolat (OrderProduct-on keresztül)</li>
                        </ul>
                      </div>
                    </fwb-card>
                <!-- ===========================
                      API
                ============================ -->
                  <h2 id="api" class="text-3xl font-semibold mb-10 text-indigo-400 scroll-mt-24">
                    2. API Végpontok
                  </h2>
                    <!-- API kártyák dinamikusan -->
                      <fwb-card
                        v-for="card in apiCardList"
                        :key="card.id"
                        :id="card.id"
                        variant="horizontal"
                        class="w-full scroll-mt-24 dark-card"
                      >
                        <div class="p-5">
                          <h5 class="mb-2 text-2xl font-bold text-white">{{ card.title }}</h5>
                            <p v-if="card.description" 
                              class="mt-4 text-gray-300 text-sm leading-relaxed"
                              v-html="card.description">
                            </p>

                              <CodeBlock 
                                v-if="card.code" 
                                lang="csharp" 
                                :code="codeMap[card.code]" 
                              />
                        </div>
                      </fwb-card>
                    <!-- ===========================
                      SERVICES
                    ============================ -->
                      <h2 id="services" class="text-3xl font-semibold mb-10 text-pink-400 scroll-mt-24">
                        3. Szolgáltatási Réteg
                      </h2>
              </div>
        </div>
      </section>
</template>

<script setup>
import {
  userCode,
  customCode,
  productCode,
  orderCode,
  orderProductCode,
  orderStatusCode,
  apiRegist,
  apiAnswer,
  apiLogin,
  productAnswer,
  productPut,
  orderPost
} from '../data/codeBlocks.js'

import { ref } from 'vue'
import { FwbCard } from 'flowbite-vue'
import CodeBlock from '../components/CodeBlock.vue'
import Sidebar from '../components/Sidebar.vue'

import { modelCards, apiCards } from '../data/cards.js'

const modelCardList = ref(modelCards)
const apiCardList = ref(apiCards)

// ✅ Kódnevek → tényleges kód objektumok
const codeMap = {
  userCode,
  customCode,
  productCode,
  orderCode,
  orderProductCode,
  orderStatusCode,
  apiRegist,
  apiAnswer,
  apiLogin,
  productAnswer,
  productPut,
  orderPost
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.dark-card {
  background-color: #1e293b !important; /* Tailwind bg-slate-800 színe */
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem; /* kerekített sarkok */
}

.title {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 600; /* font-semibold */
  text-align: center;
  color: #06b6d4; /* text-cyan-400 */
  margin-top: 4rem;
}
</style>
