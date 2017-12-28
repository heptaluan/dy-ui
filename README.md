## dy-ui

A UI components Library with Vue.js

> there may be bugs, don't use it in production environment

## GitHub

[https://github.com/hanekaoru/dy-ui](https://github.com/hanekaoru/dy-ui)

## Demo

[dy-ui](https://hanekaoru.github.io)

## NPM

[![npm](https://img.shields.io/badge/npm-v0.2.5-blue.svg)](https://www.npmjs.com/package/dyui)

## Support

Support Vue.js 2.0+

Not support Vue.js 1.x

## Install

```js
npm install dyui --save
```

## Usage

```js
import Vue from "vue";
import router from "./router";
import App from "./App.vue";

// import and use
import dyui from "../src/index";
Vue.use(dyui);

Vue.config.productionTip = false

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
})

```

## Releated Projects

Thanks to

[amazeui](https://github.com/amazeui/amazeui)

[iview](https://github.com/iview/iview)

[element-ui](https://github.com/ElemeFE/element)
