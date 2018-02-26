<template>
<div class="components-box">

        <div class="components-title">Badge 徽章</div>

        <div class="components-wrapper">
            <ul>
                <li>


<div class="components-content">
    <div class="components-content">
        <h2 class="h2">Badge 徽章（默认）</h2>
        
        <div class="badge-box">
          <dy-badge :value="6">
            <dy-button>徽章</dy-button>
          </dy-badge>
        </div>

        <div class="badge-box">
          <dy-badge :value="0">
            <dy-button>徽章</dy-button>
          </dy-badge>
        </div>

        <div class="badge-box">
          <dy-badge :value="6666" :max="99">
            <dy-button>徽章</dy-button>
          </dy-badge>
        </div>

        <div class="badge-box">
          <dy-badge isDot>
            <dy-button>徽章</dy-button>
          </dy-badge>
        </div>

    </div>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-badge</code> 组件包裹使用即可，内部内容可以自行定义</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>:value</code> -- 徽章显示数目，若为 <code>0</code>，则会隐藏</p>
        <p><code>max</code> -- 用于指定显示的最大数目</p>
        <p><code>isDot</code> -- 显示标识，而不显示具体数目</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
      &lt;dy-badge :value="6"&gt;
        &lt;dy-button&gt;徽章&lt;/dy-button&gt;
      &lt;/dy-badge&gt;

      &lt;dy-badge :value="0"&gt;
        &lt;dy-button&gt;徽章&lt;/dy-button&gt;
      &lt;/dy-badge&gt;

      &lt;dy-badge :value="6666" :max="99"&gt;
        &lt;dy-button&gt;徽章&lt;/dy-button&gt;
      &lt;/dy-badge&gt;

      &lt;dy-badge isDot&gt;
        &lt;dy-button&gt;徽章&lt;/dy-button&gt;
      &lt;/dy-badge&gt;

    &lt;/template&gt;
    </code>
</pre>

                </li>
            </ul>
        </div>

<!-- 测试用 div -->
<div style="height:600px;"></div>
</div>
</template>

<script>
	export default {
		methods: {
      closeHandle() {
        this.$notify({
          message: "点击了关闭按钮",
          delay: 2000,
          type: "default"
        })
      }
    }
	};
</script>

<style lang="scss">
.dy-close {
    margin-left: 25px;

    &:first-child {
        margin-left: 0;
    }
}

.components-content {
  overflow: hidden;

  .badge-box {
    float: left;
    margin-right: 45px;
  }
}
</style>


