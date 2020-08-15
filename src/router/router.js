import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../pages/404.vue";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Contact from "../pages/contact.vue";
import Login from "../pages/user/login.vue";
import Forgot from "../pages/user/forgot.vue";

import store from "../store/store";
import { Toast } from "../tip";
import { instance as http } from "../http";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/forgot", component: Forgot },
    {
      path: "/about",
      component: About,
      meta: { requireAuth: true, keepAlive: true },
    },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound },
  ],
});

router.beforeEach(async (to, from, next) => {
  //每個路由跳轉前都檢查權限
  const auth = await http({
    method: "post",
    url: "authcheck",
    data: new FormData(),
  });

  try {
    if (auth.data.auth !== null) {
      store.commit({ type: "login", auth: auth.data.auth });
    } else {
      store.commit("logout");
    }
  } catch (err) {
    console.error(err);
    Toast.launch({
      message: "權限確認失敗",
      type: "error",
    });
  }

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
