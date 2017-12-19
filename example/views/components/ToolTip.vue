<template>
<div class="components-box">

        <div class="components-title">ToolTip 文字提示</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">ToolTip 文字提示</h2>
    <div class="tooltip">
        <div class="top">
            <dy-tooltip content="这里是提示这里是提示" placement="top-start">
                <dy-button>上左</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="top">
                <dy-button>正上</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="top-end">
                <dy-button>上右</dy-button>
            </dy-tooltip>
        </div>

        <div class="left">
            <dy-tooltip content="这里是提示这里是提示" placement="left-start">
                <dy-button>左上</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="left">
                <dy-button>正左</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="left-end">
                <dy-button>左下</dy-button>
            </dy-tooltip>
        </div>
        <div class="right">
            <dy-tooltip content="这里是提示这里是提示" placement="right-start">
                <dy-button>右上</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="right">
                <dy-button>正右</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="right-end">
                <dy-button>右下</dy-button>
            </dy-tooltip>
        </div>
        <div class="bottom">
            <dy-tooltip content="这里是提示这里是提示" placement="bottom-start">
                <dy-button>下左</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="bottom">
                <dy-button>正下</dy-button>
            </dy-tooltip>
            <dy-tooltip content="这里是提示这里是提示" placement="bottom-end">
                <dy-button>右下</dy-button>
            </dy-tooltip>
        </div>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-tooltip</code> 组件包裹即可，提示内容使用 <code>content</code> 参数来指定，提示位置使用 <code>placement</code> 参数来指定</p>
        <p>位置区分如下：</p>
        <p><code>top-start</code>，<code>top</code>，<code>top-end</code> 三个参数分别对应 上左，正上和上右</p>
        <p><code>left-start</code>，<code>left</code>，<code>left-end</code> 三个参数分别对应 左上，正左和左下</p>
        <p><code>right-start</code>，<code>right</code>，<code>right-end</code> 三个参数分别对应 右上，正右和右下</p>
        <p><code>bottom-start</code>，<code>bottom</code>，<code>bottom-end</code> 三个参数分别对应 下左，正下和右下</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
    
            &lt;dy-tooltip content="这里是提示这里是提示" placement="top-start"&gt;
                &lt;dy-button&gt;上左&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="top"&gt;
                &lt;dy-button&gt;正上&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="top-end"&gt;
                &lt;dy-button&gt;上右&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;


            &lt;dy-tooltip content="这里是提示这里是提示" placement="left-start"&gt;
                &lt;dy-button&gt;左上&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="left"&gt;
                &lt;dy-button&gt;正左&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="left-end"&gt;
                &lt;dy-button&gt;左下&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;


            &lt;dy-tooltip content="这里是提示这里是提示" placement="right-start"&gt;
                &lt;dy-button&gt;右上&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="right"&gt;
                &lt;dy-button&gt;正右&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="right-end"&gt;
                &lt;dy-button&gt;右下&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;


            &lt;dy-tooltip content="这里是提示这里是提示" placement="bottom-start"&gt;
                &lt;dy-button&gt;下左&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="bottom"&gt;
                &lt;dy-button&gt;正下&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;
            &lt;dy-tooltip content="这里是提示这里是提示" placement="bottom-end"&gt;
                &lt;dy-button&gt;右下&lt;/dy-button&gt;
            &lt;/dy-tooltip&gt;

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
        





</div>
</template>

<script>
	export default {
		// ...
	};
</script>
