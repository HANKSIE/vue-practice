import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "./pages/404.vue";
import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import Contact from "./pages/contact.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "*", component: NotFound },
  ],
});

export default router;
