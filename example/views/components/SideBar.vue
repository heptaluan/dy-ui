<template>
<div class="components-box">

        <div class="components-title">SideBar 侧边栏</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">SideBar 侧边栏</h2>
    <dy-button @click="showHandle01">左侧侧边栏</dy-button>
    <dy-sidebar :is-show.sync="showSidebar01" :width="280">
      <div class="side-box">
        <p>这里是侧边栏弹出层的自定义内容部分</p>
      </div>
    </dy-sidebar>

    <dy-button @click="showHandle02" style="margin-left:40px;">右侧侧边栏</dy-button>
    <dy-sidebar placement="right" :is-show.sync="showSidebar02" :width="280">
      <div class="side-box">
        <p>这里是侧边栏弹出层的自定义内容部分</p>
      </div>
    </dy-sidebar>
</div>

<div class="components-code">
    <div class="code-title">示例代码</div>
    <div class="code-tip">
        <p>使用 <code>dy-sidebar</code> 组件绑定 <code>:is-show.sync</code> 参数即可</p>
        <p>侧边栏的状态是根据 <code>:is-show.sync</code> 所绑定的值来改变状态的</p>

        <br>
        <p>参数设置如下：</p>
        <p><code>:is-show.sync</code> -- 布尔值，用于显示侧边栏的状态</p>
        <p><code>:width</code> -- 数值或者字符串，用于设置侧边栏的宽度，默认为 <code>250</code></p>
        <p><code>placement</code> -- 用于指定侧边栏弹出方向</p>
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
      &lt;dy-button @click="showHandle01"&gt;左侧侧边栏&lt;/dy-button&gt;
      &lt;dy-sidebar :is-show.sync="showSidebar01" :width="280"&gt;
        &lt;div class="side-box"&gt;
          &lt;p&gt;这里是侧边栏弹出层的自定义内容部分&lt;/p&gt;
        &lt;/div&gt;
      &lt;/dy-sidebar&gt;

      &lt;dy-button @click="showHandle02" style="margin-left:40px;"&gt;右侧侧边栏&lt;/dy-button&gt;
      &lt;dy-sidebar placement="right" :is-show.sync="showSidebar02" :width="280"&gt;
        &lt;div class="side-box"&gt;
          &lt;p&gt;这里是侧边栏弹出层的自定义内容部分&lt;/p&gt;
        &lt;/div&gt;
      &lt;/dy-sidebar&gt;

    &lt;/template&gt;
    &lt;script&gt;
      export default {
        data () {
          return {
            showSidebar01: false,
            showSidebar02: false
          }
        },
        methods: {
          showHandle01 () {
            this.showSidebar01 = true
          },
          showHandle02 () {
            this.showSidebar02 = true
          },
        }
      }
    &lt;/script&gt;
    </code>
</pre>


                </li>
            </ul>
        </div>
        
<!-- 测试用 div -->
<div style="height:500px;"></div>




</div>
</template>

<script>
	export default {
    data() {
      return {
        showSidebar01: false,
        showSidebar02: false
      }
    },
		methods: {
      showHandle01 () {
        this.showSidebar01 = true
      },
      showHandle02 () {
        this.showSidebar02 = true
      },
    }
	};
</script>

<style lang="scss">
.components-content {
    .iconfont {
        margin-left: 25px;
    }
}

.side-box {
  padding: 10px;
  font-size: 12px;
  color: #9CDCFE;
}
</style>


