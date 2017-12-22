<template>
<div class="components-box">

        <div class="components-title">DropDown 下拉菜单</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">DropDown 下拉菜单</h2>

    <dy-button v-popover:popover>按钮</dy-button>
    
    <dy-dropdown ref="popover">
        <dy-dropdown-item><a>散文</a></dy-dropdown-item>
        <dy-dropdown-item><a>诗歌</a></dy-dropdown-item>
    </dy-dropdown>

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

			}
		}
	};
</script>

<style lang="scss">

</style>


