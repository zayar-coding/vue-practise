<template>
  <div class="modal">
    <div class="modal-box">
    <h2>{{ item.name == 'New item' ? 'Add' : 'Edit' }} item</h2>  
    <div class="model-footer">
      <input type="text" v-model="itemName.name" />
      <div>
      
      <button class="btn" @click="closeModal">Cancel</button>
      <button class="btn" @click="saveItem">Save</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const itemName=reactive({id:'',name:''})
const item = computed(() => store.state.modal.item);

function saveItem() {
  if (item.value.name == 'New item') {    
    itemName.id = Math.random();
    store.commit("addItem", itemName); 
    store.commit("closeModal");
  } else {    
    itemName.id = item.value.id;
    store.commit("updateItem", itemName);
    store.commit("closeModal");
  
  }
}

function closeModal() {
  store.commit("closeModal");
}


</script>

<style scoped>

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
.modal-box{

}
.model-footer input{
  width: 88%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #242424;
  border-radius: 5px;
}
.model-footer >div{  
  display: flex;
  justify-content: flex-end;
}
.modal>div{
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  width: 300px;
  height: 300px;
}
.btn{
  border: 1px solid #242424 !important;  
  padding: 10px;
  margin-right: 5px;
}
.btn:hover{
  background: #242424;
  color: #fff;
}
</style>