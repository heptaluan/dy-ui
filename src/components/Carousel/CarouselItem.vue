<template>
  <li class="dy-carousel-item" :style="{ transform: 'translateX('+ translate + 'px)' }">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "dy-carousel-item",
  data() {
    return {
      translate: 0
    };
  },
  methods: {
    translateItemHandle(x) {
      this.translate = x;
    }
  }
};
</script>