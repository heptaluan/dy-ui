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
        <p><code>input</code> 的原生属性可以正常使用，比如 <code>placeholder</code>，默认的文本为请输入内容，可以手动指定将其覆盖掉</p>
        <p><code>input</code> 的默认宽度为 <code>100%</code>，高度为 <code>40px</code>（包含边框在内）</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>w, h</code>  --  指定 <code>input</code> 框的长宽，需要指定单位，支持 <code>px</code>，<code>%</code>，<code>em/rem</code></p>
        <p><code>regex</code>  --  正则，用于验证 <code>input</code> 输入框内的内容，一般配合 <code>errorNotice</code> 参数来使用</p>
        <p><code>errorNotice</code>  --  用于显示使用正则验证时的文本提示内容</p>
        <p><code>disabled</code>  --  禁用选项</p>
        <p><code>type</code>  --  指定 <code>input</code> 类型，默认为 <code>input</code>，可选为 <code>textarea</code></p>

        <br>
        <p>注：关于复合型输入框</p>
        <p>需要使用 <code>dy-input-group</code> 来包裹 <code>dy-input</code> 使用</p>
        <p>然后指定一个 <code>span</code> 标签，文本内容可以自行定义，使用 <code>slot="prepend"</code> 和 <code>slot="append"</code> 参数来指定左右位置即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-input&gt;&lt;/dy-input&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>

                <li>


<div class="components-content">
    <h2 class="h2">输入框（定制大小）</h2>
    <dy-input w="50%" h="40px"></dy-input>
</div>

<div class="components-content">
    <dy-input w="35%" h="45px"></dy-input>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>w</code> 和 <code>h</code> 参数来指定 <code>input</code> 框的长度和高度，需要带上单位，支持 <code>px</code>，<code>%</code>，<code>em/rem</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-input w="50%" h="40px"&gt;&lt;/dy-input&gt;

        &lt;dy-input w="35%" h="45px"&gt;&lt;/dy-input&gt;

    &lt;/template&gt;
    </code>
</pre>

                    
                </li>

                <li>


<div class="components-content" style="height:90px;margin-bottom:0;">
    <h2 class="h2">输入框（验证规则）</h2>
    <dy-input
        placeholder="请输入手机号码"
        v-model="telMsg"
        regex="^1\d{10}$"
        errorNotice="请输入正确的手机号码"
    ></dy-input>
</div>

<div class="components-content" style="height:50px;margin-top:10px;margin-bottom:15px;">
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
        <p>使用 <code>regex</code> 参数来指定验证的规则（注意：只需要添加正则即可，不需要 <code>/ /</code>），<code>errorNotice</code> 参数来指定验证时提示的文字</p>
        <p>错误提示默认为红色字样，当匹配验证规则后会恢复原样</p>
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
        <p>然后指定一个 <code>span</code> 标签，使用 <code>slot="prepend"</code> 和 <code>slot="append"</code> 参数来指定左右位置</p>
        <p>固定框中的文字是自适应长度的，如果只添加头部标签，尾部标签默认不显示（反之同理）</p>
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
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Input-Number</h2>
    <div style="width:120px;">
        <dy-input-number
            :max="100"
            :min="0"
            :step="2"
            v-model="inputNumber"
        ></dy-input-number>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>默认长度为 <code>100%</code>，所以需要在外层包裹一层容器来限定大小</p>
        <p>输入框输入内容没有做限定，所以简易配合 <code>:max</code> 和 <code>:min</code> 参数进行使用</p>
        <p>小键盘中的上下键位对应着递增和减少</p>
        <p>需要注意：参数类型均为 <code>Number</code></p>

        <br>
        <p>参数设置如下：</p>
        <p><code>:max</code>  --  输入限定的最大值（不添加该参数则无此限定）</p>
        <p><code>:min</code>  --  输入限定的最小值（不添加该参数则无此限定）</p>
        <p><code>:step</code>  --  步数，默认为 <code>1</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-input-number
            :max="100"
            :min="0"
            :step="2"
            v-model="inputNumber"
        &gt;&lt;/dy-input-number&gt;

    &lt;/template&gt;
    &lt;script&gt;
        export default {
            data() {
                return {
                    inputNumber: 1
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
                telMsg: "",
                emailMsg: "",
                inputNumber: 1
			}
		}
	};
</script>

<style lang="scss">
.dy-input-group {
    margin-bottom: 20px;
}

</style>


