<template>
<div class="components-box">

        <div class="components-title">Slider 滑块</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Slider - 滑块（默认）</h2>
        <dy-slider v-model="sliderVal01"></dy-slider>
    </div>
    
    <div class="components-content">
        <h2 class="h2">Slider - 滑块（显示tooltip）</h2>
        <dy-slider v-model="sliderVal02" showTooltip></dy-slider>
    </div>

    <div class="components-content">
        <h2 class="h2">Slider - 滑块（自定义初始值）</h2>
        <dy-slider v-model="sliderVal03" showTooltip></dy-slider>
    </div>

    <div class="components-content">
        <h2 class="h2">Slider - 滑块（显示输入框）</h2>
        <dy-slider v-model="sliderVal04" showTooltip showInput></dy-slider>
    </div>
    <div class="components-content">
        <h2 class="h2">Slider - 滑块（输入框限定范围值【100-1000】）</h2>
        <dy-slider v-model="sliderVal05" showTooltip showInput :min="100" :max="1000"></dy-slider>
    </div>

    <div class="components-content">
        <h2 class="h2">Slider - 滑块（离散值）</h2>
        <dy-slider v-model="sliderVal06" showTooltip showInput :step="10"></dy-slider>
    </div>
    <div class="components-content">
        <h2 class="h2">Slider - 滑块（离散值【显示间断点】）</h2>
        <dy-slider v-model="sliderVal07" showTooltip showInput :step="20" show-steps></dy-slider>
    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>直接使用 <code>dy-slider</code> 组件然后绑定所需参数即可</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>showTooltip</code> -- 布尔值，是否显示 <code>tooltip</code>，默认为 <code>false</code></p>
        <p><code>showInput</code> -- 布尔值，是否显示配套显示的 <code>input</code>，默认为 <code>false</code></p>
        <p><code>:min</code> -- 设定最小值</p>
        <p><code>:max</code> -- 设定最大值</p>
        <p><code>:step</code> -- 设定离散数值</p>
        <p><code>show-steps</code> -- 布尔值，是否显示离散数值间断点，默认为 <code>false</code></p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-slider v-model="sliderVal01"&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal02" showTooltip&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal03" showTooltip&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal04" showTooltip showInput&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal05" showTooltip showInput :min="100" :max="1000"&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal06" showTooltip show-input :step="10"&gt;&lt;/dy-slider&gt;

        &lt;dy-slider v-model="sliderVal07" showTooltip show-input :step="20" show-steps&gt;&lt;/dy-slider&gt;

    &lt;/template&gt;

    &lt;script&gt;

        export default {
            data() {
                return {
                    sliderVal01: 0,
                    sliderVal02: 0,
                    sliderVal03: 25,
                    sliderVal04: 30,
                    sliderVal05: 420,
                    sliderVal06: 10,
                    sliderVal07: 20,
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
                sliderVal01: 0,
				sliderVal02: 0,
				sliderVal03: 25,
				sliderVal04: 30,
				sliderVal05: 420,
				sliderVal06: 10,
				sliderVal07: 20,
			}
		}
	};
</script>

<style lang="scss">

</style>


