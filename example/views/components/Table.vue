<template>
<div class="components-box">

        <div class="components-title">Table 表格</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（默认）</h2>
    <dy-table :data="tableData">
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
    </dy-table>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-table</code> 组件来包裹 <code>dy-table-col</code> 组件使用</p>
        <p>指定 <code>:data</code> 方法来渲染指定的 <code>tableData</code> 当中的数据，<code>label</code> 为表头内容</p>
        <p><code>prop</code> 为数据载体当中的各项 <code>key</code>，数据载体 <code>tableData</code> 为一个标准 <code>JSON</code> 格式数据</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table :data="tableData"&gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    tableData: [{
                            num: 1,
                            title: "苹果",
                            date: "2017-12-12"
                        },{
                            num: 2,
                            title: "香蕉",
                            date: "2017-12-12"
                        },
                        {
                            num: 3,
                            title: "葡萄",
                            date: "2017-12-12"
                        },
                        {
                            num: 4,
                            title: "西瓜",
                            date: "2017-12-12"
                    }],
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（指定边框）</h2>
    <dy-table :data="tableData" :border="true">
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
    </dy-table>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>添加 <code>:border</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table :data="tableData" :border="true"&gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                // 数据和上面的一样
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（指定背景色）</h2>
    <dy-table :data="tableData" :border="true" :striped="true">
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
    </dy-table>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>添加 <code>:striped</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table :data="tableData" :striped="true" :border="true"&gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                // 数据和上面的一样
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（添加鼠标移入效果）</h2>
    <dy-table :data="tableData" :border="true" :striped="true" :hover="true">
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
    </dy-table>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>添加 <code>:hover</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table :data="tableData" :striped="true" :hover="true" :border="true"&gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                // 数据和上面的一样
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（添加单选框）</h2>
    <dy-table v-model="tableSelect1" :select="true" :data="tableData" :border="true" :striped="true" :hover="true">
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
    </dy-table>
    <div class="subBox">
        当前选择的是：{{ tableSelect1 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>v-model</code> 来与表格进行绑定后进行数据展示</p>
        <p>添加 <code>:select</code> 参数为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table 
            v-model="tableSelect1" 
            :select="true" 
            :data="tableData" 
            :striped="true" 
            :hover="true" 
            :border="true"
        &gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                // 数据和上面的一样,
                tableSelect1: []
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>
                <li>


<div class="components-content">
    <h2 class="h2">表格 - Table（添加多选框）</h2>
    <dy-table 
        v-model="tableSelect2" 
        :selectAll="true" 
        :select="true" 
        :data="tableData" 
        :border="true" 
        :striped="true" 
        :hover="true"
    >
        <dy-table-col prop="num" label="序号"></dy-table-col>
        <dy-table-col prop="title" label="名称"></dy-table-col>
        <dy-table-col prop="date" label="日期"></dy-table-col>
        <div slot="tfoot">全选行自定义内容</div>
    </dy-table>
    <div class="subBox">
        当前选择的是：{{ tableSelect2 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>v-model</code> 来与表格进行绑定后进行数据展示</p>
        <p>添加 <code>:selectAll</code> 和 <code>:select</code> 参数均为 <code>true</code> 即可</p>
        <p>页脚部分的全选行后半部分内容，可以在自定义元素身上添加 <code>slot="tfoot"</code> 参数来进行自定义</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-table 
            v-model="tableSelect2" 
            :selectAll="true" 
            :select="true" 
            :data="tableData" 
            :border="true" 
            :striped="true" 
            :hover="true"
        &gt;
            &lt;dy-table-col prop="num" label="序号"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="title" label="名称"&gt;&lt;/dy-table-col&gt;
            &lt;dy-table-col prop="date" label="日期"&gt;&lt;/dy-table-col&gt;
            &lt;div slot="tfoot"&gt;全选行自定义内容&lt;/div&gt;
        &lt;/dy-table&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                // 数据和上面的一样,
                tableSelect2: []
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
		data() {
			return {
                tableData: [{
                        num: 1,
                        title: "苹果",
                        date: "2017-12-12"
                    },{
                        num: 2,
                        title: "香蕉",
                        date: "2017-12-12"
                    },
                    {
                        num: 3,
                        title: "葡萄",
                        date: "2017-12-12"
                    },
                    {
                        num: 4,
                        title: "西瓜",
                        date: "2017-12-12"
                }],
                tableSelect1: [],
                tableSelect2: []
			}
		}
	};
</script>


