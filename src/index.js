import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import vuetify from './plugins/vuetify' // path to vuetify export
import InputBox from "./components/inputBox";

Vue.use(Vuex);
Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

const notFound = { template: "<div>404,  {{ $route.params }}</div>" };

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
};

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
  { path: "/box", component: InputBox },
  {
    path: "/user/:id",
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: "profile",
        component: {template: '<div>profile</div>'},
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: "posts",
        component: {template: '<div>posts</div>'},
      },
    ],
  },
  { path: "*", component: notFound },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

const vm = new Vue({
  el: "#app",
  router,
  vuetify,
  data: {
    message: "I'm ROOT",
  },
  provide: function() {
    return {
      sayhi: () => {
        console.log("hi! Boss");
      },
      getBossMsg: () => {
        return this.message;
      },
    };
  },
  components: { App },
  template: `<App/>`,
});
