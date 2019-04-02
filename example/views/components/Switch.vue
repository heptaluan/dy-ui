<template>
  <div class="components-box">
    <div class="components-title">Switch 开关</div>

    <div class="components-wrapper">
      <ul>
        <li>
          <div class="components-content">
            <h2 class="h2">开关 - Switch（默认）</h2>
            <dy-switch v-model="switch1"></dy-switch>
          </div>

          <div class="components-content">
            <dy-switch v-model="switch2"></dy-switch>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>
                使用
                <code>v-model</code> 所绑定的值来决定初始值
              </p>

              <br>
              <p>参数设置如下：</p>
              <p>
                <code>inActiveText</code> -- 左侧文本内容
              </p>
              <p>
                <code>activeText</code> -- 右侧文本内容
              </p>
              <p>
                <code>disabled</code> -- 禁用选项
              </p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-switch v-model="switch1"&gt;&lt;/dy-switch&gt;

        &lt;dy-switch v-model="switch2"&gt;&lt;/dy-switch&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    switch1: false,
                    switch2: true
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>
        </li>
        <li>
          <div class="components-content">
            <h2 class="h2">开关 - Switch（添加文字提示）</h2>
            <dy-switch v-model="switch3" inActiveText="左侧" activeText="右侧"></dy-switch>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>
                使用
                <code>inActiveText</code> 和
                <code>activeText</code> 参数来设置左右显示的文字
              </p>
              <p>
                具体样式可以配合生成的
                <code>class</code> 的值
                <code>dy-switch-inActiveText</code> 和
                <code>dy-switch-activeText</code> 来进行设置
              </p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-switch
            v-model="switch3"
            inActiveText="左侧"
            activeText="右侧"
        &gt;&lt;/dy-switch&gt;

        &lt;dy-switch v-model="switch3"&gt;&lt;/dy-switch&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    switch3: false
                }
            }
        }
    &lt;/script&gt;
    </code>
</pre>
        </li>
        <li>
          <div class="components-content">
            <h2 class="h2">开关 - Switch（禁用状态）</h2>
            <dy-switch disabled v-model="switch4" inActiveText="左侧" activeText="右侧"></dy-switch>
          </div>

          <div class="components-content">
            <dy-switch disabled v-model="switch5" inActiveText="左侧" activeText="右侧"></dy-switch>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>
                添加
                <code>disabled</code> 参数即可
              </p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;

        &lt;dy-switch 
            disabled
            v-model="switch4"
            inActiveText="左侧"
            activeText="右侧"
        &gt;&lt;/dy-switch&gt;

        &lt;dy-switch 
            disabled
            v-model="switch5"
            inActiveText="左侧"
            activeText="右侧"
        &gt;&lt;/dy-switch&gt;

    &lt;/template&gt;

    &lt;script&gt;
        export default {
            data() {
                return {
                    switch4: false,
                    switch5: true
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
      switch1: false,
      switch2: true,
      switch3: false,
      switch4: false,
      switch5: true
    };
  }
};
</script>

<style lang="scss">
</style>


