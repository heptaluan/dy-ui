<template>
  <div id="app">
    <hr>

    <div class="box">
      <h2 class="h2">ToolTip</h2>
      <div class="tooltip">
        <div class="top">
          <dy-tooltip content="这里是提示这里是提示" placement="top-start">
            <dy-button>上左</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="top">
            <dy-button>正上</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="top-end">
            <dy-button>上右</dy-button>
          </dy-tooltip>
        </div>

        <div class="left">
          <dy-tooltip content="这里是提示这里是提示" placement="left-start">
            <dy-button>左上</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="left">
            <dy-button>正左</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="left-end">
            <dy-button>左下</dy-button>
          </dy-tooltip>
        </div>
        <div class="right">
          <dy-tooltip content="这里是提示这里是提示" placement="right-start">
            <dy-button>右上</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="right">
            <dy-button>正右</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="right-end">
            <dy-button>右下</dy-button>
          </dy-tooltip>
        </div>
        <div class="bottom">
          <dy-tooltip content="这里是提示这里是提示" placement="bottom-start">
            <dy-button>下左</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="bottom">
            <dy-button>正下</dy-button>
          </dy-tooltip>
          <dy-tooltip content="这里是提示这里是提示" placement="bottom-end">
            <dy-button>右下</dy-button>
          </dy-tooltip>
        </div>
      </div>
    </div>

    <hr>

    <div class="box">
      <h2 class="h2">通知</h2>
      <dy-button @click="click1">默认通知</dy-button>
      <dy-button @click="click2">成功通知</dy-button>
      <dy-button @click="click3">警告通知</dy-button>
      <dy-button @click="click4">危险通知</dy-button>
    </div>

    <div class="box">
      <h2 class="h2">通知（带关闭按钮）</h2>
      <dy-button @click="click5">默认通知</dy-button>
      <dy-button @click="click6">成功通知</dy-button>
    </div>

    <div class="box">
      <h2 class="h2">通知（文字居中）</h2>
      <dy-button @click="click7">默认通知</dy-button>
      <dy-button @click="click8">成功通知</dy-button>
    </div>

    <div class="msgBox">
      <h2 class="h2">消息提示</h2>
      <dy-button @click="click9">默认消息提示</dy-button>
      <dy-button @click="click10">成功消息提示</dy-button>
      <dy-button @click="click11">警告消息提示</dy-button>
      <dy-button @click="click12">错误消息提示</dy-button>
    </div>

    <hr>
    <!-- alert -->
    <div class="box">
      <h2 class="h2">Alert</h2>
      <dy-button @click="showAlert">Alert</dy-button>
      <dy-alert :isShow.sync="alertVisible" titleText="标题" @submit="alertSubmitHandle">信息内容</dy-alert>
    </div>

    <!-- confirm -->
    <div class="box">
      <h2 class="h2">Confirm</h2>
      <dy-button @click="showConfirm">Confirm</dy-button>
      <dy-confirm
        :isShow.sync="confirmVisible"
        titleText="删除文件"
        @cancel="cancelHandle"
        @confirm="confirmHandle"
      >此操作将会删除该文件, 是否继续?</dy-confirm>
    </div>

    <!-- Prompt -->
    <div class="box">
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
      >请输入手机号码</dy-prompt>

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
      >请输入邮箱地址</dy-prompt>
    </div>

    <hr>
    <!-- model -->
    <div class="box">
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
          <dy-button size="m" @click="model1">取消</dy-button>
          <dy-button type="primary" size="m" @click="model2">确定</dy-button>
        </footer>
      </dy-model>
    </div>

    <hr>
    <div class="box">
      <h2 class="h2">Slider 默认</h2>
      <dy-slider v-model="sliderVal1"></dy-slider>
    </div>
    <div class="box">
      <h2 class="h2">Slider 默认（自定义初始值）</h2>
      <dy-slider v-model="sliderVal2"></dy-slider>
    </div>

    <div class="box">
      <h2 class="h2">Slider 显示tooltip</h2>
      <dy-slider v-model="sliderVal3" showTooltip></dy-slider>
    </div>

    <div class="box">
      <h2 class="h2">Slider 显示输入框</h2>
      <dy-slider v-model="sliderVal4" showTooltip showInput></dy-slider>
    </div>
    <div class="box">
      <h2 class="h2">Slider 输入框限定范围值（100-1000）</h2>
      <dy-slider v-model="sliderVal5" showTooltip showInput :min="100" :max="1000"></dy-slider>
    </div>

    <div class="box">
      <h2 class="h2">Slider 离散值</h2>
      <dy-slider v-model="sliderVal6" showTooltip show-input :step="10"></dy-slider>
    </div>
    <div class="box">
      <h2 class="h2">Slider 离散值（显示间断点）</h2>
      <dy-slider v-model="sliderVal7" showTooltip show-input :step="20" show-stops></dy-slider>
    </div>

    <hr>
    <div class="box">
      <h2 class="h2">代码展示</h2>
      <dy-code :scrollable="true">
        window.addEventListener('load', function() {
        FastClick.attach(document.body);
        }, false);
      </dy-code>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      emailMsg: "",
      radio1: "",
      radio2: "葡萄",
      radio3: "",
      radio4: "",
      radio5: "苹果",
      radio6: "",
      checkbox1: [],
      checkbox2: ["苹果", "葡萄"],
      checkbox3: ["苹果"],
      checkbox4: [],
      checkbox5: ["苹果"],
      v1: false,
      v2: false,
      v3: false,
      v4: true,
      alertVisible: false,
      confirmVisible: false,
      modelVisible: false,
      prompt001: false,
      prompt002: false,
      promptTel: "",
      promptEmail: "",
      sliderVal1: 0,
      sliderVal2: 20,
      sliderVal3: 5,
      sliderVal4: 30,
      sliderVal5: 420,
      sliderVal6: 10,
      sliderVal7: 20,
      tableData: [
        {
          num: 1,
          title: "苹果",
          date: "2017-12-12"
        },
        {
          num: 2,
          title: "香蕉",
          date: "2017-12-12"
        },
        {
          num: 3,
          title: "葡萄",
          date: "2017-12-12"
        },
        {
          num: 4,
          title: "西瓜",
          date: "2017-12-12"
        }
      ],
      tableSelect1: [],
      tableSelect2: []
    };
  },
  methods: {
    click() {
      this.loading = true;
      // ..
    },
    click1() {
      this.$notify({
        message: "这是一条默认信息",
        delay: 2000,
        type: "default"
      });
    },
    click2() {
      this.$notify({
        message: "这是一条成功信息",
        delay: 2000,
        type: "success"
      });
    },
    click3() {
      this.$notify({
        message: "这是一条警告信息",
        delay: 2000,
        type: "waring"
      });
    },
    click4() {
      this.$notify({
        message: "这是一条危险信息",
        delay: 2000,
        type: "danger"
      });
    },
    click5() {
      this.$notify({
        message: "这是一条默认信息",
        delay: 2000,
        type: "default",
        close: true,
        onClick() {
          console.log(`...`);
        }
      });
    },
    click6() {
      this.$notify({
        message: "这是一条成功信息",
        delay: 2000,
        type: "success",
        close: true,
        onClick() {
          console.log(`...`);
        }
      });
    },
    click7() {
      this.$notify({
        message: "这是一条默认信息",
        delay: 2000,
        type: "default",
        close: true,
        onClick() {
          console.log(`...`);
        },
        align: "center"
      });
    },
    click8() {
      this.$notify({
        message: "这是一条成功信息",
        delay: 2000,
        type: "success",
        close: true,
        onClick() {
          console.log(`...`);
        },
        align: "center"
      });
    },
    click9() {
      this.$message({
        title: "测试",
        message: "测试测试测试测试测试测试",
        type: "default",
        placement: "left-bottom",
        delay: 2000
      });
    },
    click10() {
      this.$message({
        title: "测试",
        message: "测试测试测试测试测试测试",
        type: "success",
        placement: "left-top",
        delay: 2000
      });
    },
    click11() {
      this.$message({
        title: "测试",
        message: "测试测试测试测试测试测试",
        type: "waring",
        placement: "right-bottom",
        delay: 2000,
        close: true
      });
    },
    click12() {
      this.$message({
        title: "测试",
        message: "测试测试测试测试测试测试",
        type: "danger",
        placement: "right-top",
        delay: 2000,
        close: true
      });
    },

    // Alert
    showAlert() {
      this.alertVisible = true;
    },
    alertSubmitHandle() {
      setTimeout(() => {
        this.$notify({
          message: "成功提交",
          type: "success",
          delay: 2000
        });
      }, 300);
    },

    // Confirm
    showConfirm() {
      this.confirmVisible = true;
    },
    cancelHandle() {
      setTimeout(() => {
        this.$notify({
          message: "删除成功",
          type: "success",
          delay: 2000
        });
      }, 300);
    },
    confirmHandle() {
      setTimeout(() => {
        this.$notify({
          message: "删除取消",
          type: "default",
          delay: 2000
        });
      }, 300);
    },

    // Prompt
    showPrompt001() {
      this.prompt001 = true;
    },
    prompt1() {
      setTimeout(() => {
        this.$notify({
          message: `您输入的手机号码为 ${this.promptTel}`,
          type: "success",
          delay: 2000
        });
      }, 300);
    },
    prompt2() {
      setTimeout(() => {
        this.$notify({
          message: "取消输入",
          type: "default",
          delay: 2000
        });
      }, 300);
    },

    showPrompt002() {
      this.prompt002 = true;
    },
    prompt3() {
      setTimeout(() => {
        this.$notify({
          message: `您输入的邮箱地址为 ${this.promptEmail}`,
          type: "success",
          delay: 2000
        });
      }, 300);
    },
    prompt4() {
      setTimeout(() => {
        this.$notify({
          message: "取消输入",
          type: "default",
          delay: 2000
        });
      }, 300);
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
  },
  mounted() {
    // console.log(hljs)
  }
};
</script>

<style lang="scss">
#app {
  width: 1000px;
  margin: 50px auto;

  .box {
    width: 100%;
    margin-bottom: 20px;

    .h2 {
      font-size: 16px;
      margin: 15px 0;
    }

    .m {
      margin: 15px 0;
    }

    .subBox {
      margin-top: 20px;
    }
  }
}

.tooltip {
  width: 400px;
  margin: 50px auto;

  button {
    margin: 10px;
  }

  .top {
    text-align: center;
    width: 430px;
  }

  .left {
    float: left;
    width: 90px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
    width: 430px;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}

.msgBox {
  width: 525px;
  margin: 0 auto 50px;

  h2 {
    font-size: 16px;
    margin: 15px 0;
  }
}
</style>


