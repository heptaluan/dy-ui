<template>
  <div class="components-box">
    <div class="components-title">DropDown 下拉菜单</div>

    <div class="components-wrapper">
      <ul>
        <li>
          <div class="components-content">
            <h2 class="h2">DropDown 下拉菜单（默认，鼠标移入激活菜单）</h2>

            <dy-button v-dropdown:dropdown01>下拉菜单</dy-button>

            <dy-dropdown ref="dropdown01">
              <dy-dropdown-item>
                <a href="javascript:;">地瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">西瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">冬瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">南瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">草莓</a>
              </dy-dropdown-item>
            </dy-dropdown>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>
                使用
                <code>v-dropdown</code> 指令绑定需要显示的下拉菜单，下拉组件则需要指定与之对应的
                <code>ref</code> 的值
              </p>
              <p>
                然后只需使用
                <code>dy-dropdown</code> 组件包裹
                <code>dy-dropdown-item</code> 组件即可
              </p>
              <p>
                <code>dy-dropdown-item</code> 组件当中的内容可以自行定义
              </p>

              <br>
              <p>可选参数：</p>
              <p>
                <code>trigger</code> -- 下拉菜单触发方式，默认为
                <code>focus</code>，可选值为
                <code>click</code>
              </p>
              <p>
                <code>:header</code> -- 布尔值，指定下拉菜单标题（分组用），默认为
                <code>false</code>
              </p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button v-dropdown:dropdown01&gt;下拉菜单&lt;/dy-button&gt;

        &lt;dy-dropdown ref="dropdown01"&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;地瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;西瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;冬瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;南瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;草莓&lt;/a&gt;&lt;/dy-dropdown-item&gt;
        &lt;/dy-dropdown&gt;

    &lt;/template&gt;
    </code>
</pre>
        </li>
        <li>
          <div class="components-content">
            <h2 class="h2">DropDown 下拉菜单（点击激活菜单）</h2>

            <dy-button v-dropdown:dropdown02>下拉菜单</dy-button>

            <dy-dropdown ref="dropdown02" trigger="click">
              <dy-dropdown-item>
                <a href="javascript:;">地瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">西瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">冬瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">南瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">草莓</a>
              </dy-dropdown-item>
            </dy-dropdown>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>设置参数，改为点击触发下拉菜单</p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button v-dropdown:dropdown02&gt;下拉菜单&lt;/dy-button&gt;

        &lt;dy-dropdown ref="dropdown02" trigger="click"&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;地瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;西瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;冬瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;南瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;草莓&lt;/a&gt;&lt;/dy-dropdown-item&gt;
        &lt;/dy-dropdown&gt;

    &lt;/template&gt;
    </code>
</pre>
        </li>
        <li>
          <div class="components-content">
            <h2 class="h2">DropDown 下拉菜单（指定菜单标题）</h2>

            <dy-button v-dropdown:dropdown03>下拉菜单</dy-button>

            <dy-dropdown ref="dropdown03" trigger="click">
              <dy-dropdown-item :header="true">水果</dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">香蕉</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">西瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">草莓</a>
              </dy-dropdown-item>
              <dy-dropdown-item :header="true">蔬菜</dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">胡萝卜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">南瓜</a>
              </dy-dropdown-item>
              <dy-dropdown-item>
                <a href="javascript:;">冬瓜</a>
              </dy-dropdown-item>
            </dy-dropdown>
          </div>

          <div class="components-code">
            <div class="code-title">示例代码</div>
            <div class="code-tip">
              <p>
                设置
                <code>:header</code> 参数为
                <code>true</code>，指定菜单标题
              </p>
            </div>
          </div>

          <pre v-highlightjs>
    <code class="html">
    &lt;template&gt;
        
        &lt;dy-button v-dropdown:dropdown03&gt;下拉菜单&lt;/dy-button&gt;

        &lt;dy-dropdown ref="dropdown03" trigger="click"&gt;
            &lt;dy-dropdown-item :header="true"&gt;水果&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;香蕉&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;西瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;草莓&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item :header="true"&gt;蔬菜&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;胡萝卜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;南瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
            &lt;dy-dropdown-item&gt;&lt;a href="javascript:;"&gt;冬瓜&lt;/a&gt;&lt;/dy-dropdown-item&gt;
        &lt;/dy-dropdown&gt;

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
    return {};
  }
};
</script>

<style lang="scss">
</style>


