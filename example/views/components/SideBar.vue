<template>
<div class="components-box">

        <div class="components-title">SideBar 侧边栏</div>

        <div class="components-wrapper">
            <ul>
                <li>

<div class="components-content">
    <h2 class="h2">SideBar 侧边栏</h2>
    <dy-button @click="showHandle">侧边栏</dy-button>
    <dy-sidebar :is-show.sync="showSidebar" :width="280">
      <p>这里是侧边栏弹出层的内容部分</p>
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
    </div>
</div>

<pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
      &lt;dy-button @click="showHandle"&gt;侧边栏&lt;/dy-button&gt;
      &lt;dy-sidebar :is-show.sync="showSidebar" :width="280"&gt;
        &lt;p&gt;这里是侧边栏弹出层的内容部分&lt;/p&gt;
      &lt;/dy-sidebar&gt;

    &lt;/template&gt;
    &lt;script&gt;
      export default {
        data () {
          return {
            showSidebar: false
          }
        },
        methods: {
          showHandle () {
            this.showSidebar = true
          }
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
        showSidebar: false
      }
    },
		methods: {
      showHandle () {
        this.showSidebar = true
      }
    }
	};
</script>

<style lang="scss">
.components-content {
    .iconfont {
        margin-left: 25px;
    }
}

</style>


