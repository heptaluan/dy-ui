<template>
<div class="components-box">

        <div class="components-title">Loading 加载中</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">Loading 加载中（默认）</h2>
    <dy-button @click="loadingHandle01">点击加载</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接绑定点击事件，然后调用 <code>this.$loading.open()</code> 方法即可</p>

        <br>
        <p><code>this.$loading</code> 指令提供了两个方法，<code>open()</code> 和 <code>close()</code></p>
        <p><code>open()</code> 方法可以接收参数，参数为一个对象</p>
        <p><code>tiemout</code> -- 关闭时间，默认为 <code>3000</code> 毫秒</p>
        <p><code>loadingText</code> -- 加载的提示文字，不填写的情况下默认为 <code>Loading</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button @click="loadingHandle01"&gt;点击加载&lt;/dy-button&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                loadingHandle01() {
                    this.$loading.open()
                }
            }
        };
    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>

<div class="components-content">
    <h2 class="h2">Loading 加载中（参数设置）</h2>
    <dy-button @click="loadingHandle02">点击加载</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>可以为 <code>open()</code> 方法指定参数</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button @click="loadingHandle02"&gt;点击加载&lt;/dy-button&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                loadingHandle02() {
                    this.$loading.open({
                        timeout: 500,
                        loadingText: "拼命加载中"
                    })
                }
            }
        };
    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>

<div class="components-content">
    <h2 class="h2">Loading 加载中（手动关闭）</h2>
    <dy-button @click="loadingHandle03">点击加载</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>也可以手动的调用 <code>close()</code> 方法来进行关闭</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button @click="loadingHandle03"&gt;点击加载&lt;/dy-button&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                loadingHandle03() {
                    // 长时间开启
                    this.$loading.open({
                        timeout: 9999999
                    })

                    // 手动关闭
                    setTimeout( () => {
                        this.$loading.close()
                    }, 2000)
                }
            }
        };
    &lt;/template&gt;
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
            loadingHandle01() {
                this.$loading.open()
            },
            loadingHandle02() {
                this.$loading.open({
                    timeout: 500,
                    loadingText: "拼命加载中"
                })
            },
            loadingHandle03() {
                this.$loading.open({
                    timeout: 9999999
                })
                setTimeout( () => {
                    this.$loading.close()
                }, 2000)
            }
        }
	};
</script>

<style lang="scss">

</style>


