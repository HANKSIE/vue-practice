import Vue from "vue";
import axios from "axios";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: "http://localhost/BJ/api/",
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.request.use(
  function(config) {
    const token = "csrf_test_name";
    const hash = getCookie("csrf_cookie_name");
    // //送出請求前添加ci_csrf_token
    if (config.method === "post") {
      config.data.append(token, hash);
    }
    if (config.method === "get") {
      config.params[token] = hash;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     return Promise.reject(error);
//   });

const install = () => {
  Vue.prototype.$http = instance;
};

export default install;

export { instance };
