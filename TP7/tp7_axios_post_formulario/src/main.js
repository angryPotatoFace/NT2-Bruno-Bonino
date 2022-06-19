import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import 'axios'
import VueForm from 'vue-form';
import { router } from './router'

Vue.config.productionTip = false;

const options = {
  validators: {
    "no-espacios": function(value) {
      return !value.includes(" ");
    },
    "no-numero": function(value) {
      const regex = /\d/g;
      return !regex.test(value);
    },
  }
}

Vue.use(VueForm,options);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')