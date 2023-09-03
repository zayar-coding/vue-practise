import { createRouter, createWebHistory } from 'vue-router'
import KeepAlivePage from '../views/KeepAlivePage.vue'
import WatchEffectPage from '../views/WatchEffectPage.vue'
import FirstPluginPage from '../views/FirstPluginPage.vue'
import InfinityScrollPage from '../views/InfinityScrollPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/keepalive',
      name: 'KeepAlive',
      component: KeepAlivePage,

      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/watcheffect',
      name: 'watchEffect',
      component: WatchEffectPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/firstplugin',
      name: 'FirstPlugin',
      component: FirstPluginPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/infinityscroll-post',
      name: 'InfinityScroll',
      component: InfinityScrollPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    }
  ]
})

export default router;