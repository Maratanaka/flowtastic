import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Versions from '../views/Versions.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Readme from '../views/Readme.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/versions', name: 'Versions', component: Versions },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/readme' , name: 'Readme' , component: Readme},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
