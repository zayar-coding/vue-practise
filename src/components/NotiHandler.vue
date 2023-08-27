<template>
  <div class="root">
    <button @click="isOpen=true">Open</button>
    <teleport to="body">
    <div class="modal" v-if="isOpen">
      <ModelContent 
      @close="isOpen=false"
      title="Test" msg="doesn't it work?"/>
    </div>
    </teleport>
  </div>
</template>

<script setup>
import { ref, Teleport } from "vue";
import ModelContent from "./modelContent.vue";

const isOpen=ref(false)
</script>

<style scoped>
.root{
  position: relative;
}

.modal{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.1);
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal>div{
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  width: 300px;
  height: 300px;
  
  
}


</style>