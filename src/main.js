import Vue from 'vue';
import App from './App';
import dyui from "./index";

import "./styles/index.scss";

Vue.config.productionTip = false
Vue.use(dyui);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
