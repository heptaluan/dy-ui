### dy-ui

一个使用 `vue` 构建的 `ui` 组件库

基于 `vue-cli` + `webpack` + `sass`

预览地址：[中文文档地址](https://hanekaoru.github.io)

----

参考：

[amazeui](https://github.com/amazeui/amazeui)

[iview](https://github.com/iview/iview)

[element-ui](https://github.com/ElemeFE/element)

> 没有经过严格测试，可能存在未知 BUG，请勿使用于生产环境


----

----

目录结构为：

```js
├── build                 webpack 运行脚本
├── config                目录配置
├── example               预览地址，文档所在目录
│    ├── styles           文档 sass 文件
│    │   └── ...   
│    ├── views            文档中的各个组件的 API 介绍页面
│    │   ├── components
│    │   └── ...
│    ├── App.vue          文档主入口，路由根目录
│    ├── index.html       挂载页面
│    ├── index.js         文档主入口
│    └── router.js        路由配置文件
│
└── src              
    ├── components        组件所在目录
    │    ├── Button
    │    └── ...
    ├── mixins            mixins
    ├── utils             工具
    ├── styles            
    │    ├── components   组件对应样式表
    │    ├── iconfont     字体图标（基于阿里图标库）
    │    ├── mixins       sass 的 mixins 集合
    │    └── ...
    ├── index.js          组件入口
    └── ...
```