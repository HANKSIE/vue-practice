import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLock: false,
    isOverlay: false,
    toastQueue: [
      { type: "normal", message: "normal", close: true },
      { type: "info", message: "info", close: true },
      { type: "success", message: "success", close: true },
      { type: "warn", message: "warn", close: true },
      { type: "error", message: "error, and it can be close", close: true },
    ],
    confirm: {
      okHandle: () => {
        console.log("ok");
      },
      cancelHandle: () => {
        console.log("cancel");
      },
      message: "confirm",
    },
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
      state.toastQueue.push(payload.instance);
    },
    removeFromToastQueue: function(state, payload) {
      state.toastQueue = state.toastQueue.filter((instance) => {
        return instance !== payload.instance;
      });
    },
    insertConfirm: function(state, payload) {
      state.confir = payload.instance;
    },
    removeConfirm: function(state) {
      state.confirm = null;
    },
  },
});

export default store;
