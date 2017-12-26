<template>
<div class="components-box">

        <div class="components-title">Pagination 分页</div>

        <div class="tab-wrapper">
            <ul>
                <li>


<div class="tab-content">
    <h2 class="h2">Pagination 分页（默认）</h2>
    <dy-pagination :total="100"></dy-pagination>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>dy-pagination</code> 组件，并且指定需要展示的数据总条目 <code>total</code> 参数（为必填项）</p>
        
        <br>
        <p>相关参数设置如下：</p>
        <p><code>:total</code>  --  需要分页的总条目，该项为必填项</p>
        <p><code>:value</code>  --  当前展示第几页，默认为第一页</p>
        <p><code>:pageSize</code>  --  每页展示多少条目，默认为 <code>10</code></p>
        <p><code>:fixedShowPageNums</code>  --  分页按钮显示的总个数，默认为 <code>7</code></p>
        <p><code>:firstBtnText</code>  --  首页文本显示内容，默认为首页</p>
        <p><code>:lastBtnText</code>  --  尾页文本显示内容，默认为尾页</p>
        <p><code>:prevBtnText</code>  --  上一页文本显示内容，默认为上一页</p>
        <p><code>:nextBtnText</code>  --  下一页文本显示内容，默认为下一页</p>
        <p><code>@change</code>  --  按钮点击事件</p>

        <br>
        <p>注：</p>
        <p>如果调整了 <code>:pageSize</code> 参数（每页展示条目数），则需要根据展示条目数来动态调整 <code>:fixedShowPageNums</code> 参数，即分页按钮显示的总个数</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-pagination :total="100"&gt;&lt;/dy-pagination&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="tab-content">
    <h2 class="h2">Pagination 分页（设置参数）</h2>
    <dy-pagination :total="20" :value="2" :pageSize="4" :fixedShowPageNums="5" @change="pageChange"></dy-pagination>
</div>


<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>参数设置，总条目为 <code>20</code>，初始显示第 <code>2</code> 页，每页展示 <code>4</code> 条数据，共 <code>20 / 4</code> 页，<code>@change</code> 事件为按钮点击事件</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-pagination 
            :total="20" 
            :value="2" 
            :pageSize="4" 
            :fixedShowPageNums="5" 
            @change="pageChange"
        &gt;&lt;/dy-pagination&gt;

    &lt;/template&gt;
    
    &lt;script&gt;

        export default {
            methods: {
                pageChange(pageNum) {
                    this.$notify({
                        message: `当前选择的是第 ${pageNum} 页`,
                        delay: 2000,
                        type: "default"
                    });
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
		methods: {
            pageChange(pageNum) {
                this.$notify({
                    message: `当前选择的是第 ${pageNum} 页`,
                    delay: 2000,
                    type: "default"
                });
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


