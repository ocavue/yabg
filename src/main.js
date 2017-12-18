import Vue from 'vue'
import App from './App.vue'
import VueMDCAdapter from 'vue-mdc-adapter'
import router from './router'
// import './theme.scss'

Vue.use(VueMDCAdapter)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
