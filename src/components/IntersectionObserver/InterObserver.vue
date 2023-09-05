<template>
  <main>
    <article>
      <h1>My Article</h1>
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index">{{ header }}</h2>
        <!-- :id is very important becaz this is how we create internal page link to different parts of our article -->
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur perferendis illum tempora? Accusamus
          dignissimos sed sapiente odio reprehenderit voluptates harum. Temporibus mollitia magni at dolor provident
          molestiae nesciunt sit iste architecto suscipit porro esse velit, minima nobis doloribus eveniet? Vero placeat
          harum cum sapiente perspiciatis quas quis praesentium cumque quisquam natus a tenetur aliquid, explicabo aperiam
          eius quia enim velit dicta numquam ea! Eum, aut itaque distinctio laboriosam quisquam ipsam, iste perferendis
          excepturi ullam, perspiciatis hic modi corrupti sunt odio ipsa aliquam fuga? Quos, ratione quibusdam! Fugiat
          nulla sed sapiente, tenetur hic dicta rerum velit nostrum, laboriosam blanditiis aliquam quibusdam.
        </p>
      </section>
    </article>
    <aside>
      <div>
        {{ currentSection }}
        <a v-for="(header, index) in headers" :key="header" :href="`#${index}`" :class="{active:index==currentSection}">
          <!-- This index will be link with article -->
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue"

const headers = [
  'Section 1',
  'Section 2',
  'How this works',
  'Placeholder',
  'Section 5',
]
const currentSection = ref('')
onMounted(() => {
  const oberser = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentSection.value = entry.target.getAttribute('id')// id is index  of section 
      }
    })
  }, {
    rootMargin:'0px 0px -90% 0px'
  }
  )
  document.querySelectorAll('article h2').forEach((section) => {
    oberser.observe(section)
  })
})


</script >

<style scoped>
main{
  margin-top:20px;
  display: flex;
}
article{
 width:75%;
 margin-bottom: 500px;
}
aside{
  width:25%;
}
h2,p{
text-align: justify;
}

aside > div{
  position: sticky;
  top: 20px;
  padding-left: 2em;
}
aside > div > a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  border-left: 1px solid #ccc ;
}
aside a.active{
  font-weight: bold;
  border-color: #111;
}
</style>