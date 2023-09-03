<template>
  <div class="scrollPage">    
  <div class="scrolling-component" ref="scrollComponent">
    <PostComponent v-for="(post,index) in posts" :post="post" :key="index"/>
    </div>  
  </div>
</template>

<script>
import PostComponent from '../components/InfinityScroll/PostComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import getPosts from '../components/InfinityScroll/getPosts'
export default {
  components: { PostComponent },
  setup() {
    const posts = ref(getPosts(10))        
    const scrollComponent = ref(null)
    const loadMorePosts = () => {
      let newPosts = getPosts(10)      
      posts.value.push(...newPosts)
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })

    const handleScroll = (e) => {
      let element = scrollComponent.value
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        loadMorePosts()
      }
    }
    return {      
      posts, handleScroll , scrollComponent, loadMorePosts
    }
}  


}
</script>

<style scoped>
.scrollPage{
  background-color: #41B883;

}

</style>