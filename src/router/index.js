import { createRouter, createWebHistory } from 'vue-router'
import KeepAlivePage from '../views/KeepAlivePage.vue'
import WatchEffectPage from '../views/WatchEffectPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/keepalive',
      name: 'KeepAlive',
      component: KeepAlivePage
    },
    {
      path: '/watcheffect',
      name: 'watchEffect',
      component: WatchEffectPage
    }
  ]
})

export default router;