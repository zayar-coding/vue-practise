<script setup>

import NotiHandler from './components/NotiHandler.vue';



</script>
<template>    
      <router-link to="/watcheffect" class="r-link">WatchEffect</router-link>
      <router-link to="/keepalive" class="r-link">KeepAlive</router-link>
      <router-link to="/firstplugin" class="r-link">FirstPluginPage</router-link>  
      
  <router-view></router-view>
  <NotiHandler/>
</template>

<style scoped>
  .r-link{
    padding-right: 10px;
  }
</style>
