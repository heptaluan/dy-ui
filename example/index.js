import Vue from 'vue';
import router from './router';
import App from "./App.vue";

import dyui from "../src/index";
import "../src/styles/index.scss";

// 组件页面的样式入口
import "./styles/index.scss";

Vue.config.productionTip = false
Vue.use(dyui);

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
