<template>
<div class="nav-box">

        <div class="components-title">Nav 导航</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="nav-content">
    <h2 class="h2">Nav 导航（默认使用 router-link）</h2>
    <dy-nav :navActiveIndex="2">
        <dy-nav-item :index="1" :to="'/icon'">图标</dy-nav-item>
        <dy-nav-item :index="2" :to="'/close'">关闭按钮</dy-nav-item>
        <dy-nav-item :index="3" :to="'/backtotop'">回到顶部</dy-nav-item>
        <dy-nav-item :index="4" :to="'/tag'">标签</dy-nav-item>
    </dy-nav>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-nav</code> 组件包裹 <code>dy-nav-item</code> 组件使用即可</p>
        <p><code>:navActiveIndex</code> 参数与列表项绑定的 <code>:index</code> 相对应则表示激活当前项</p>
        <p>需要注意，默认是使用 <code>router-link</code> 进行配置的</p>
        <p>如若不想使用 <code>router-link</code>，则不需要传递 <code>:to</code> 参数即可，<code>dy-nav-item</code> 组件内部有 <code>slot</code> 插槽，需要手动进行配置</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>:navActiveIndex</code> -- 布尔值，表示当前激活项</p>
        <p><code>:index</code> -- 对应列表的序列，用于指定当前激活项</p>
        <p><code>:to</code> -- 指定跳转路径，需要注意，传值需要带上 <code>''</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-nav :navActiveIndex="2"&gt;
            &lt;dy-nav-item :index="1" :to="'/icon'"&gt;图标&lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="2" :to="'/close'"&gt;关闭按钮&lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="3" :to="'/backtotop'"&gt;回到顶部&lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="4" :to="'/tag'"&gt;标签&lt;/dy-nav-item&gt;
        &lt;/dy-nav&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>

<div class="nav-content">
    <h2 class="h2">Nav 导航（不使用 router-link）</h2>
    <dy-nav :navActiveIndex="1">
        <dy-nav-item :index="1">
            <a href="/icon">图标</a>
        </dy-nav-item>
        <dy-nav-item :index="2">
            <a href="/close">关闭按钮</a>
        </dy-nav-item>
        <dy-nav-item :index="3">
            <a href="/backtotop">回到顶部</a>
        </dy-nav-item>
        <dy-nav-item :index="4">
            <a href="/tag">标签</a>
        </dy-nav-item>
    </dy-nav>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如若不想使用 <code>router-link</code>，则不需要传递 <code>:to</code> 参数即可，<code>dy-nav-item</code> 组件内部有 <code>slot</code> 插槽，需要手动进行配置</p>
        <p>需要注意，这样配置以后就不会在走路由了</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-nav :navActiveIndex="1"&gt;
            &lt;dy-nav-item :index="1"&gt;
                &lt;a href="/icon"&gt;图标&lt;/a&gt;
            &lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="2"&gt;
                &lt;a href="/close"&gt;关闭按钮&lt;/a&gt;
            &lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="3"&gt;
                &lt;a href="/backtotop"&gt;回到顶部&lt;/a&gt;
            &lt;/dy-nav-item&gt;
            &lt;dy-nav-item :index="4"&gt;
                &lt;a href="/tag"&gt;标签&lt;/a&gt;
            &lt;/dy-nav-item&gt;
        &lt;/dy-nav&gt;

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
.nav-box {
    .components-title {
        font-size: 22px;
        margin: 24px 0;
        color: #129CFF;
        padding: 0 25px 24px;
        border-bottom: 1px solid #d7dde4;
    }
    .components-wrapper {
        padding: 0 25px;

        .nav-content {
            margin-top: 15px;
            margin-bottom: 20px;
        }

        .h2 {
            font-size: 16px;
            font-weight: normal;
            margin: 20px 0;
            font-weight: 600;
        }
        
        .code-title {
            font-size: 14px;
            margin-bottom: 15px;
        }

        .code-tip {
            display: block;
            padding: .5em;
            background: #23241f;
            color: #fff;
            font-size: 14px;
            text-indent: 10px;
            padding: 10px 0;

            p {
                margin: 5px;
            }

            code {
                color: #9CDCFE;
            }
        }

        pre {
            display: block;
            font-size: 14px;
            margin: -30px 0 0 0;
            padding: 0;
            width: 100%;
        }
    }

}
</style>


