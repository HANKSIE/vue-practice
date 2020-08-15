import Vue from "vue";
import store from "./store/store";

class Toast {
  static launch = (instance) => {
    store.commit({
      type: "pushToToastQueue",
      instance,
    });
  };
  static remove = (instance) => {
    store.commit({
      type: "removeFromToastQueue",
      instance,
    });
  };
}

class Confirm {
  static launch = (instance) => {
    store.commit({
      type: "insertConfirm",
      instance,
    });
  };
  static remove = () => {
    store.commit("removeConfirm");
  };
}

const install = () => {
  Vue.$toast = Toast;
  Vue.$confirm = Confirm;
  Vue.prototype.$toast = Toast;
  Vue.prototype.$confirm = Confirm;
};

export default install;
