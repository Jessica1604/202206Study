import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './kRouter'
import store from './store'
import create from './until/create'

Vue.config.productionTip = false
Vue.use(create)

// Vue.prototype.$create = create

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
