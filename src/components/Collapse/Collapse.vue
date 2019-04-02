<template>
  <div class="dy-collpase">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dy-collapse",
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number]
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    setActive() {
      // 得到当前激活的选项，然后赋予子元素
      const activeKey = this.getActiveKey();

      this.$children.forEach((child, index) => {
        // name 为传递进来的列表序列
        const name = child.name || index.toString();
        let isActive = activeKey.indexOf(name) > -1;

        child.isActive = isActive;
        child.index = index;
      });
    },
    getActiveKey() {
      // 获取传递进来的展开选项
      let activeKey = this.currentValue || [];

      // 手风琴选项
      const accordion = this.accordion;

      // 将传递的值转为数组，如 1 ==> [1]
      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey];
      }

      // 如果开启了手风琴，且传递的是一个数组，则默认展开第一项
      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0]];
      }

      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString();
      }

      return activeKey;
    },
    toggle(data) {
      // 子元素调用的点击方法
      // 创建一个新数组用于存放当前激活的选项，然后赋值给 currentValue
      const name = data.name.toString();
      let newActiveKey = [];

      if (this.accordion) {
        if (!data.isActive) {
          newActiveKey.push(name);
        }
      } else {
        let activeKey = this.getActiveKey();
        const nameIndex = activeKey.indexOf(name);

        if (data.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1);
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name);
          }
        }
        newActiveKey = activeKey;
      }

      this.currentValue = newActiveKey;
      this.$emit("input", newActiveKey);
      this.$emit("change", newActiveKey);
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue() {
      this.setActive();
    }
  },
  mounted() {
    this.setActive();
  }
};
</script>