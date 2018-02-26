<template>
<div class="components-box">

        <div class="components-title">Icon 图标</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">Icon 图标（指定 type）</h2>
    <dy-icon size="36" type="&#xe6b2;"></dy-icon>
    <dy-icon size="36" type="&#xe6af;"></dy-icon>
    <dy-icon size="36" type="&#xe6ae;"></dy-icon>
    <dy-icon size="36" type="&#xe6ac;"></dy-icon>
    <dy-icon size="36" type="&#xe6ab;"></dy-icon>
    <dy-icon size="36" type="&#xe6a4;"></dy-icon>
    <dy-icon size="36" type="&#xe69d;"></dy-icon>
    <dy-icon size="36" type="&#xe69c;"></dy-icon>
    <dy-icon size="36" type="&#xe631;"></dy-icon>
    <dy-icon size="36" type="&#xe6a0;"></dy-icon>
</div>

<div class="components-content">
    <dy-icon size="36" type="&#xe62f;"></dy-icon>
    <dy-icon size="36" type="&#xe62e;"></dy-icon>
    <dy-icon size="36" type="&#xe62d;"></dy-icon>
    <dy-icon size="36" type="&#xe62d;"></dy-icon>
    <dy-icon size="36" type="&#xe62c;"></dy-icon>
    <dy-icon size="36" type="&#xe629;"></dy-icon>
    <dy-icon size="36" type="&#xe628;"></dy-icon>
    <dy-icon size="36" type="&#xe627;"></dy-icon>
    <dy-icon size="36" type="&#xe631;"></dy-icon>
    <dy-icon size="36" type="&#xe625;"></dy-icon>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用的是基于阿里巴巴的矢量图标库</p>
        <p>有两种使用方式，一种为指定对应的 <code>type</code> 类型，另一种为指定对应图标的 <code>class</code></p>
        <p>需要注意的是：如果使用的 <code>class</code>，则需要在入口处手动的引入对应的 <code>css</code> 文件，例如 <code>import "../src/styles/iconfont/iconfont.css";</code></p>

        <br>
        <p>参数设置如下：</p>
        <p><code>size</code> -- 指定图标大小，默认大小为 <code>14</code></p>
        <p><code>type</code> -- 指定图标类型</p>
        <p><code>class</code> -- 指定对应图标的 <code>class</code>，如果使用这个，需要额外载入一个 <code>iconfont.css</code> 文件</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-icon size="36" type="&amp;#xe6b2;"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" type="&amp;#xe6b2;"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" type="&amp;#xe6af;"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" type="&amp;#xe6ae;"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" type="&amp;#xe6ac;"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" type="&amp;#xe6ab;"&gt;&lt;/dy-icon&gt;

    &lt;/template&gt;
    </code>
</pre>

                </li>
                <li>

<div class="components-content">
    <h2 class="h2">Icon 图标（指定 class）</h2>
    <dy-icon size="36" class="icon-suo"></dy-icon>
    <dy-icon size="36" class="icon-survey"></dy-icon>
    <dy-icon size="36" class="icon-smile"></dy-icon>
    <dy-icon size="36" class="icon-refresh"></dy-icon>
    <dy-icon size="36" class="icon-favorite"></dy-icon>
    <dy-icon size="36" class="icon-edit"></dy-icon>
    <dy-icon size="36" class="icon-tishishuoming"></dy-icon>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>指定对应的 <code>class</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-icon size="36" class="icon-suo"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-survey"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-smile"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-refresh"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-favorite"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-edit"&gt;&lt;/dy-icon&gt;
        &lt;dy-icon size="36" class="icon-tishishuoming"&gt;&lt;/dy-icon&gt;

    &lt;/template&gt;
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
		data() {
			return {

			}
		}
	};
</script>

<style lang="scss">
.components-content {
    .iconfont {
        margin-left: 25px;
    }
}

</style>


