<template>
<div class="components-box">

        <div class="components-title">Tag 标签</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">Tag 标签</h2>
    <dy-tag>标签一</dy-tag>
    <dy-tag type="success">标签二</dy-tag>
    <dy-tag type="info">标签三</dy-tag>
    <dy-tag type="warning">标签四</dy-tag>
    <dy-tag type="danger">标签五</dy-tag>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-tag</code> 组件包裹标签内容即可</p>

        <br>
        <p><code>type</code> -- 指定标签的主题类型</p>
        <p><code>isRound</code> -- 指定是否为圆角</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-tag&gt;标签一&lt;/dy-tag&gt;
        &lt;dy-tag type="success"&gt;标签二&lt;/dy-tag&gt;
        &lt;dy-tag type="info"&gt;标签三&lt;/dy-tag&gt;
        &lt;dy-tag type="warning"&gt;标签四&lt;/dy-tag&gt;
        &lt;dy-tag type="danger"&gt;标签五&lt;/dy-tag&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>

<div class="components-content">
    <h2 class="h2">Tag 标签（指定圆角）</h2>
    <dy-tag isRound>标签一</dy-tag>
    <dy-tag isRound type="success">标签二</dy-tag>
    <dy-tag isRound type="info">标签三</dy-tag>
    <dy-tag isRound type="warning">标签四</dy-tag>
    <dy-tag isRound type="danger">标签五</dy-tag>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>isRound</code> 参数即可</p>

        <br>
        <p><code>type</code> -- 指定标签的主题类型</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-tag isRound&gt;标签一&lt;/dy-tag&gt;
        &lt;dy-tag isRound type="success"&gt;标签二&lt;/dy-tag&gt;
        &lt;dy-tag isRound type="info"&gt;标签三&lt;/dy-tag&gt;
        &lt;dy-tag isRound type="warning"&gt;标签四&lt;/dy-tag&gt;
        &lt;dy-tag isRound type="danger"&gt;标签五&lt;/dy-tag&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        
<!-- 测试用 div -->
<div style="height:200px;"></div>


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
.components-content {
    .dy-tag {
        margin-left: 15px;
    }
}
</style>


