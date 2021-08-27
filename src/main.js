import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vant, { Toast } from "vant";
import "vant/lib/index.css";

Vue.use(Vant);
Vue.use(Toast);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
