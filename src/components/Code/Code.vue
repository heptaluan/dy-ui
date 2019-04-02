<template>
  <pre>
        <code :class="syntax" ref="code">
            <slot></slot>
        </code>
    </pre>
</template>

<script>
export default {
  name: "dy-code",
  props: {
    syntax: {
      type: String,
      default: "javascript"
    }
  },
  mounted() {
    hljs.highlightBlock(this.$refs["code"]);
  }
};
</script>

<style lang="scss">
.hljs {
  font-family: Monaco, Menlo, Consolas, Courier New, FontAwesome, monospace;
  font-size: 14px;
}
</style>
