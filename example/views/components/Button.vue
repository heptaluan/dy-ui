<template>
<div class="components-box">

        <div class="components-title">Button 按钮</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <h2 class="h2">普通按钮</h2>
    <dy-button type="default">默认按钮</dy-button>
    <dy-button type="primary">主要按钮</dy-button>
    <dy-button type="success">成功按钮</dy-button>
    <dy-button type="info">信息按钮</dy-button>
    <dy-button type="warning">警告按钮</dy-button>
    <dy-button type="danger">危险按钮</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        使用 <code>type</code> 属性来指定对应种类按钮
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button type="default"&gt;默认按钮&lt;/dy-button&gt;
        &lt;dy-button type="primary"&gt;主要按钮&lt;/dy-button&gt;
        &lt;dy-button type="success"&gt;成功按钮&lt;/dy-button&gt;
        &lt;dy-button type="info"&gt;信息按钮&lt;/dy-button&gt;
        &lt;dy-button type="warning"&gt;警告按钮&lt;/dy-button&gt;
        &lt;dy-button type="danger"&gt;危险按钮&lt;/dy-button&gt;
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
    <h2 class="h2">普通按钮（带有渐变色）</h2>
    <dy-button isPlanin type="default">默认按钮</dy-button>
    <dy-button isPlanin type="primary">主要按钮</dy-button>
    <dy-button isPlanin type="success">成功按钮</dy-button>
    <dy-button isPlanin type="info">信息按钮</dy-button>
    <dy-button isPlanin type="warning">警告按钮</dy-button>
    <dy-button isPlanin type="danger">危险按钮</dy-button>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        指定 <code>isPlanin</code> 参数即可
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        &lt;dy-button isPlanin type="default"&gt;默认按钮&lt;/dy-button&gt;
        &lt;dy-button isPlanin type="primary"&gt;主要按钮&lt;/dy-button&gt;
        &lt;dy-button isPlanin type="success"&gt;成功按钮&lt;/dy-button&gt;
        &lt;dy-button isPlanin type="info"&gt;信息按钮&lt;/dy-button&gt;
        &lt;dy-button isPlanin type="warning"&gt;警告按钮&lt;/dy-button&gt;
        &lt;dy-button isPlanin type="danger"&gt;危险按钮&lt;/dy-button&gt;
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
                    <h2 class="h2">圆角按钮</h2>
                    <div class="m">
                        <dy-button  isRound type="default">默认按钮</dy-button>
                        <dy-button  isRound type="primary">主要按钮</dy-button>
                        <dy-button  isRound type="success">成功按钮</dy-button>
                        <dy-button  isRound type="info">信息按钮</dy-button>
                        <dy-button  isRound type="warning">警告按钮</dy-button>
                        <dy-button  isRound type="danger">危险按钮</dy-button>
                    </div>
                    <div class="m">
                        <dy-button isPlanin isRound type="default">默认按钮</dy-button>
                        <dy-button isPlanin isRound type="primary">主要按钮</dy-button>
                        <dy-button isPlanin isRound type="success">成功按钮</dy-button>
                        <dy-button isPlanin isRound type="info">信息按钮</dy-button>
                        <dy-button isPlanin isRound type="warning">警告按钮</dy-button>
                        <dy-button isPlanin isRound type="danger">危险按钮</dy-button>
                    </div>
                </li>

                <li>
                    <h2 class="h2">禁用状态</h2>
                    <div class="m">
                        <dy-button disabled type="default">默认按钮</dy-button>
                        <dy-button disabled type="primary">主要按钮</dy-button>
                        <dy-button disabled type="success">成功按钮</dy-button>
                        <dy-button disabled type="info">信息按钮</dy-button>
                        <dy-button disabled type="warning">警告按钮</dy-button>
                        <dy-button disabled type="danger">危险按钮</dy-button>
                    </div>
                    <div class="m">
                        <dy-button isPlanin disabled type="default">默认按钮</dy-button>
                        <dy-button isPlanin disabled type="primary">主要按钮</dy-button>
                        <dy-button isPlanin disabled type="success">成功按钮</dy-button>
                        <dy-button isPlanin disabled type="info">信息按钮</dy-button>
                        <dy-button isPlanin disabled type="warning">警告按钮</dy-button>
                        <dy-button isPlanin disabled type="danger">危险按钮</dy-button>
                    </div>
                </li>

                <li>
                    <h2 class="h2">按钮大小</h2>
                    <dy-button type="primary">默认按钮</dy-button>
                    <dy-button size="l" type="info">按钮</dy-button>
                    <dy-button size="m" type="warning">按钮</dy-button>
                    <dy-button size="s" type="danger">按钮</dy-button>
                </li>

                <li>
                    <h2 class="h2">图标按钮</h2>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62f;"></dy-icon>
                    </dy-button>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62e;"></dy-icon>
                    </dy-button>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62d;"></dy-icon>
                    </dy-button>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62c;"></dy-icon>
                    </dy-button>
                </li>

                <li>
                    <h2 class="h2">图标按钮（组合使用）</h2>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62f;"></dy-icon>
                        下一页
                    </dy-button>
                    <dy-button type="default">
                        下一页
                        <dy-icon size="14" type="&#xe62e;"></dy-icon>
                    </dy-button>
                    <dy-button type="default">
                        上一页
                        <dy-icon size="14" type="&#xe62d;"></dy-icon>
                    </dy-button>
                    <dy-button type="default">
                        <dy-icon size="14" type="&#xe62c;"></dy-icon>
                        上一页
                    </dy-button>
                </li>

                <li>
                    <h2 class="h2">点击加载</h2>
                    <dy-button type="primary" @click="click" :loading="loading">点击加载</dy-button>
                </li>



            </ul>
        </div>
        







</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				loading: false,
			}
		},
		methods: {
			click() {
				this.loading = true;
				// ..
			},
		},
		mounted() {
			// console.log(hljs)
		}
	};
</script>

<style lang="scss">

.components-box {

    .dy-btn {
        margin-left: 20px;
        margin-bottom: 10px;
    
        &:first-child {
            margin-left: 0;
        }
    }
}
</style>


