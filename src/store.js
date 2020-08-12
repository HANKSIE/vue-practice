import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLock: false,
  },
  mutations: {
    lock: function(state) {
      state.isLock = true;
    },
    unlock: function(state) {
      state.isLock = false;
    },
  },
});

export default store;
