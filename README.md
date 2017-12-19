### dy-ui

一个使用 `vue` 构建的 `ui` 组件库

基于 `vue-cli` + `webpack` + `sass`

开发进行中

预览地址：[中文文档地址](https://hanekaoru.github.io)

----

相关参考：

[amazeui](https://github.com/amazeui/amazeui)

[iview](https://github.com/iview/iview)

[element-ui](https://github.com/ElemeFE/element)

> 没有经过严格测试，可能存在未知 BUG，请勿使用于生产环境


----

----

目录结构为：

```js
└── src              
    ├── components        组件所在目录
    │    ├── Button
    │    └── ...
    ├── mixins            组件依赖的 mixins
    ├── utils             工具
    ├── styles            
    │    ├── components   组件对应样式表
    │    ├── iconfont     字体图标（基于阿里图标库）
    │    ├── mixins       sass 的 mixins 集合
    │    └── ...
    ├── App.vue           组件预览页面
    ├── index.js          组件根目录（分发处）
    ├── main.js           程序主入口
    └── ...
```

----


### Use

```js
npm install
```

然后运行

```js
npm run dev
```

访问 `localhost:8080`
