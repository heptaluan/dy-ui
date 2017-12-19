<template>
<div class="components-box">

        <div class="components-title">Close 关闭按钮</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Close 关闭按钮</h2>
        <div>
            <dy-close size="28"></dy-close>
            <dy-close size="20"></dy-close>
            <dy-close></dy-close>
        </div>
    </div>
</div>

<div class="components-content">
    <div class="components-content">
        <h2 class="h2">绑定 Close 点击事件</h2>
        <div>
            <dy-close size="20" @click="closeHandle"></dy-close>
        </div>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用的是基于阿里巴巴的矢量图标库</p>
        <p>默认的图标是没有点击事件的，封装后 <code>close</code> 组件会 <code>$emit</code> 一个 <code>click</code> 事件予以调用</p>
        <p><code>size</code> -- 指定图标大小，默认大小为 <code>10</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-close size="28"&gt;&lt;/dy-close&gt;

        &lt;dy-close size="20"&gt;&lt;/dy-close&gt;

        &lt;dy-close&gt;&lt;/dy-close&gt;

        &lt;dy-close size="20" @click="closeHandle"&gt;&lt;/dy-close&gt;

    &lt;/template&gt;

    &lt;script&gt;

        export default {
            methods: {
                closeHandle() {
                    this.$notify({
                        message: "点击了关闭按钮",
                        delay: 2000,
                        type: "default"
                    });
                }
            }
        }

    &lt;/script&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        





</div>
</template>

<script>
	export default {
		methods: {
            closeHandle() {
                this.$notify({
                    message: "点击了关闭按钮",
                    delay: 2000,
                    type: "default"
                });
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


