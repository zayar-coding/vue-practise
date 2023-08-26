<template>
  <div>Hello From the About Page!</div>
</template>
<script>
import { onActivated, onDeactivated, onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('About has been mounted')
    });
    onActivated(() => {
      console.log('About has been activated')
    })
    onDeactivated(() => {
      console.log('About has been deactivated')
    })
    
    
  }
}
</script>
