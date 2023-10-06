
<template>
  <ul>

    <ol v-for="item in items" :key="item" class="item-list">
      <p>{{ item.name }}</p>
      <div>
      <button class="btn" @click="removeItem(item)">Remove</button>
      <button class="btn" @click="editItem(item)">Edit</button>
      </div>
    </ol>
    <ol v-if="!items.length" class="item-notfound">No items to show</ol>
  </ul>

  <button class="btn" @click="addItem">Add item</button>

  <Model v-if="modal.isOpen" :item="modal.item" @close="closeModal" />
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Model from "./ModelBox.vue";

const store = useStore();
const items = computed(() => store.state.items);
const modal = computed(() => store.state.modal);


function addItem() {
  const item = {
    id: Math.random(),
    name: "New item",
  };
  store.commit("openModal", item);
}

function removeItem(item) {
  store.commit("removeItem", item);
}

function editItem(item) {
  store.commit("openModal", item);
}

function closeModal() {
  store.commit("closeModal");
}

</script>

<style scoped>

.btn{
  border: 1px solid #242424 !important;  
  padding: 10px;
  margin-right: 5px;
}
.btn:hover{
  background: #242424;
  color: #fff;
}
.item-notfound{
  background: #D1E7DD;
  font-size: 0.8em;
}
.item-list{
  border: 1px solid #636262;
    border-left: 20px solid green;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>