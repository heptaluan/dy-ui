<template>
  <i class="iconfont" :style="styles" v-html="type"></i>
</template>

<script>
export default {
  name: "dy-icon",
  props: {
    type: String,
    size: [Number, String]
  },
  computed: {
    styles() {
      let style = {};
      style["display"] = `inline-block`;

      if (this.size) {
        style["font-size"] = `${this.size}px`;
        style["line-height"] = `${this.size}px`;
      }

      return style;
    }
  }
};
</script>