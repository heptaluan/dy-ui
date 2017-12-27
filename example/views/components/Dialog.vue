<template>
<div class="components-box">

        <div class="components-title">Dialog - 对话框</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">Alert</h2>
    <dy-button @click="showAlert">Alert</dy-button>
    <dy-alert :isShow.sync="alertVisible" titleText="标题" @submit="alertSubmitHandle" :close="false">
        信息内容
    </dy-alert>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>绑定 <code>click</code> 事件，改变 <code>:isShow.sync</code> 绑定的值 <code>alertVisible</code> 的状态即可切换弹窗显示状态</p>

        <br>
        <p>相关参数设置如下：</p>
        <p><code>:isShow.sync</code> -- 根据与其绑定的值的状态来判断弹窗的显示与隐藏</p>
        <p><code>titleText</code> -- 弹窗的标题内容</p>
        <p><code>信息内容</code> -- 弹窗主体中的自定义内容</p>
        <p><code>@submit</code> -- 弹窗内的按钮事件回调</p>
        <p><code>:close</code> -- 布尔值，用于显示和隐藏关闭按钮，默认为 <code>true</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-button @click="showAlert"&gt;Alert&lt;/dy-button&gt;

        &lt;dy-alert :isShow.sync="alertVisible" titleText="标题" @submit="alertSubmitHandle" :close="false"&gt;
            信息内容
        &lt;/dy-alert&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    alertVisible: false
                }
            },
            methods: {
                // Alert
                showAlert() {
                    this.alertVisible = true;
                },
                alertSubmitHandle() {
                    setTimeout( () => {
                        this.$notify({
                            message: "成功提交",
                            type: "success",
                            delay: 2000
                        })
                    }, 300)
                },
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Confirm</h2>
    <dy-button @click="showConfirm">Confirm</dy-button>
    <dy-confirm 
        :isShow.sync="confirmVisible" 
        titleText="删除文件" 
        @cancel="cancelHandle" 
        @confirm="confirmHandle"
    >
        此操作将会删除该文件, 是否继续?
    </dy-confirm>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>其他参数设置与上述组件一致</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>@cancel</code> -- 确定事件回调</p>
        <p><code>@confirm</code> -- 取消事件回调</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-button @click="showConfirm"&gt;Confirm&lt;/dy-button&gt;

        &lt;dy-confirm 
            :isShow.sync="confirmVisible" 
            titleText="删除文件" 
            @cancel="cancelHandle" 
            @confirm="confirmHandle"
        &gt;
            此操作将会删除该文件, 是否继续?
        &lt;/dy-confirm&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    confirmVisible: false
                }
            },
            methods: {
                // Confirm
                showConfirm() {
                    this.confirmVisible = true;
                },
                cancelHandle() {
                    setTimeout( () => {
                        this.$notify({
                            message: "删除成功",
                            type: "success",
                            delay: 2000
                        })
                    }, 300)
                },
                confirmHandle() {
                    setTimeout( () => {
                        this.$notify({
                            message: "删除取消",
                            type: "default",
                            delay: 2000
                        })
                    }, 300)
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">Prompt</h2>
    <dy-button @click="showPrompt001">请输入手机号码</dy-button>
    <dy-prompt
        :isShow.sync="prompt001" 
        titleText="提示" 
        @cancel="prompt1" 
        @confirm="prompt2"
        v-model="promptTel"
        regex="^1\d{10}$"
        errorNotice="请输入正确的手机号码"
        placeholder="请输入手机号码"
    >
        请输入手机号码
    </dy-prompt>


    <dy-button @click="showPrompt002">请输入邮箱地址</dy-button>
    <dy-prompt
        :isShow.sync="prompt002" 
        titleText="提示" 
        @cancel="prompt3" 
        @confirm="prompt4"
        v-model="promptEmail"
        regex="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
        errorNotice="请输入正确的邮箱地址"
        placeholder="请输入邮箱地址"
    >
        请输入邮箱地址
    </dy-prompt>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>其他参数设置与上述组件一致</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>@cancel</code> -- 确定事件回调</p>
        <p><code>@confirm</code> -- 取消事件回调</p>
        <p><code>v-model</code> -- 弹窗内 <code>input</code> 绑定所用</p>
        <p><code>placeholder</code> -- <code>input</code> 原生属性</p>
        <br>
        
        <p>下面两个参数为选填，可以提供简单的验证，原理为使用正则去匹配输入框内的输入值，验证不通过的时候显示提示文字</p>
        <p><code>regex</code> -- 验证用的正则，不需要添加<code>"/ /"</code></p>
        <p><code>errorNotice</code> -- 验证时候的提示文字</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-button @click="showPrompt001"&gt;请输入手机号码&lt;/dy-button&gt;

        &lt;dy-prompt
            :isShow.sync="prompt001" 
            titleText="提示" 
            @cancel="prompt1" 
            @confirm="prompt2"
            v-model="promptTel"
            regex="^1\d{10}$"
            errorNotice="请输入正确的手机号码"
            placeholder="请输入手机号码"
        &gt;
            请输入手机号码
        &lt;/dy-prompt&gt;


        &lt;dy-button @click="showPrompt002"&gt;请输入邮箱地址&lt;/dy-button&gt;

        &lt;dy-prompt
            :isShow.sync="prompt002" 
            titleText="提示" 
            @cancel="prompt3" 
            @confirm="prompt4"
            v-model="promptEmail"
            regex="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
            errorNotice="请输入正确的邮箱地址"
            placeholder="请输入邮箱地址"
        &gt;
            请输入邮箱地址
        &lt;/dy-prompt&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    promptTel: "",
                    prompt001: false,

                    promptEmail: "",
                    prompt002: false
                }
            },
            methods: {
                // Prompt
                showPrompt001() {
                    this.prompt001 = true;
                },
                prompt1() {
                    setTimeout( () => {
                        this.$notify({
                            message: `您输入的手机号码为 ${this.promptTel}`,
                            type: "success",
                            delay: 2000
                        })
                    }, 300)
                },
                prompt2() {
                    setTimeout( () => {
                        this.$notify({
                            message: "取消输入",
                            type: "default",
                            delay: 2000
                        })
                    }, 300)
                },

                showPrompt002() {
                    this.prompt002 = true;
                },
                prompt3() {
                    setTimeout( () => {
                        this.$notify({
                            message: `您输入的邮箱地址为 ${this.promptEmail}`,
                            type: "success",
                            delay: 2000
                        })
                    }, 300)
                },
                prompt4() {
                    setTimeout( () => {
                        this.$notify({
                            message: "取消输入",
                            type: "default",
                            delay: 2000
                        })
                    }, 300)
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>


                </li>
                <li>


<div class="components-content">
    <h2 class="h2">自定义弹窗内容</h2>
    <dy-button @click="showModel">自定义弹窗</dy-button>

    <dy-model :isShow.sync="modelVisible" :width="650">

        <header class="model-header">这里是头部</header>

        <article class="model-body">
            <h2>这里是内容部分</h2>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
            <p>内容</p>
        </article>

        <footer class="model-footer">
            <dy-button size="m" @click="model1">
                取消
            </dy-button>
            <dy-button type="primary" size="m" @click="model2">
                确定
            </dy-button>
        </footer>

    </dy-model>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>注意与上述组件区别开来</p>
        <p><code>dy-model</code> 组件仅仅只是提供一个居中显示的带遮罩的容器盒子，内部的内容均为自定义</p>
        <p>只需根据 <code>:isShow.sync</code> 绑定状态值控制弹窗的显示和隐藏即可</p>
        <p>内部的按钮点击事件可以根据需要来进行自定义的添加和删除</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>:width</code> -- 自定义容器的宽度（不需要单位）【容器的高度为居中自适应】</p>
        <p><code>model1，model2</code> -- 为内部自定义按钮事件的回调</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-button @click="showModel"&gt;自定义弹窗&lt;/dy-button&gt;
    
        &lt;dy-model :isShow.sync="modelVisible" :width="650"&gt;

            &lt;header class="model-header"&gt;这里是头部&lt;/header&gt;

            &lt;article class="model-body"&gt;
                &lt;h2&gt;这里是内容部分&lt;/h2&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
                &lt;p&gt;内容&lt;/p&gt;
            &lt;/article&gt;

            &lt;footer class="model-footer"&gt;
                &lt;dy-button size="m" @click="model1"&gt;
                    取消
                &lt;/dy-button&gt;
                &lt;dy-button type="primary" size="m" @click="model2"&gt;
                    确定
                &lt;/dy-button&gt;
            &lt;/footer&gt;

        &lt;/dy-model&gt;
        
    &lt;/template&gt;

    &lt;script&gt;
        export default {
            methods: {
                // 自定义弹窗
                showModel() {
                    this.modelVisible = true;
                },
                model1() {
                    this.modelVisible = false;
                },
                model2() {
                    this.modelVisible = false;
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
                alertVisible: false,
                confirmVisible: false,
                modelVisible: false,
                prompt001: false,
                prompt002: false,
                promptTel: "",
                promptEmail: ""
            }
        },
		methods: {
            // Alert
			showAlert() {
				this.alertVisible = true;
			},
			alertSubmitHandle() {
				setTimeout( () => {
					this.$notify({
						message: "成功提交",
						type: "success",
						delay: 2000
					})
				}, 300)
            },

            // Confirm
			showConfirm() {
				this.confirmVisible = true;
			},
			cancelHandle() {
				setTimeout( () => {
					this.$notify({
						message: "删除成功",
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			confirmHandle() {
				setTimeout( () => {
					this.$notify({
						message: "删除取消",
						type: "default",
						delay: 2000
					})
				}, 300)
            },
            
            // Prompt
			showPrompt001() {
				this.prompt001 = true;
			},
			prompt1() {
				setTimeout( () => {
					this.$notify({
						message: `您输入的手机号码为 ${this.promptTel}`,
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			prompt2() {
				setTimeout( () => {
					this.$notify({
						message: "取消输入",
						type: "default",
						delay: 2000
					})
				}, 300)
			},

			showPrompt002() {
				this.prompt002 = true;
			},
			prompt3() {
				setTimeout( () => {
					this.$notify({
						message: `您输入的邮箱地址为 ${this.promptEmail}`,
						type: "success",
						delay: 2000
					})
				}, 300)
			},
			prompt4() {
				setTimeout( () => {
					this.$notify({
						message: "取消输入",
						type: "default",
						delay: 2000
					})
				}, 300)
            },
            
            // 自定义弹窗
			showModel() {
				this.modelVisible = true;
			},
			model1() {
				this.modelVisible = false;
			},
			model2() {
				this.modelVisible = false;
			}
        }
	};
</script>

<style lang="scss">

</style>


