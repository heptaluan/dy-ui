<template>
<div class="components-box">

        <div class="components-title">Tab 选项卡</div>

        <div class="tab-wrapper">
            <ul>
                <li>


<div class="tab-content">
    <h2 class="h2">Tab 选项卡</h2>
    <dy-tab>
        <dy-tab-list label="渲染函数">
            <p>Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。</p>
        </dy-tab-list>
        <dy-tab-list label="虚拟 DOM">
            <p>createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，及其子节点。</p>
        </dy-tab-list>
        <dy-tab-list label="深入 data 对象">
            <p>有一件事要注意：正如在模板语法中，v-bind:class 和 v-bind:style ，会被特别对待一样，在 VNode 数据对象中，下列属性名是级别最高的字段。该对象也允许你绑定普通的 HTML 特性，就像 DOM 属性一样，比如 innerHTML (这会取代 v-html 指令)。</p>
        </dy-tab-list>
    </dy-tab>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>dy-tab</code> 组件包裹 <code>dy-tab-list</code> 组件即可</p>
        <p>指定的 <code>label</code> 为导航的文本内容，<code>dy-tab-list</code> 当中的内容可以自行定义</p>

        <br>
        <p>相关参数设置如下：</p>
        <p><code>label</code> -- 对应渲染生成的选项卡标题的文本内容</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-tab&gt;
            &lt;dy-tab-list label="渲染函数"&gt;
                &lt;p&gt;Vue 推荐在绝大多数情况下使用 template 来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力，这就是 render 函数，它比 template 更接近编译器。&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="虚拟 DOM"&gt;
                &lt;p&gt;createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，及其子节点。&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="深入 data 对象"&gt;
                &lt;p&gt;有一件事要注意：正如在模板语法中，v-bind:class 和 v-bind:style ，会被特别对待一样，在 VNode 数据对象中，下列属性名是级别最高的字段。该对象也允许你绑定普通的 HTML 特性，就像 DOM 属性一样，比如 innerHTML (这会取代 v-html 指令)。&lt;/p&gt;
            &lt;/dy-tab-list&gt;
        &lt;/dy-tab&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        
<!-- 填充 -->
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
.tab-wrapper {
    padding: 10px 25px 5px;
    border-top: 1px solid #d7dde4;

    .tab-content {
        margin-top: 15px;
        margin-bottom: 20px;

        .h2 {
            font-size: 16px;
            font-weight: normal;
            margin: 20px 0;
            font-weight: 600;
        }
    }

    .components-code {
        font-size: 14px;

        .code-title {
            font-size: 14px;
            margin-bottom: 15px;
        }
    }

    .code-tip {
        display: block;
        padding: .5em;
        background: #23241f;
        color: #fff;
        font-size: 14px;
        text-indent: 10px;
        padding: 10px 0;

        code {
            color: #9CDCFE;
        }

        p {
            margin: 5px;
        }
    }
}


</style>


