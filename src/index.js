import Vue from "vue";
import App from "./app.vue";
// import vuetify from "./plugins/vuetify"; // path to vuetify export
// import axios from "axios";
// import VueAxios from "vue-axios";
import UUID from "vue-uuid";

import "./font-awesome";
import "./styles/reset/all.scss";

import router from "./router/router";
import store from "./store/store";
import http from "./http";
import tip from "./tip";

Vue.config.productionTip = false;

// Vue.use(VueAxios, axios);
Vue.use(UUID);
Vue.use(http);
Vue.use(tip);
// Vue.prototype.$http = http;

new Vue({
  el: "#app",
  router,
  store,
  // vuetify,
  data: {},
  components: { App },
  template: `<App/>`,
});
