import Vue from 'vue'
import App from './App.vue'
import VueMDCAdapter from 'vue-mdc-adapter'
// import './theme.scss'

Vue.use(VueMDCAdapter)

new Vue({
  el: '#app',
  render: h => h(App)
})
