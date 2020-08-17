import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation";
import actions from "./action";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLock: false,
    isOverlay: false,
    toastQueue: [
      // { type: "normal", message: "normal", close: true },
      // { type: "info", message: "info", close: true },
      // { type: "success", message: "success", close: true },
      // { type: "warn", message: "warn", close: true },
      // { type: "error", message: "error, and it can be close", close: true },
    ],
    confirm: null,
    auth: null,
  },
  mutations,
  actions,
});

export default store;
