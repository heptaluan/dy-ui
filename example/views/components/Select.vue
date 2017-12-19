<template>
<div class="components-box">

        <div class="components-title">Select 下拉菜单</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">Select 下拉菜单（默认）</h2>
    <dy-select :options="options"></dy-select>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接调用 <code>dy-select</code> 组件，然后使用 <code>:options</code> 绑定需要渲染的数据即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select :options="options"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options: [{
                        label: "西瓜"
                    }, {
                        label: "东瓜"
                    }, {
                        label: "南瓜",
                    }]
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Select 下拉菜单（获取选中值）</h2>
    <dy-select :options="options" v-model="selectVal01"></dy-select>
    <div class="subBox dy-select-subBox">
        当前选择的是：{{ selectVal01 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>v-model</code> 双向绑定即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select :options="options" v-model="selectVal01"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options: [{
                        label: "西瓜"
                    }, {
                        label: "东瓜"
                    }, {
                        label: "南瓜",
                    }],
                    selectVal01: []
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Select 下拉菜单（多选）</h2>
    <dy-select :options="options" :multiple="true"></dy-select>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>指定参数 <code>:multiple</code> 为 <code>true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select :options="options" :multiple="true"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options: [{
                        label: "西瓜"
                    }, {
                        label: "东瓜"
                    }, {
                        label: "南瓜",
                    }]
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Select 下拉菜单（设定高度）</h2>
    <dy-select :options="options" :maxHeight="300"></dy-select>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>:maxHeight</code> 参数设定最大高度即可，默认为 <code>200</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select :options="options" :maxHeight="300"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options: [{
                        label: "西瓜"
                    }, {
                        label: "东瓜"
                    }, {
                        label: "南瓜",
                    }]
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
		data() {
            return {
                options: [{
                    label: "西瓜"
                }, {
                    label: "东瓜"
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }, {
                    label: "南瓜",
                }],
                selectVal01: []
            }
        }
        // methods: {
        //     selectHandle() {
        //         this.selectVal = val;
        //     }
        // }
	};
</script>

<style lang="scss">
.dy-select-subBox {
    margin-top: 20px;
}
</style>


