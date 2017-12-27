<template>
<div class="components-box">

        <div class="components-title">Radio 单选框</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">单选框（默认）</h2>
    <dy-radio-group v-model="radio1">
        <dy-radio label="苹果"></dy-radio>
        <dy-radio label="香蕉"></dy-radio>
        <dy-radio label="葡萄"></dy-radio>
        <dy-radio label="鸭梨"></dy-radio>
    </dy-radio-group>
    <div class="subBox">
        当前选择的是：{{ radio1 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>需要使用 <code>dy-radio-group</code> 来包裹 <code>dy-radio</code> 使用</p>
        <p>然后指定 <code>dy-radio</code> 的 <code>label</code> 属性来指定各个选项的名称，使用 <code>v-model</code> 来绑定选中的数据</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>v-model</code>  --  用于双向绑定展示的值</p>
        <p><code>label</code>  --  单选框的选项内容</p>
        <p><code>disabled</code>  --  禁用选项</p>
        <p><code>dy-radio-button</code>  --  如果需要使用单选按钮组，只需要将 <code>dy-radio</code> 组件替换为 <code>dy-radio-button</code> 组件即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-radio-group v-model="radio1"&gt;
            &lt;dy-radio label="苹果"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="香蕉"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="葡萄"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="鸭梨"&gt;&lt;/dy-radio&gt;
        &lt;/dy-radio-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    radio1: ""
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>

                <li>


<div class="components-content">
    <h2 class="h2">单选框（默认选中）</h2>
    <dy-radio-group v-model="radio2">
        <dy-radio label="苹果"></dy-radio>
        <dy-radio label="香蕉"></dy-radio>
        <dy-radio label="葡萄"></dy-radio>
        <dy-radio label="鸭梨"></dy-radio>
    </dy-radio-group>
    <div class="subBox">
        当前选择的是：{{ radio2 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p> <code>data</code> 中指定当前选中项即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-radio-group v-model="radio2"&gt;
            &lt;dy-radio label="苹果"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="香蕉"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="葡萄"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="鸭梨"&gt;&lt;/dy-radio&gt;
        &lt;/dy-radio-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    radio2: "葡萄"
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                    
                </li>

                <li>


<div class="components-content">
    <h2 class="h2">单选框（整体禁用）</h2>
    <dy-radio-group disabled v-model="radio3">
        <dy-radio label="苹果"></dy-radio>
        <dy-radio label="香蕉"></dy-radio>
        <dy-radio label="葡萄"></dy-radio>
        <dy-radio label="鸭梨"></dy-radio>
    </dy-radio-group>

    <h2 class="h2">单选框（部分禁用）</h2>
    <dy-radio-group v-model="radio4">
        <dy-radio disabled label="苹果"></dy-radio>
        <dy-radio label="香蕉"></dy-radio>
        <dy-radio disabled label="葡萄"></dy-radio>
        <dy-radio label="鸭梨"></dy-radio>
    </dy-radio-group>
    <div class="subBox">
        当前选择的是：{{ radio4 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>整体禁用可以指定 <code>dy-radio-group</code> 为 <code>disabled</code> 即可</p>
        <p>部分禁用可以指定单个 <code>dy-radio</code> 为 <code>disabled</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-radio-group disabled v-model="radio3"&gt;
            &lt;dy-radio label="苹果"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="香蕉"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="葡萄"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="鸭梨"&gt;&lt;/dy-radio&gt;
        &lt;/dy-radio-group&gt;

        &lt;dy-radio-group v-model="radio4"&gt;
            &lt;dy-radio disabled label="苹果"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="香蕉"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio disabled label="葡萄"&gt;&lt;/dy-radio&gt;
            &lt;dy-radio label="鸭梨"&gt;&lt;/dy-radio&gt;
        &lt;/dy-radio-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    radio3: "",
                    radio4: "",
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>

                <li>


<div class="components-content">
    <h2 class="h2">单选按钮组</h2>
    <dy-radio-group v-model="radio5">
        <dy-radio-button label="苹果"></dy-radio-button>
        <dy-radio-button label="香蕉"></dy-radio-button>
        <dy-radio-button label="葡萄"></dy-radio-button>
        <dy-radio-button label="鸭梨"></dy-radio-button>
    </dy-radio-group>
    <div class="subBox">
        当前选择的是：{{ radio5 }}
    </div>
</div>

<div class="components-content">
    <h2 class="h2">单选按钮组（禁用）</h2>
    <dy-radio-group disabled v-model="radio6">
        <dy-radio-button label="苹果"></dy-radio-button>
        <dy-radio-button label="香蕉"></dy-radio-button>
        <dy-radio-button label="葡萄"></dy-radio-button>
        <dy-radio-button label="鸭梨"></dy-radio-button>
    </dy-radio-group>
</div>




<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>将 <code>dy-radio</code> 组件替换为 <code>dy-radio-button</code> 组件即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-radio-group v-model="radio5"&gt;
            &lt;dy-radio-button label="苹果"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="香蕉"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="葡萄"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="鸭梨"&gt;&lt;/dy-radio-button&gt;
        &lt;/dy-radio-group&gt;


        &lt;dy-radio-group disabled v-model="radio5"&gt;
            &lt;dy-radio-button label="苹果"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="香蕉"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="葡萄"&gt;&lt;/dy-radio-button&gt;
            &lt;dy-radio-button label="鸭梨"&gt;&lt;/dy-radio-button&gt;
        &lt;/dy-radio-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    radio5: "",
                    radio6: ""
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
                radio1: "",
				radio2: "葡萄",
				radio3: "",
				radio4: "",
				radio5: "苹果",
				radio6: "",
			}
		}
	};
</script>

<style lang="scss">
.dy-radio-group {
    margin-bottom: 20px;
}

</style>


