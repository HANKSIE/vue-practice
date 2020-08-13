import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "./pages/404.vue";
import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";
import Login from "./pages/user/login.vue";
import Forgot from "./pages/user/forgot.vue";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/forgot", component: Forgot },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound },
  ],
});

export default router;
