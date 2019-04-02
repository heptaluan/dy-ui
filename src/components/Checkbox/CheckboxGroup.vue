<template>
  <div class="dy-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dy-checkbox-group",
  props: {
    value: {},
    props: String,
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    }
  },
  watch: {
    value(curVla, oldVal) {
      this.$emit("change", curVla);
    }
  }
};
</script>
