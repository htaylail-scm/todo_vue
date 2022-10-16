import Vue from "vue";
import App from "./App.vue";
import Notifications from "vue-notification";
import "./assets/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(Notifications)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
