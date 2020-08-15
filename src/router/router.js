import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../pages/404.vue";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Contact from "../pages/contact.vue";
import Login from "../pages/user/login.vue";
import Forgot from "../pages/user/forgot.vue";

import store from "../store/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/forgot", component: Forgot },
    { path: "/about", component: About, meta: { requireAuth: true } },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound },
  ],
});

router.beforeEach((to, from, next) => {
  //需要權限卻沒有權限
  if (to.meta.requireAuth && !store.state.auth) {
    Vue.$toast.launch({ message: "您沒有權限存取該頁面, 請先登入" });
    next({ path: "login" });
  } else {
    next();
  }
});

export default router;
