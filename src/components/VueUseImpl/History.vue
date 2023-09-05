<template>
  <p>
    <button @click="undo">Undo</button>
    <button @click="redo">Redo</button>
  </p>
  <textarea v-model="text"></textarea>
  <ul>
    <li v-for="entry in history"
    :key="entry.timestamp">
    {{ entry }}
    </li>
  </ul>
</template>

<script setup>
import { useRefHistory } from "@vueuse/core";
import { ref } from "vue";
const text =ref("")
const {history,undo,redo } = useRefHistory(text);

</script>

<style scoped>
.button{
  border: none;
  outline: none;
}

</style>