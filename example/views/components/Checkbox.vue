<template>
<div class="components-box">

        <div class="components-title">Checkbox 多选框</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">多选框（默认）</h2>
    <dy-checkbox-group v-model="checkbox1">
        <dy-checkbox label="苹果"></dy-checkbox>
        <dy-checkbox label="香蕉"></dy-checkbox>
        <dy-checkbox label="葡萄"></dy-checkbox>
        <dy-checkbox label="鸭梨"></dy-checkbox>
    </dy-checkbox-group>
    <div class="subBox">
        当前选择的是：{{ checkbox1 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>需要使用 <code>dy-checkbox-group</code> 组件来包裹 <code>dy-checkbox</code> 组件使用</p>
        <p>指定 <code>v-model</code> 绑定当前选中的数据，<code>label</code> 为各个选项的名称</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>v-model</code>  --  用于双向绑定展示的值</p>
        <p><code>label</code>  --  选项内容</p>
        <p><code>disabled</code>  --  禁用选项</p>
        <p><code>:min</code>  --  最少选择几项</p>
        <p><code>:max</code>  --  最多选择几项</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-checkbox-group v-model="checkbox1"&gt;
            &lt;dy-checkbox label="苹果"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="香蕉"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="葡萄"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="鸭梨"&gt;&lt;/dy-checkbox&gt;
        &lt;/dy-checkbox-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    checkbox1: []
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">多选框（默认选中）</h2>
    <dy-checkbox-group v-model="checkbox2">
        <dy-checkbox label="苹果"></dy-checkbox>
        <dy-checkbox label="香蕉"></dy-checkbox>
        <dy-checkbox label="葡萄"></dy-checkbox>
        <dy-checkbox label="鸭梨"></dy-checkbox>
    </dy-checkbox-group>
    <div class="subBox">
        当前选择的是：{{ checkbox2 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p><code>data</code> 当中指定默认选中的数据即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-checkbox-group v-model="checkbox1"&gt;
            &lt;dy-checkbox label="苹果"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="香蕉"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="葡萄"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="鸭梨"&gt;&lt;/dy-checkbox&gt;
        &lt;/dy-checkbox-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    checkbox2: ["苹果", "葡萄"]
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">多选框（全部禁用）</h2>
    <dy-checkbox-group disabled v-model="checkbox3">
        <dy-checkbox label="苹果"></dy-checkbox>
        <dy-checkbox label="香蕉"></dy-checkbox>
        <dy-checkbox label="葡萄"></dy-checkbox>
        <dy-checkbox label="鸭梨"></dy-checkbox>
    </dy-checkbox-group>
    <div class="subBox">
        当前选择的是：{{ checkbox3 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>针对 <code>dy-checkbox-group</code> 组件指定 <code>disabled</code> 参数即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-checkbox-group disabled v-model="checkbox3"&gt;
            &lt;dy-checkbox label="苹果"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="香蕉"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="葡萄"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="鸭梨"&gt;&lt;/dy-checkbox&gt;
        &lt;/dy-checkbox-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    checkbox3: ["苹果"]
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">多选框（部分禁用）</h2>
    <dy-checkbox-group v-model="checkbox4">
        <dy-checkbox disabled label="苹果"></dy-checkbox>
        <dy-checkbox label="香蕉"></dy-checkbox>
        <dy-checkbox label="葡萄"></dy-checkbox>
        <dy-checkbox label="鸭梨"></dy-checkbox>
    </dy-checkbox-group>
    <div class="subBox">
        当前选择的是：{{ checkbox4 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>针对 <code>dy-checkbox</code> 组件需要禁用的选项添加 <code>disabled</code> 参数即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-checkbox-group v-model="checkbox4"&gt;
            &lt;dy-checkbox disabled label="苹果"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="香蕉"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="葡萄"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="鸭梨"&gt;&lt;/dy-checkbox&gt;
        &lt;/dy-checkbox-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    checkbox4: []
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">多选框（限定选择项）</h2>
    <dy-checkbox-group v-model="checkbox5" :min="1" :max="3">
        <dy-checkbox label="苹果"></dy-checkbox>
        <dy-checkbox label="香蕉"></dy-checkbox>
        <dy-checkbox label="葡萄"></dy-checkbox>
        <dy-checkbox label="鸭梨"></dy-checkbox>
    </dy-checkbox-group>
    <div class="subBox">
        当前选择的是：{{ checkbox5 }}
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>添加 <code>:min</code> 和 <code>:max</code> 参数来指定选择的最少项和最多项</p>
        <p>如示例当中表示为至少选择一项，最多选择三项</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-checkbox-group v-model="checkbox5" :min="1" :max="3"&gt;
            &lt;dy-checkbox label="苹果"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="香蕉"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="葡萄"&gt;&lt;/dy-checkbox&gt;
            &lt;dy-checkbox label="鸭梨"&gt;&lt;/dy-checkbox&gt;
        &lt;/dy-checkbox-group&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    checkbox5: []
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
                checkbox1: [],
				checkbox2: ["苹果", "葡萄"],
				checkbox3: ["苹果"],
				checkbox4: [],
				checkbox5: ["苹果"],
			}
		}
	};
</script>

<style lang="scss">
.dy-checkbox-group {
    margin-bottom: 20px;
}

</style>


