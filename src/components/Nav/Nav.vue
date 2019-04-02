<template>
  <ul class="dy-nav" :navActiveIndex="navActiveIndex">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "dy-nav",
  props: {
    navActiveIndex: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>