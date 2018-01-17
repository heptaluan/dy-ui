<template>
<div class="components-box">

        <div class="components-title">Collapse 折叠菜单</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">Collapse 折叠菜单（默认）</h2>
    <dy-collapse v-model="collapseValue01">
        <dy-collapse-item name="1">
            <div>图标选框</div>
            <div slot="content">图标选框一内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="2">
            <div>图标选框</div>
            <div slot="content">图标选框二内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="3">
            <div>图标选框</div>
            <div slot="content">图标选框三内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="4">
            <div>图标选框</div>
            <div slot="content">图标选框四内容部分</div>
        </dy-collapse-item>
    </dy-collapse>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-collapse</code> 组件包裹 <code>dy-collapse-item</code> 组件使用即可</p>
        <p><code>dy-collapse-item</code> 组件中使用 <code>slot="content"</code> 参数来标记为折叠内容，未添加的默认为标题内容</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>v-model</code>  --  绑定的值来标记默认开启哪一个</p>
        <p><code>name</code>  --  标记选项</p>
        <p><code>:accordion</code>  --  标记是否开启手风琴选项，默认为 <code>false</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-collapse v-model="collapseValue01"&gt;
            &lt;dy-collapse-item name="1"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框一内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="2"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框二内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="3"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框三内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="4"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框四内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
        &lt;/dy-collapse&gt;

    &lt;/template&gt;
    &lt;script&gt;
        export default {
            data() {
                return {
                    collapseValue01: 1
                }
            }
        };
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>

<div class="components-content">
    <h2 class="h2">Collapse 折叠菜单（手风琴）</h2>
    <dy-collapse v-model="collapseValue02" :accordion="true">
        <dy-collapse-item name="1">
            <div>图标选框</div>
            <div slot="content">图标选框一内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="2">
            <div>图标选框</div>
            <div slot="content">图标选框二内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="3">
            <div>图标选框</div>
            <div slot="content">图标选框三内容部分</div>
        </dy-collapse-item>
        <dy-collapse-item name="4">
            <div>图标选框</div>
            <div slot="content">图标选框四内容部分</div>
        </dy-collapse-item>
    </dy-collapse>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>:accordion</code> 参数来开启手风琴效果</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-collapse v-model="collapseValue02" :accordion="true"&gt;
            &lt;dy-collapse-item name="1"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框一内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="2"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框二内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="3"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框三内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
            &lt;dy-collapse-item name="4"&gt;
                &lt;div&gt;图标选框&lt;/div&gt;
                &lt;div slot="content"&gt;图标选框四内容部分&lt;/div&gt;
            &lt;/dy-collapse-item&gt;
        &lt;/dy-collapse&gt;

    &lt;/template&gt;
    &lt;script&gt;
        export default {
            data() {
                return {
                    collapseValue02: 1
                }
            }
        };
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
		data() {
			return {
                collapseValue01: 1,
                collapseValue02: 1
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


