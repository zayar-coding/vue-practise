<!-- VirtualList + InifiniteScroll using Vueuse  -->
<!-- eslint-disable -->
<script setup>
import { ref } from 'vue';
import { useVirtualList,useInfiniteScroll } from '@vueuse/core';


const data = ref(Array.from(Array(50).keys(), () => 'Lorem ipsum'));

const { list, containerProps, wrapperProps } = useVirtualList(data, {
  //Keep `itemHeight` in sync with the item's row
  itemHeight: 96,
  /*
  96 is not the actual height of the row, but the height of the row + margin eg. 80 + 16
   overscan:5
   overscan is the number of items to render before and after the visible items but default is 5
  */
})



/*list contains the items to be rendered on the screen
containerProps contains ref for container element and inline style,onScroll event handler
wrapperProps contains style for our wrapper(like margin + height )

 There are three level in virtual list container,wrapper and list
wrapper do many things like setting the height of the container and margin of the list
*/
useInfiniteScroll(
  containerProps.ref,
  () => {
    data.value.push(...Array.from(Array(10).keys(), () => 'More lorem ipsum'))
  },
  { distance: 10 }//in pixels
)
</script>
<template>
  <div v-bind="containerProps" class="h-screen p-2 rounded">
    <div v-bind="wrapperProps" class="max-w-sm mx-auto">
      <div v-for="{index, data} in list" :key="index"
        class="rounded-lg h-80 flex flex-col px-4 justify-center bg-neutral-800 mb-4 border-neutral-600"
      >
      <p class="mb-2 text-2xl">Item #{{ index }}</p>  
      <p class="text-sm">Item #{{ data }}</p>  
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable-next-line vue/component-tags-order -->
<style scoped>

.mb-2{
  margin-bottom: 0.5rem;
}
.text-2xl{
  font-size: 1.5rem;
}
.text-sm{
  font-size: 0.875rem;
}
.h-screen{
  height: 100vh;
}
.max-w-sm{
  max-width: 640px;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.p-2{
  padding: 0.5rem;
}
.rounded{
  border-radius: 0.375rem;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.h-80{
  height: 80px;
}
.flex{
  display: flex;
}
.flex-col{
  flex-direction: column;
}
 .px-4{
  padding-left: 1rem;
  padding-right: 1rem;
 } 
 .justify-center{
  justify-content: center;
 }
.bg-neutral-800{
  background-color: #2D3748;
} 
.mb-4{
  margin-bottom: 1rem;
}
  .border-neutral-600{
  border-color: #4A5568;
  }
  p{
  color: #eee;
  margin: 0;
  }
</style>

