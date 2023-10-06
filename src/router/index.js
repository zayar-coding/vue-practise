import { createRouter, createWebHistory } from 'vue-router'
import KeepAlivePage from '../views/KeepAlivePage.vue'
import WatchEffectPage from '../views/WatchEffectPage.vue'
import FirstPluginPage from '../views/FirstPluginPage.vue'
import InfinityScrollPage from '../views/InfinityScrollPage.vue'
import VueUseImplPage from '../views/VueUseImplPage.vue'
import IntersectionPage from '../views/IntersectionPage.vue'
import AnimatedLibraryPage from "../views/AnimatedLibraryPage.vue"
import ItemList from '../components/Vuex/ItemList.vue'
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
    }, {
      path: '/vueuse-impl',
      name: 'VueUseImpl',
      component: VueUseImplPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/intersection-observer',
      name: 'IntersectionObserver',
      component: IntersectionPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/auto-animate',
      name: 'AutoAnimate',
      component: AnimatedLibraryPage,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: '/vuex-item',
      name: 'ItemList',
      component: ItemList,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    }
  ]
})

export default router;