<template>
  <p v-font-size:small>Small</p>
    <p v-font-size:medium>Small</p>

    <p v-font-size:large>Small</p>
    <my-header>
      <template #title>
          This is First Plugins
        </template>
    </my-header>  
</template>

<script>

export default {

  
}
</script>

<style>
/* GLobal css becaz you use global component  */
html,body{
  font-size: 1.2em;
  background: #f2f2f2;
}


</style>