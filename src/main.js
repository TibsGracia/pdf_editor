import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import bus from './bus'

Vue.config.productionTip = false
Vue.prototype.$bus = bus;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
