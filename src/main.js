import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './routes.js'
import store from './store'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetifyOptions = {}
Vue.use(Vuetify)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify(vuetifyOptions),
    render: h => h(App)
  })
})