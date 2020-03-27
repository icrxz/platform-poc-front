import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeIndex from './components/home/index.vue'
import OfferIndex from './components/offer/index.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: HomeIndex},
    {path: '/offer/:id', component: OfferIndex}
  ]
});

export default router;