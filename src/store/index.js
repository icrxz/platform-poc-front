import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Offers from './modules/offers';
import Login from './modules/login'

const store = new Vuex.Store({
  modules: {
    Offers: Offers,
    Login: Login
  }
});

export default store;