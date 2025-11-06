<template>
  <div class="relative group">
    <button
      @click="copyCode"
      class="absolute top-2 right-2 bg-stone-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
    >
      {{ copied ? 'Másolva!' : 'Másolás' }}
    </button>

    <pre class="bg-gray-900 text-white rounded-md overflow-x-auto p-3 text-sm">
      <code ref="codeRef" :class="`language-${lang}`">{{ code }}</code>
    </pre>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import { nextTick } from 'vue'

const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: 'csharp' }
})

const codeRef = ref(null)
const copied = ref(false)

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

const highlight = async () => {
  await nextTick()
  if (codeRef.value) Prism.highlightElement(codeRef.value)
}

onMounted(highlight)
watch(() => props.code, highlight)
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
