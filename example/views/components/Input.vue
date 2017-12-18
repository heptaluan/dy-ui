<template>
<div class="components-box">

        <div class="components-title">Input 输入框</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">输入框（默认）</h2>
    <dy-input></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p><code>input</code> 的一些原生属性还是一样的使用，比如 <code>placeholder</code>，默认的文本为请输入内容，可以手动指定将其覆盖掉</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input&gt;&lt;/dy-input&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            // ...
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>

                <li>


<div class="components-content">
    <h2 class="h2">输入框（定制大小）</h2>
    <dy-input w="50%" h="40px"></dy-input>
</div>

<div class="components-content">
    <dy-input w="40%" h="45px"></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>w</code> 和 <code>h</code> 参数来指定 <code>input</code> 框的长度和高度，需要带上单位，支持 <code>px</code>，<code>%</code>，<code>em/rem</code></p>
        <p>图标旋转动画需要手动来指定</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input w="50%" h="40px"&gt;&lt;/dy-input&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            // ...
        }
    &lt;/script&gt;
    </code>
</pre>

                    
                </li>

                <li>


<div class="components-content" style="height:100px;">
    <h2 class="h2">输入框（验证规则）</h2>
    <dy-input
        placeholder="请输入手机号码"
        v-model="telMsg"
        regex="^1\d{10}$"
        errorNotice="请输入正确的手机号码"
    ></dy-input>
</div>

<div class="components-content" style="height:60px;">
    <dy-input
        placeholder="请输入邮箱地址"
        v-model="emailMsg"
        regex="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
        errorNotice="请输入正确的邮箱地址"
    ></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>regex</code> 参数来指定验证的规则，<code>errorNotice</code> 参数来指定验证时提示的文字</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input
            placeholder="请输入手机号码"
            v-model="telMsg"
            regex="^1\d{10}$"
            errorNotice="请输入正确的手机号码"
        &gt;&lt;/dy-input&gt;
        

        &lt;dy-input
            placeholder="请输入邮箱地址"
            v-model="emailMsg"
            regex="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
            errorNotice="请输入正确的邮箱地址"
        &gt;&lt;/dy-input&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    telMsg: "",
                    emailMsg: ""
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>

                </li>

                <li>


<div class="components-content">
    <h2 class="h2">输入框（禁用状态）</h2>
    <dy-input disabled></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>指定 <code>disabled</code> 参数来指定禁用即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input disabled&gt;&lt;/dy-input&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            // ...
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>

                <li>


<div class="components-content">
    <h2 class="h2">复合型输入框</h2>
    <dy-input-group>
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
        <dy-input></dy-input>
    </dy-input-group>

    <dy-input-group disabled>
        <span slot="prepend">请输入帐号</span>
        <dy-input></dy-input>
    </dy-input-group>

    <dy-input-group>
        <span slot="append">密码</span>
        <dy-input></dy-input>
    </dy-input-group>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>需要使用 <code>dy-input-group</code> 来包裹 <code>dy-input</code> 使用</p>
        <p>然后指定一个 <code>span</code> 标签，使用 <code>slot="prepend" / slot="append"</code> 来指定左右位置</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input-group&gt;
            &lt;span slot="prepend"&gt;http://&lt;/span&gt;
            &lt;span slot="append"&gt;.com&lt;/span&gt;
            &lt;dy-input&gt;&lt;/dy-input&gt;
        &lt;/dy-input-group&gt;


        &lt;dy-input-group disabled&gt;
            &lt;span slot="prepend"&gt;请输入帐号&lt;/span&gt;
            &lt;dy-input&gt;&lt;/dy-input&gt;
        &lt;/dy-input-group&gt;


        &lt;dy-input-group&gt;
            &lt;span slot="append"&gt;密码&lt;/span&gt;
            &lt;dy-input&gt;&lt;/dy-input&gt;
        &lt;/dy-input-group&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            // ...
        }
    &lt;/script&gt;
    </code>
</pre>


                    
                </li>
                <li>


<div class="components-content">
    <h2 class="h2">文本框（默认）</h2>
    <dy-input type="textarea"></dy-input>
</div>

<div class="components-content">
    <h2 class="h2">文本框（可以拖拽改变大小）</h2>
    <dy-input resize type="textarea"></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>指定 <code>dy-input</code> 的 <code>type</code> 属性为 <code>textarea</code> 即可</p>
        <p>指定 <code>resize</code> 参数来指定是否可以拖拽改变大小</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-input type="textarea"&gt;&lt;/dy-input&gt;

        &lt;dy-input resize type="textarea"&gt;&lt;/dy-input&gt;
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
		data() {
			return {
                telMsg: "",
                emailMsg: ""
			}
		}
	};
</script>

<style lang="scss">
.dy-input-group {
    margin-bottom: 20px;
}

</style>


