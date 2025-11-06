import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 🔹 Csak a szükséges komponenseket importáljuk
import { FwbPagination, FwbCard } from 'flowbite-vue'

const app = createApp(App)
app.use(router)

// 🔹 Globális regisztráció (így használhatod bárhol a template-ben)
app.component('FwbPagination', FwbPagination)
app.component('FwbCard', FwbCard)

app.mount('#app')
