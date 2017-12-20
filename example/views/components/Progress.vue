<template>
<div class="components-box">

        <div class="components-title">Progress 进度条</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Progress 进度条（默认）</h2>
        <dy-progress :progress="70"></dy-progress>
        <dy-progress :progress="30" color="success"></dy-progress>
        <dy-progress :progress="45" color="waring"></dy-progress>
        <dy-progress :progress="40" color="danger"></dy-progress>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p><code>:progress</code> -- 必填项，指定进度条当前的进度</p>
        <p><code>color</code> -- 进度条的样式颜色，默认为 <code>default</code>，可选参数有 <code>success</code>，<code>waring</code>，<code>danger</code></p>
        <p><code>:textInside</code> -- 设定进度条文本内容的显示位置，默认为外部，指定为 <code>true</code> 后文本内容在内部展示</p>
        <p><code>:showProgressText</code> -- 指定是否显示进度条的文本内容，默认是显示的，指定为 <code>false</code> 后文本内容将会被隐藏</p>
        <p><code>:striped</code> -- 指定是否显示进度条的斑马线纹路样式，默认是不显示的，指定为 <code>true</code> 后可以开启</p>
        <p><code>:active</code> -- 指定是否激活斑马线纹路的动画效果，默认是不展示的，指定为 <code>true</code> 后可以开启</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-progress :progress="70"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="30" color="success"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="45" color="waring"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="40" color="danger"&gt;&lt;/dy-progress&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Progress 进度条（文本在内部）</h2>
        <dy-progress :progress="70" :textInside="true"></dy-progress>
        <dy-progress :progress="30" :textInside="true" color="success"></dy-progress>
        <dy-progress :progress="45" :textInside="true" color="waring"></dy-progress>
        <dy-progress :progress="40" :textInside="true" color="danger"></dy-progress>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如果需要文本在进度条内部显示，只需要指定 <code>:textInside</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-progress :progress="70" :textInside="true"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="30" :textInside="true" color="success"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="45" :textInside="true" color="waring"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="40" :textInside="true" color="danger"&gt;&lt;/dy-progress&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Progress 进度条（不显示文本内容）</h2>
        <dy-progress :progress="70" :showProgressText="false" :textInside="true"></dy-progress>
        <dy-progress :progress="30" :showProgressText="false" :textInside="true" color="success"></dy-progress>
        <dy-progress :progress="45" :showProgressText="false" :textInside="true" color="waring"></dy-progress>
        <dy-progress :progress="40" :showProgressText="false" :textInside="true" color="danger"></dy-progress>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如果需要不显示文本内容，只需要指定 <code>:showProgressText</code> 参数为 <code>false</code> 即可，默认是显示的</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-progress :progress="70" :showProgressText="false" :textInside="true"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="30" :showProgressText="false" :textInside="true" color="success"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="45" :showProgressText="false" :textInside="true" color="waring"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="40" :showProgressText="false" :textInside="true" color="danger"&gt;&lt;/dy-progress&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Progress 进度条（斑马线）</h2>
        <dy-progress :progress="70" :striped="true" :showProgressText="false" :textInside="true"></dy-progress>
        <dy-progress :progress="30" :striped="true" :showProgressText="false" :textInside="true" color="success"></dy-progress>
        <dy-progress :progress="45" :striped="true" :showProgressText="false" :textInside="true" color="waring"></dy-progress>
        <dy-progress :progress="40" :striped="true" :showProgressText="false" :textInside="true" color="danger"></dy-progress>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如果需要显示进度条的斑马线样式，只需要指定 <code>:striped</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-progress :progress="70" :striped="true" :showProgressText="false" :textInside="true"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="30" :striped="true" :showProgressText="false" :textInside="true" color="success"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="45" :striped="true" :showProgressText="false" :textInside="true" color="waring"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="40" :striped="true" :showProgressText="false" :textInside="true" color="danger"&gt;&lt;/dy-progress&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Progress 进度条（激活斑马线）</h2>
        <dy-progress :progress="70" :active="true" :striped="true" :showProgressText="false" :textInside="true"></dy-progress>
        <dy-progress :progress="30" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="success"></dy-progress>
        <dy-progress :progress="45" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="waring"></dy-progress>
        <dy-progress :progress="40" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="danger"></dy-progress>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如果需要激活斑马线的动画样式，只需要指定 <code>:active</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-progress :progress="70" :active="true" :striped="true" :showProgressText="false" :textInside="true"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="30" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="success"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="45" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="waring"&gt;&lt;/dy-progress&gt;
        &lt;dy-progress :progress="40" :active="true" :striped="true" :showProgressText="false" :textInside="true" color="danger"&gt;&lt;/dy-progress&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        



</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	};
</script>

<style lang="scss">
.dy-progress {
    margin-bottom: 25px;
}
</style>


