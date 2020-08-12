import Vue from "vue";
import App from "./app.vue";
import vuetify from "./plugins/vuetify"; // path to vuetify export

import "./font-awesome";
import "./styles/reset/all.scss";

import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  data: {},
  components: { App },
  template: `<App/>`,
});
