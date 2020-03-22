import Vue from 'vue'
import App from './App.vue'
import VueTimeago from 'vue-timeago'

import '../node_modules/@stackoverflow/stacks/dist/css/stacks.min.css'

Vue.config.productionTip = false

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
