import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLock: false,
    isOverlay: false,
  },
  mutations: {
    lock: function(state) {
      state.isLock = true;
    },
    unlock: function(state) {
      state.isLock = false;
    },
    openOverlay: function(state) {
      state.isOverlay = true;
    },
    closeOverlay: function(state) {
      state.isOverlay = false;
    },
  },
});

export default store;
