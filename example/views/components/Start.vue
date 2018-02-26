<template>
<div class="components-box">

        <div class="components-title">安装</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">NPM 安装</h2>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>可以使用以下命令来进行安装</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="js">
    npm install dyui --save
    </code>
</pre>

<div class="components-content">
    <h2 class="h2">引入 dyui</h2>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>在入口文件处添加</p>
    </div>
</div>

<pre v-highlightjs class="start">
    <code class="js">
    import Vue from 'vue'
    import App from './App.vue'

    // 需要注意的是
    // 如果 iconfont（字体图标） 是使用 class 来指定对应图标，则需要在入口处手动的引入对应的 iconfont css 文件，像下面这样
    // import "../src/styles/iconfont/iconfont.css"

    // ==> 如果是使用 type 来指定对应图标的话，则不需要多载入一个 css 文件

    import dyui from 'dyui'
    Vue.use(dyui)

    new Vue({
        el: '#app',
        render: h => h(App)
    })
    </code>
</pre>

<div class="components-code">
    <div class="code-title">这样便完成了安装，可以在项目当中使用 <code>dyui</code> 了</div>
</div>

                </li>
            </ul>
        </div>
        
<!-- 测试用 div -->
<div style="height:800px;"></div>

</div>
</template>

<style lang="scss">
.start .hljs-comment {
    font-style: normal;
    font-size: 12px;
}

.components-code code {
    color: #129CFF;
}
</style>
