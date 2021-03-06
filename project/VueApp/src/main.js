// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store/index";
import router from "./router";
import "es6-promise/auto";
import ApiService from "./common/api.service";

Vue.config.productionTip = false;
ApiService.init();
Vue.prototype.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  store,
  template: "<App/>"
});
