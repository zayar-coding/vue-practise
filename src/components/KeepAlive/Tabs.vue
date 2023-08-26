<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="component = tab">
      {{ tab }}
    </button>
    <keep-alive>
    <component :is="component" />
  </keep-alive>

    <!-- <component :is="component" /> -->
  </div>
</template>
<script>
import About from "./About.vue";
import Contact from "./Content.vue";
export default {
  components: { About, Contact },
  data() {
    return {
      tabs: ["About", "Contact"],
      component: "About"
    }
  }
}
</script>
