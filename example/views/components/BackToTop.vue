<template>
<div class="components-box">

        <div class="components-title">BackToTop 回到顶部</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">BackToTop 回到顶部</h2>
    </div>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>back-to-top</code> 组件即可，<code>click</code> 事件已经封装在内部</p>
        <p>按钮内部显示内容可以自行定义，这里使用的是 <code>Icon</code> 组件</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;back-to-top&gt;
            &lt;dy-icon size="14" type="&amp;#xe62d;"&gt;&lt;/dy-icon&gt;
        &lt;/back-to-top&gt;

    &lt;/template&gt;

    &lt;script&gt;

        export default {
            // ...
        }

    &lt;/script&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        

<!-- 测试用 div -->
<div style="height:500px;"></div>


</div>
</template>

<script>
	export default {
		methods: {
            closeHandle() {
                alert(`123`)
            }
        }
	};
</script>

<style lang="scss">
.dy-close {
    margin-left: 25px;

    &:first-child {
        margin-left: 0;
    }
}
</style>


