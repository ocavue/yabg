import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueMDCButton from 'vue-mdc-adapter/dist/button'
import VueMDCDrawer from 'vue-mdc-adapter/dist/drawer'
import VueMDCToolbar from 'vue-mdc-adapter/dist/toolbar'
import VueMDCLayoutApp from 'vue-mdc-adapter/dist/layout-app'
import VueMDCCard from 'vue-mdc-adapter/dist/card'

Vue.use(VueMDCButton)
Vue.use(VueMDCDrawer)
Vue.use(VueMDCToolbar)
Vue.use(VueMDCLayoutApp)
Vue.use(VueMDCCard)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
