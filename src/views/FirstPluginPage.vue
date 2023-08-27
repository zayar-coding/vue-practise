<template>
  
  <p v-font-size:small>Small</p>
    <p v-font-size:medium>Small</p>
  <a :href="githubLink">My Github Link using global mixins</a>
  
    <p v-font-size:large>Small</p>
    <my-header>
      <template #title>
          This is First Plugins
        </template>
    </my-header>   
    <button @click="logout">Logout</button> 
</template>

<script setup>
import { inject } from 'vue'
 const logout = inject('logout');

</script>

<style>
/* GLobal css becaz you use global component  */
html,body{
  font-size: 1.2em;
  background: #f2f2f2;
}


</style>