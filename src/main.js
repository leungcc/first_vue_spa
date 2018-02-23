// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/validate'

import 'bootstrap/dist/css/bootstrap.css'
//import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import i18n from './i18n'
import './element-ui'
/* -- 全局组件 --*/
import modal from './components/views/modal'
import xcselect from './components/views/select'
/* -- --*/

Vue.config.productionTip = false

// 注册全局组件
Vue.component('modal', modal);
Vue.component('xcselect', xcselect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  mounted() {
    document.addEventListener('click', event => {
      console.log("in $root component's mounted   [document.click]");
      this.$root.eventBus.$emit('document.click', event);
    });
  },
  data() {
    return {
      eventBus: new Vue({})
    }
  }
})

console.log(process.env)
