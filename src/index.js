import Vue from "vue";
import App from "./app.vue";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify"; // path to vuetify export

import router from "./router";
import "./styles/reset/all.scss";

Vue.use(Vuex);

new Vue({
  el: "#app",
  router,
  vuetify,
  data: {},
  components: { App },
  template: `<App/>`,
});
