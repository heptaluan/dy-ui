<template>
  <div
    class="dy-tab-list"
    :class="{ 'dy-list-active': (this.$parent.listActiveIndex === this._uid) }"
  >
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "dy-tab-list",
  props: {
    label: String,
    active: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options._componentTag === "dy-tab") {
        parent.renderList(this);
        break;
      }
      parent = parent.$parent;
    }
  }
};
</script>