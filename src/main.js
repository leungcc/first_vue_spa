// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
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
