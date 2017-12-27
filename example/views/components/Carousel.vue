<template>
<div class="components-box">

        <div class="components-title">Carousel 走马灯</div>

        <div class="tab-wrapper">
            <ul>
                <li>


<div class="tab-content">
    <h2 class="h2">Carousel 走马灯（默认）</h2>
    <dy-carousel>
        <dy-carousel-item>1</dy-carousel-item>
        <dy-carousel-item>2</dy-carousel-item>
        <dy-carousel-item>3</dy-carousel-item>
        <dy-carousel-item>4</dy-carousel-item>
    </dy-carousel>
</div>

                 
<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>dy-carousel</code> 组件包裹 <code>dy-carousel-item</code> 组件即可</p>
        <p>如果内容部分为图片，则图片默认是自适应框体大小居中展示</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>activeIndex</code> -- 展示第几页，默认为 <code>0</code></p>
        <p><code>showCarouselButton</code> -- 是否显示上一页和下一页，默认是显示</p>
        <p><code>showCarouselControl</code> -- 是否显示底部切换栏，默认是显示</p>
        <p><code>height</code> -- 设置窗体高度，默认为 <code>300</code></p>
        <p><code>autoPlay</code> -- 指定是否自动播放，默认为 <code>true</code></p>
        <p><code>playTime</code> -- 指定切换时间，默认为 <code>3000</code> 毫秒</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-carousel&gt;
            &lt;dy-carousel-item&gt;1&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;2&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;3&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;4&lt;/dy-carousel-item&gt;
        &lt;/dy-carousel&gt;

    &lt;/template&gt;
    </code>
</pre>


                </li>
                <li>


<div class="tab-content">
    <h2 class="h2">Carousel 走马灯（参数设置）</h2>
    <dy-carousel :showCarouselButton="true" :showCarouselControl="false" :height="350" :playTime="2000">
        <dy-carousel-item>1</dy-carousel-item>
        <dy-carousel-item>2</dy-carousel-item>
        <dy-carousel-item>3</dy-carousel-item>
        <dy-carousel-item>4</dy-carousel-item>
    </dy-carousel>
</div>

                 
<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>如下设置表示：显示左右切换按钮，不显示底部控制按钮组，高度设置为 <code>500</code>，切换间隔时间为 <code>2000</code> 毫秒</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-carousel :showCarouselButton="true" :showCarouselControl="false" :height="350" :playTime="2000"&gt;
            &lt;dy-carousel-item&gt;1&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;2&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;3&lt;/dy-carousel-item&gt;
            &lt;dy-carousel-item&gt;4&lt;/dy-carousel-item&gt;
        &lt;/dy-carousel&gt;

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
		data() {
			return {

			}
		}
	};
</script>

<style lang="scss">
.dy-carousel li {
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding-top: 145px;

    &:nth-child(even) {
        background-color:#99a9bf;
    }

    &:nth-child(odd) {
        background-color:#d3dce6;;
    }
}

.tab-wrapper {
    padding: 10px 25px 5px;
    border-top: 1px solid #d7dde4;

    .tab-content {
        margin-top: 15px;
        margin-bottom: 20px;

        .h2 {
            font-size: 16px;
            font-weight: normal;
            margin: 20px 0;
            font-weight: 600;
        }
    }

    .components-code {
        font-size: 14px;
        margin-bottom: 15px;

        .code-title {
            font-size: 14px;
            margin-bottom: 15px;
        }
    }

    .code-tip {
        display: block;
        padding: .5em;
        background: #23241f;
        color: #fff;
        font-size: 14px;
        text-indent: 10px;
        padding: 10px 0;

        code {
            color: #9CDCFE;
        }

        p {
            margin: 5px;
        }
    }
}
</style>


