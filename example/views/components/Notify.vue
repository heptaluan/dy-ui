<template>
<div class="components-box">

        <div class="components-title">Notify - 顶部消息通知</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">Notify - 消息通知（默认）</h2>
    <dy-button @click="notify01">默认通知</dy-button>
    <dy-button @click="notify02">成功通知</dy-button>
    <dy-button @click="notify03">警告通知</dy-button>
    <dy-button @click="notify04">危险通知</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>绑定 <code>click</code> 方法后调用指令 <code>$notify({})</code> 方法即可</p>
        <br>
        <p><code>message</code> -- 通知内容</p>
        <p><code>close</code> -- 布尔值，是否出现关闭按钮，默认为 <code>false</code></p>
        <p><code>onClose</code> -- 通知关闭后的回调事件</p>
        <p><code>delay</code> -- 自动关闭时间，默认为 <code>2000</code> 毫秒</p>
        <p><code>type</code> -- 通知框的主题，分为 <code>default</code>，<code>success</code>，<code>waring</code>，<code>danger</code>，默认为 <code>default</code></p>
        <p><code>align</code> -- 字体显示方向，默认为 <code>left</code>，可选值为 <code>center</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button @click="notify01"&gt;默认通知&lt;/dy-button&gt;
        &lt;dy-button @click="notify02"&gt;成功通知&lt;/dy-button&gt;
        &lt;dy-button @click="notify03"&gt;警告通知&lt;/dy-button&gt;
        &lt;dy-button @click="notify04"&gt;危险通知&lt;/dy-button&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                notify01() {
                    this.$notify({
                        message: "这是一条默认消息通知",
                        delay: 2000,
                        type: "default"
                    });
                },
                notify02() {
                    this.$notify({
                        message: "这是一条成功消息通知",
                        delay: 2000,
                        type: "success"
                    });
                },
                notify03() {
                    this.$notify({
                        message: "这是一条警告消息通知",
                        delay: 2000,
                        type: "waring"
                    });
                },
                notify04() {
                    this.$notify({
                        message: "这是一条危险消息通知",
                        delay: 2000,
                        type: "danger"
                    });
                },
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Notify - 消息通知（带关闭按钮）</h2>
    <dy-button @click="notify05">默认通知</dy-button>
    <dy-button @click="notify06">成功通知</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p><code>$notify({})</code> 指令中添加参数 <code>close: true</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button @click="notify05"&gt;默认通知&lt;/dy-button&gt;
        &lt;dy-button @click="notify06"&gt;成功通知&lt;/dy-button&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                notify05() {
                    this.$notify({
                        message: "这是一条默认消息通知",
                        delay: 2000,
                        type: "default",
                        close: true,
                        onClick() {
                            console.log(`...`)
                        }
                    });
                },
                notify06() {
                    this.$notify({
                        message: "这是一条成功消息通知",
                        delay: 2000,
                        type: "success",
                        close: true,
                        onClick() {
                            console.log(`...`)
                        }
                    });
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Notify - 消息通知（文字居中显示）</h2>
    <dy-button @click="notify07">默认通知</dy-button>
    <dy-button @click="notify08">成功通知</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p><code>$notify({})</code> 指令中添加参数 <code>align: "center"</code> 即可</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button @click="notify07"&gt;默认通知&lt;/dy-button&gt;
        &lt;dy-button @click="notify08"&gt;成功通知&lt;/dy-button&gt;
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                notify07() {
                    this.$notify({
                        message: "这是一条默认消息通知",
                        delay: 2000,
                        type: "default",
                        onClick() {
                            console.log(`...`)
                        },
                        align: "center"
                    });
                },
                notify08() {
                    this.$notify({
                        message: "这是一条成功消息通知",
                        delay: 2000,
                        type: "success",
                        close: true,
                        onClick() {
                            console.log(`...`)
                        },
                        align: "center"
                    });
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
		methods: {
            notify01() {
				this.$notify({
					message: "这是一条默认消息通知",
					delay: 2000,
                    type: "default"
                });
			},
			notify02() {
				this.$notify({
					message: "这是一条成功消息通知",
					delay: 2000,
					type: "success"
                });
			},
			notify03() {
				this.$notify({
					message: "这是一条警告消息通知",
					delay: 2000,
					type: "waring"
                });
			},
			notify04() {
				this.$notify({
					message: "这是一条危险消息通知",
					delay: 2000,
					type: "danger"
                });
            },
            notify05() {
				this.$notify({
					message: "这是一条默认消息通知",
					delay: 2000,
                    type: "default",
                    close: true,
                    onClick() {
						console.log(`...`)
					}
                });
            },
            notify06() {
				this.$notify({
					message: "这是一条成功消息通知",
					delay: 2000,
                    type: "success",
                    close: true,
                    onClick() {
						console.log(`...`)
					}
                });
            },
            notify07() {
				this.$notify({
					message: "这是一条默认消息通知",
					delay: 2000,
                    type: "default",
                    onClick() {
						console.log(`...`)
                    },
                    align: "center"
                });
            },
            notify08() {
				this.$notify({
					message: "这是一条成功消息通知",
					delay: 2000,
                    type: "success",
                    close: true,
                    onClick() {
						console.log(`...`)
                    },
                    align: "center"
                });
            }
        }
	};
</script>

<style lang="scss">


</style>


