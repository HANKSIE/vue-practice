import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLock: false,
    isOverlay: false,
    toastQueue: [
      // { type: "", message: "normal", close: true },
      { type: "info", message: "info", close: true },
      { type: "success", message: "success", close: true },
      { type: "warn", message: "warn", close: true },
      { type: "error", message: "error, and it can be close", close: true },
    ],
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
    pushToToastQueue: function(state, payload) {
      state.toastQueue.push(payload);
    },
    removeFromToastQueue: function(state, payload) {
      state.toastQueue = state.toastQueue.filter((instance) => {
        return instance !== payload.instance;
      });
    },
  },
});

export default store;
