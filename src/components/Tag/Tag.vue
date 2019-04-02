<template>
  <span class="dy-tag" :class="computedClass">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "dy-tag",
  props: {
    isRound: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(val) {
        return ["default", "success", "info", "warning", "danger"].includes(val);
      }
    }
  },
  computed: {
    computedClass() {
      const classes = [];

      if (this.type) {
        classes.push(`dy-tag-${this.type}`);
      }

      if (this.isRound) {
        classes.push(`dy-tag-round`);
      }

      return classes;
    }
  }
};
</script>