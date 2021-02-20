import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/tailwind.css';

// axios.defaults.baseURL = 'https://api.dapurtech.com/api';

// dummy API
// axios.defaults.baseURL = 'https://dummyapi.io/data/api/';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
