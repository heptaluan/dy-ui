<template>
<div class="components-box">

        <div class="components-title">Message - 侧边信息提示</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">Message - 侧边信息提示</h2>
    <dy-button @click="message01">默认消息提示</dy-button>
    <dy-button @click="message02">成功消息提示</dy-button>
    <dy-button @click="message03">警告消息提示</dy-button>
    <dy-button @click="message04">错误消息提示</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>绑定 <code>click</code> 方法后调用指令 <code>$message({})</code> 方法即可</p>
        <br>
        <p><code>title</code> -- 标题文本</p>
        <p><code>message</code> -- 内容文本</p>
        <p><code>close</code> -- 布尔值，是否出现关闭按钮，默认为 <code>false</code></p>
        <p><code>onClose</code> -- 通知关闭后的回调事件</p>
        <p><code>delay</code> -- 自动关闭时间，默认为 <code>2000</code> 毫秒</p>
        <p><code>type</code> -- 弹窗的主题，分为 <code>default</code>，<code>success</code>，<code>waring</code>，<code>danger</code>，默认为 <code>default</code></p>
        <p><code>placement</code> -- 弹窗出现的方位，分为 <code>left-top</code>，<code>left-bottom</code>，<code>right-top</code>，<code>right-bottom</code>，默认为 <code>right-top</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button @click="message01"&gt;默认通知&lt;/dy-button&gt;
        &lt;dy-button @click="message02"&gt;成功通知&lt;/dy-button&gt;
        &lt;dy-button @click="message03"&gt;警告通知&lt;/dy-button&gt;
        &lt;dy-button @click="message04"&gt;危险通知&lt;/dy-button&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                message01() {
                    this.$message({
                        title: "标题",
                        message: "侧边栏信息提示内容主体",
                        type: "default",
                        placement: "left-bottom",
                        delay: 2000
                    });
                },
                message02() {
                    this.$message({
                        title: "标题",
                        message: "侧边栏信息提示内容主体",
                        type: "success",
                        placement: "left-top",
                        delay: 2000
                    });
                },
                message03() {
                    this.$message({
                        title: "标题",
                        message: "侧边栏信息提示内容主体",
                        type: "waring",
                        placement: "right-bottom",
                        delay: 2000,
                        close: true
                    });
                },
                message04() {
                    this.$message({
                        title: "标题",
                        message: "侧边栏信息提示内容主体",
                        type: "danger",
                        placement: "right-top",
                        delay: 2000,
                        close: true
                    });
                },
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
		methods: {
            message01() {
				this.$message({
                    title: "标题",
                    message: "侧边栏信息提示内容主体",
                    type: "default",
					placement: "left-bottom",
					delay: 2000
                })
			},
			message02() {
				this.$message({
                    title: "标题",
                    message: "侧边栏信息提示内容主体",
                    type: "success",
					placement: "left-top",
					delay: 2000
                })
			},
			message03() {
				this.$message({
                    title: "标题",
                    message: "侧边栏信息提示内容主体",
                    type: "waring",
					placement: "right-bottom",
					delay: 2000,
					close: true
                })
			},
			message04() {
				this.$message({
                    title: "标题",
                    message: "侧边栏信息提示内容主体",
                    type: "danger",
					placement: "right-top",
					delay: 2000,
					close: true
                })
			},
        }
	};
</script>

<style lang="scss">


</style>


