import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import utils from './utils/index'

Vue.use(utils)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
