// store.js
import { createStore } from "vuex";

const store = createStore({
  state: {
    items: [],
    modal: {
      isOpen: false,
      item: null,
    },
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    removeItem(state, item) {
      state.items = state.items.filter((i) => i !== item);
    },
    updateItem(state, item) {
      const index = state.items.findIndex((i) => i.id === item.id);
      state.items[index] = item;
    },
    openModal(state, item) {
      state.modal.isOpen = true;
      state.modal.item = item;
    },
    closeModal(state) {
      state.modal.isOpen = false;
      state.modal.item = null;
    },
  },
});

export default store;
