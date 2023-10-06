import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import MyFirstPlugin from './plugins/MyFirstPlugin'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createI18n } from 'vue-i18n'
import enMessage from "@/locales/en.json"
import jpMessage from "@/locales/jp.json"
import store from './components/Vuex/store';

const i18n = createI18n({
  locale: 'en',
  allowComposition: true, //!you need to specify that!
  messages: {
    en: enMessage,
    jp: jpMessage
  }
})


const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.use(MyFirstPlugin, {
  fontSize: {
    small: 12,
    medium: 24,
    largin: 36
  }//Passing customizable options to  our plugin
})
app.use(autoAnimatePlugin)
app.mount('#app')

