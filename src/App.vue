<script setup>
import NotiHandler from './components/NotiHandler.vue';
</script>
<template>    
      <router-link to="/watcheffect">WatchEffect</router-link>
      <router-link to="/keepalive">KeepAlive</router-link>
      <router-link to="/firstplugin">FirstPluginPage</router-link>        
      <router-link to="/infinityscroll-post">InfinityScrollPage</router-link>  
  <router-view v-slot="{ Component,route }" >
    <Transition
    :enter-active-class="route.meta.enterClass"
    :leave-active-class="route.meta.leaveClass">
    <!-- name="fade" mode="out-in" -->
    <component :is="Component" />
    </Transition>
  </router-view>
  <NotiHandler/>
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
