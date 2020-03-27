import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Offers from './modules/offers';

const store = new Vuex.Store({
  modules: {
    Offers: Offers
  }
});

export default store;