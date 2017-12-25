<template>
<div class="components-box">

        <div class="components-title">Pagination 分页</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">Pagination 分页</h2>
    <dy-pagination :total="100" v-model="pages01"></dy-pagination>
</div>

<!-- <div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用的是基于阿里巴巴的矢量图标库</p>
        <p><code>size</code> -- 指定图标大小</p>
        <p><code>type</code> -- 指定图标类型</p>
    </div>
</div> -->

<!-- <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-icon size="36" type="&amp;#xe6b2;"&gt;&lt;/dy-icon&gt;

    &lt;/template&gt;
    </code>
</pre> -->


                </li>
            </ul>
        </div>
        



</div>
</template>

<script>
	export default {
		data() {
			return {
                pages01: 2
			}
		}
	};
</script>

<style lang="scss">
.components-box .components-wrapper ul li {
    padding: 0;
    border-top: none;
}
</style>


