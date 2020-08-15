import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost/api/",
  timeout: 1000,
  withCredentials: true,
});

export default instance;
