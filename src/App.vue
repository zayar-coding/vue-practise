<script>
import TabsVue from './components/KeepAlive/Tabs.vue'
import MyHeader from './components/myHeader.vue'
import TypingWatcher from './components/WatcherEffect/TypingWatcher.vue'

export default {
  components:{ TabsVue, TypingWatcher, MyHeader },
  setup() {
    
  }
}



  </script>

<template>
  <router-link to="/" class="r-link">Home</router-link>
  <router-link to="/watcheffect" class="r-link">WatchEffect</router-link>
  <router-link to="/keepalive" class="r-link">KeepAlive</router-link>
  <router-link to="/firstplugin" class="r-link">FirstPluginPage</router-link>
  
  <router-view></router-view>
</template>

<style scoped>
  .r-link{
    padding-right: 10px;
  }
</style>
