<template>
  <!-- Method -1 Using useAutoAnimate -->
  <!-- <div ref="wrapperEl"  class="p-8 rounded-lg bg-neutral-900">
    <h2 @click="isOpen=!isOpen" class="text-xl font-bold">Why you should learn Vue js</h2>
    <p v-if="isOpen" class="py-8">Becaz It is easy to understand and implementation</p>
  </div> -->
  <!-- Method-2 using v-auto-animate directive -->
  <div v-auto-animate ref="wrapperEl"  class="p-8 rounded-lg bg-neutral-900 main">
      <h2 @click="isOpen = !isOpen" class="text-xl font-bold pointer">Why you should learn Vue js</h2>
      <p v-if="isOpen" class="py-8">Becaz It is easy to understand and implementation</p>
    </div>

</template>

<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'
// import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { ref } from 'vue'

const isOpen = ref(false);
// const [wrapperEl] = useAutoAnimate();

// you can also pass options to the useAutoAnimate hook eg v-auto-animate={duration: 1000}


</script>

<style scoped>
.p-8{
  padding: 2rem;
}
.main{
  margin-top: 20px;
  
}
.pointer{
  cursor: pointer;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.py-8{
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.bg-neutral-900{
  background-color: #1f2937;
}
.font-bold{
  font-weight: 700;
}
.text-xl{
  font-size: 1.25rem;
  }
  h2,p{
    margin: 0;
    color: #eee;
  }
</style>