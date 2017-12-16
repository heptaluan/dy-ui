import Vue from "vue";
import router from "./router";
import App from "./App.vue";

import dyui from "../src/index";
import "../src/styles/index.scss";

// 组件页面的样式入口
import "./styles/index.scss";

// highlight.js 在使用了 vue-route 的情况下，在 route 改变时，页面将会重新渲染并且会移除事件，会把 highlight 的事件移除
// 解决方案是，使用 Vue.js 的自定义指令
import VueHighlightJS from "vue-highlightjs"

Vue.config.productionTip = false
Vue.use(dyui);
Vue.use(VueHighlightJS)

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
})
