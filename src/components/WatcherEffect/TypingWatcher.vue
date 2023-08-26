<template>
  <div>
    <h2>Vue watchEffect Tutorial</h2>
    <textarea v-model="textContent"></textarea>
    <p v-if="isTyping" >Zayar is typing...</p>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup() {
    const textContent = ref("");
    const isTyping = ref(false);
    const stop=watchEffect((onInvalidate) => {
      if (textContent.value.length > 0) {
        isTyping.value = true;

        if (textContent.value.length > 10) {
          stop();
                  //  watchEffect will be called every time the value of textContent changes util unmounted.
          //but if you want to stop sooner
          // watchEffect return stop function so I set a stop variable to call stop function.
          //notice when you stop watchEffect ,it will stop and never run again when text content change is back to 10 
        }

// 
        const showTypingstatus=setTimeout(() => {
          isTyping.value = false;
        }, 2000);
        onInvalidate(() => {
          clearInterval(showTypingstatus);
        })
        
      }
    })
    return {
      textContent,
      isTyping
    }
  }
}
</script>

<style>

</style>