<template>
  <div class="back-to-top" @click="backToTop" v-show="showReturnToTop">
    <slot></slot>
  </div>
</template>

<script>
import { scrollIt } from "../../utils/scroll-it";

export default {
  name: "back-to-top",
  props: {
    pageY: {
      type: Number,
      default: 200
    },
    transitionName: {
      type: String,
      default: "linear"
    }
  },
  data() {
    return {
      showReturnToTop: false
    };
  },
  methods: {
    currentPageYOffset() {
      window.pageYOffset > this.pageY
        ? (this.showReturnToTop = true)
        : (this.showReturnToTop = false);
    },
    backToTop() {
      scrollIt(0, 300, this.transitionName, this.currentPageYOffset);
    }
  },
  created() {
    window.addEventListener("scroll", this.currentPageYOffset);
  },
  beforeDestroy() {
    window.addEventListener("scroll", this.currentPageYOffset);
  }
};
</script>