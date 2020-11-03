import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import env from "./env"

const mock = true;
if (mock) {
  require("./mock/api");
}

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
