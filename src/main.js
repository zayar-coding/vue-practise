import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import MyFirstPlugin from './plugins/MyFirstPlugin'
const app = createApp(App)
app.use(router)
app.use(MyFirstPlugin, {
  fontSize: {
    small: 12,
    medium: 24,
    largin: 36
  }//Passing customizable options to  our plugin
})
app.mount('#app')

