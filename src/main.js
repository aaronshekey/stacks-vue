import Vue from 'vue'
import App from './App.vue'

import '../node_modules/@stackoverflow/stacks/dist/css/stacks.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
