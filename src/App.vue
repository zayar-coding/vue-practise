<script setup>
import { ref } from 'vue';
import NotiHandler from './components/NotiHandler.vue';
import { useLocalization } from './composables/useLocalization';
const { AutoAnimateLibrary, FirstPluginPage,
  IntersectionObserver, KA, tdiw, VueUseImplmentation, WatchEffect,InfinityScroll,
  changeLocale
} = useLocalization();
const def = ref(true);
const changeLang = () => {
  def.value = !def.value;
  changeLocale(def.value ? 'en' : 'jp');
};
</script>
<template>    
      <NotiHandler/>
      <button @click="changeLang">
      <p v-if="def">Switch to Japan</p>
      <p v-else>Switch to  English</p>
      </button>
      <div>
      <router-link to="/watcheffect">{{ WatchEffect }}</router-link>
      <router-link to="/keepalive">{{ KA }}</router-link>
      <router-link to="/firstplugin">{{ FirstPluginPage }}</router-link>        
      <router-link to="/infinityscroll-post">{{InfinityScroll}}(Manual)</router-link>  
      </div>
      <div>
      <router-link to="/vueuse-impl">{{ VueUseImplmentation }}</router-link>  
      <router-link to="/intersection-observer">{{ IntersectionObserver }}</router-link>  
      <router-link to="/auto-animate">{{ AutoAnimateLibrary }}</router-link>  
      <router-link to="/vuex-item">Vuex-Item</router-link>
  </div>
     
  <router-view v-slot="{ Component,route }" >
    <Transition
    :enter-active-class="route.meta.enterClass"
    :leave-active-class="route.meta.leaveClass">
    <!-- name="fade" mode="out-in" -->
    <component :is="Component" />
    </Transition>
  </router-view>
  
</template>

<style scoped>
  a{
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right:1em;
  }
  a:hover,
  a.router-link-active{
    border-bottom: 2px solid #3498db;

  }
  .page{
    position:absolute;
    top: 30px;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active
  .fade-leave-active{
    transition: opacity 0.5s ease-out;
  }
  /* transition without name , it replaces fade to v 
  example v-enter-from

  in-out mode က 
  old element က fade out ပြီးမှ new element ကပေါ်လာတာမျိုး
  default modeကျတော့ တစ်ခုပြီဂမှ တစ်ခုကပေါ်လာတာဒါပေမဲ့ နှစ်ကောင်လုံးက တပြိုင်နက်တည်းလုပ်နေတာ 
  */

</style>
