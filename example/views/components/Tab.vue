<template>
<div class="components-box">

        <div class="components-title">Tab 选项卡</div>

        <div class="tab-wrapper">
            <ul>
                <li>

<div class="tab-content">
    <h2 class="h2">Tab 选项卡（默认）</h2>
    <div style="width:550px;height:100px;">
        <dy-tab>
            <dy-tab-list label="全部">
                <p>01</p>
            </dy-tab-list>
            <dy-tab-list label="饼图">
                <p>02</p>
            </dy-tab-list>
            <dy-tab-list label="柱状图">
                <p>03</p>
            </dy-tab-list>
            <dy-tab-list label="关系图">
                <p>04</p>
            </dy-tab-list>
            <dy-tab-list label="漏斗图">
                <p>05</p>
            </dy-tab-list>
        </dy-tab>
    </div>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>dy-tab</code> 组件包裹 <code>dy-tab-list</code> 组件即可</p>
        <p>指定的 <code>label</code> 为导航的文本内容，<code>dy-tab-list</code> 当中的内容可以自行定义</p>
        <p>默认长度为 <code>100%</code>，需要指定外部容器大小</p>
        <p>默认方向为水平方向</p>

        <br>
        <p>相关参数设置如下：</p>
        <p><code>label</code> -- 对应渲染生成的选项卡标题的文本内容</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-tab&gt;
            &lt;dy-tab-list label="全部"&gt;
                &lt;p&gt;01&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="饼图"&gt;
                &lt;p&gt;02&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="柱状图"&gt;
                &lt;p&gt;03&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="关系图"&gt;
                &lt;p&gt;04&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="漏斗图"&gt;
                &lt;p&gt;05&lt;/p&gt;
            &lt;/dy-tab-list&gt;
        &lt;/dy-tab&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>

<div class="tab-content">
    <h2 class="h2">Tab 选项卡（竖直方向）</h2>
    <div style="width:550px;height:400px;">
        <dy-tab :vertical="true">
            <dy-tab-list label="全部">
                <p>01</p>
            </dy-tab-list>
            <dy-tab-list label="饼图">
                <p>02</p>
            </dy-tab-list>
            <dy-tab-list label="柱状图">
                <p>03</p>
            </dy-tab-list>
            <dy-tab-list label="关系图">
                <p>04</p>
            </dy-tab-list>
            <dy-tab-list label="漏斗图">
                <p>05</p>
            </dy-tab-list>
        </dy-tab>
    </div>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>只需设定 <code>vertical</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-tab :vertical="true"&gt;
            &lt;dy-tab-list label="全部"&gt;
                &lt;p&gt;01&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="饼图"&gt;
                &lt;p&gt;02&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="柱状图"&gt;
                &lt;p&gt;03&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="关系图"&gt;
                &lt;p&gt;04&lt;/p&gt;
            &lt;/dy-tab-list&gt;
            &lt;dy-tab-list label="漏斗图"&gt;
                &lt;p&gt;05&lt;/p&gt;
            &lt;/dy-tab-list&gt;
        &lt;/dy-tab&gt;

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


