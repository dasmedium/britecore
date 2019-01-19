import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home.module";
import transaction from "./modules/transaction.module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    transaction
  }
});
