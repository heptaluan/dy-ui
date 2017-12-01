### dy-ui

基于 `vue` 构建的一个 `ui` 组件库

开发进行中


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