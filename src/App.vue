<script>
import TabsVue from './components/KeepAlive/Tabs.vue'
import TypingWatcher from './components/WatcherEffect/TypingWatcher.vue'

export default {
  components:{ TabsVue, TypingWatcher },
  setup() {
    
  }
}



  </script>

<template>
  <div>
    <h2>Keep Alive</h2>
  <TabsVue/>
  </div>
  <div>
  <typing-watcher/>
  </div>
</template>

<style scoped>

</style>
