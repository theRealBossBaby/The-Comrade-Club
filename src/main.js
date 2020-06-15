import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { store } from "./store/store"

//from npm
//added animate.css
//added vue2 animate

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store : store,
  render: h => h(App)
}).$mount('#app')
