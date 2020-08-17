import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../pages/404.vue";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Contact from "../pages/contact.vue";
import Login from "../pages/login.vue";
import Register from "../pages/register.vue";
import User from "../pages/user/user.vue";
import Forgot from "../pages/forgot.vue";
import Profile from "../pages/user/profile.vue";
import Store from "../pages/store.vue";

import store from "../store/store";
import { Toast } from "../tip";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgot", component: Forgot },
    {
      path: "/user/:id",
      component: User,
      meta: {
        requireAuth: true,
      },
      children: [
        {
          path: "profile",
          component: Profile,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
    {
      path: "/about",
      component: About,
      meta: { requireAuth: true, keepAlive: true },
    },
    { path: "/contact", component: Contact },
    { path: "/store", component: Store, meta: { requireAuth: true } },
    { path: "*", component: NotFound },
  ],
});

router.beforeEach(async (to, from, next) => {
  //每個路由跳轉前都檢查權限
  await store.dispatch("authCheck");

  //需要權限卻沒有權限
  if (to.meta.requireAuth && store.state.auth === null) {
    Toast.launch({ message: "您沒有權限存取該頁面, 請先登入" });
    next({ path: "/login" });
  } //已登入卻跳到登入畫面
  else if (to.path === "/login" && store.state.auth !== null) {
    next(from); //導回前一頁
  } else {
    next();
  }
});

export default router;
