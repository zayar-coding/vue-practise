<template>
  <div>
    <input type="text" placeholder="Enter your Message" />
    <input type="button" value="Send" />
  </div>
</template>
<script>
import { onMounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('Contact has been mounted')
    })
  }
}
</script>
