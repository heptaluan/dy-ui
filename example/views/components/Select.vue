<template>
<div class="components-box">

        <div class="components-title">Select 下拉菜单</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">Select 下拉菜单（默认）</h2>
    <dy-select :options="options01"></dy-select>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接调用 <code>dy-select</code> 组件，然后使用 <code>:options</code> 绑定需要渲染的数据即可</p>

        <br>
        <p><code>v-model</code> -- 如果需要使用双向绑定，指定绑定的值即可</p>
        <p><code>:multiple</code> -- 是否开启多选模式，默认为单选模式</p>
        <p><code>:width</code> -- 设定下拉按钮和下拉框的长度，默认为 <code>200</code></p>
        <p><code>:maxHeight</code> -- 设定下拉框的最大高度，默认为 <code>300</code>，超出最大高度后出现滚动条 </p>
        <p><code>:width</code> -- 设定下拉按钮和下拉框的长度，默认为 <code>200</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select :options="options01"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options01: [{
                        label: "东瓜"
                    }, {
                        label: "南瓜"
                    }, {
                        label: "西瓜",
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
    <dy-select :options="options01" v-model="selectVal01"></dy-select>
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

        &lt;dy-select :options="options01" v-model="selectVal01"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options01: [{
                        label: "东瓜"
                    }, {
                        label: "南瓜"
                    }, {
                        label: "西瓜",
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
    <dy-select :options="options01" :multiple="true"></dy-select>
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

        &lt;dy-select :options="options01" :multiple="true"&gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options01: [{
                        label: "东瓜"
                    }, {
                        label: "南瓜"
                    }, {
                        label: "西瓜",
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
    <h2 class="h2">Select 下拉菜单（设定宽高）</h2>
    <dy-select :options="options02" :maxHeight="300" :width="400" :multiple="true" v-model="selectVal02"></dy-select>
    <div class="subBox dy-select-subBox">
        当前选择的是：{{ selectVal02 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>可以手动指定下拉组件的宽度和高度，只需要使用 <code>:maxHeight</code> 和 <code>:width</code> 参数即可</p>
        <p>需要注意，最大高度中包含 <code>30</code> 像素的 <code>padding</code> 距离（长度没有）</p>
        <p>即设置 <code>300</code> 最大高度，实则为 <code>270</code>，目的是为了抵消与外层容器之间的间距，否则会溢出容器</p>

        <br>
        <p><code>:maxHeight</code> -- 设定下拉框的最大高度，默认为 <code>300</code>，超出最大高度后出现滚动条 </p>
        <p><code>:width</code> -- 设定下拉按钮和下拉框的长度，默认为 <code>200</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-select 
            :options="options02" 
            :maxHeight="300" 
            :width="400" 
            :multiple="true" 
            v-model="selectVal02"
        &gt;&lt;/dy-select&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    options02: [{
                        label: "东瓜"
                    }, {
                        label: "南瓜"
                    }, {
                        label: "西瓜",
                    }, {
                        label: "北瓜",
                    }, {
                        label: "中瓜",
                    }, {
                        label: "葡萄",
                    }, {
                        label: "梨子",
                    }, {
                        label: "香蕉",
                    }, {
                        label: "苹果",
                    }, {
                        label: "地瓜",
                    }, {
                        label: "皮瓜",
                    }],
                    selectVal02: []
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
                options01: [{
                    label: "东瓜"
                }, {
                    label: "南瓜"
                }, {
                    label: "西瓜",
                }],
                options02: [{
                    label: "东瓜"
                }, {
                    label: "南瓜"
                }, {
                    label: "西瓜",
                }, {
                    label: "北瓜",
                }, {
                    label: "中瓜",
                }, {
                    label: "葡萄",
                }, {
                    label: "梨子",
                }, {
                    label: "香蕉",
                }, {
                    label: "苹果",
                }, {
                    label: "地瓜",
                }, {
                    label: "皮瓜",
                }],
                selectVal01: [],
                selectVal02: []
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


