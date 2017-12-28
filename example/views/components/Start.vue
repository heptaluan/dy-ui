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

<pre v-highlightjs>
    <code class="js">
    import Vue from 'vue'
    import App from './App.vue'

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
<div style="height:500px;"></div>




</div>
</template>

