<template>
  <div>
        <h2>{{ title }}</h2>
            <p>{{ msg }}</p>
            <button @click="$emit('close')">Close</button>
        </div>
</template>

<script setup>
import { defineProps } from 'vue';
// const isOpen = ref(false)
defineProps({
  title: String,
  msg:String
})
defineEmits("close")

</script>

<style>

</style>