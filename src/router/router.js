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

//當頁面重載/第一次進入頁面時，先確認&設定是否登入，再設定路由守衛
http({
  method: "post",
  url: "authcheck",
  data: new FormData(),
})
  .then((res) => {
    if (res.data.auth) {
      store.commit("login");
    }
    setGuard();
  })
  .catch((err) => {
    setGuard();
    console.error(err);
    Toast.launch({
      message: "權限確認失敗",
      type: "error",
    });
  });

//設置路由守衛
function setGuard() {
  router.beforeEach((to, from, next) => {
    //需要權限卻沒有權限
    if (to.meta.requireAuth && !store.state.auth) {
      Toast.launch({ message: "您沒有權限存取該頁面, 請先登入" });
      next({ path: "/login" });
    } //已登入卻跳到登入畫面
    else if (to.path === "/login" && store.state.auth) {
      next(from); //導回前一頁
    } else {
      next();
    }
  });
}

export default router;
