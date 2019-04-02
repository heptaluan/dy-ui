<template>
  <div
    class="dy-slider-button-box"
    @mouseenter="mouseEnterHandle"
    @mouseleave="mouseLeaveHandle"
    @mousedown="onButtonDown"
    :class="{ 'hover': hovering, 'dragging': dragging }"
    :style="styles"
    ref="button"
    @focus="mouseEnterHandle"
    @blur="mouseLeaveHandle"
  >
    <div class="dy-slider-button" :class="{ 'hover': hovering, 'dragging': dragging }"></div>
    <slot></slot>
  </div>
</template>
 
<script>
export default {
  name: "dy-slider-button",
  props: {
    value: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startPosition: 0,
      newPosition: null,
      oldValue: this.value
    };
  },
  computed: {
    max() {
      return this.$parent.max;
    },
    min() {
      return this.$parent.min;
    },
    step() {
      return this.$parent.step;
    },
    currentPosition() {
      return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
    },
    styles() {
      return {
        left: this.currentPosition
      };
    }
  },
  watch: {
    dragging(val) {
      this.$parent.dragging = val;
    }
  },
  methods: {
    mouseEnterHandle() {
      this.hovering = true;
    },
    mouseLeaveHandle() {
      this.hovering = false;
    },
    onButtonDown(e) {
      e.preventDefault();
      this.onDragStart(e);
      window.addEventListener("mousemove", this.onDragging);
      window.addEventListener("mouseup", this.onDragEnd);
      window.addEventListener("contextmenu", this.onDragEnd);
    },
    onDragStart(e) {
      this.dragging = true;
      this.isClick = true;

      // 记录开始拖拽的位置
      this.startX = e.clientX;
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;
    },
    onDragging(e) {
      if (this.dragging) {
        this.isClick = false;
        let diff = 0;

        // 需要判断是否有 input 的存在
        this.$parent.resetSize();

        // 记录鼠标位置
        this.currentX = e.clientX;

        // 计算插值
        diff = ((this.currentX - this.startX) / this.$parent.sliderSize) * 100;

        // 设置位置
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
        this.$parent.setToolTipPosition();
      }
    },
    onDragEnd() {
      if (this.dragging) {
        setTimeout(() => {
          this.dragging = false;
          if (!this.isClick) {
            this.setPosition(this.newPosition);
            this.$parent.emitChange();
          }
        }, 0);
        window.removeEventListener("mousemove", this.onDragging);
        window.removeEventListener("mouseup", this.onDragEnd);
        window.removeEventListener("contextmenu", this.onDragEnd);
      }
    },
    setPosition(newPosition) {
      if (newPosition === null) return;
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > 100) {
        newPosition = 100;
      }

      // 计算 step
      const lengthPerStep = 100 / ((this.max - this.min) / this.step);
      const steps = Math.round(newPosition / lengthPerStep);

      let value = (
        steps * lengthPerStep * (this.max - this.min) * 0.01 +
        this.min
      ).toFixed(0);
      this.$emit("input", value);

      if (!this.dragging && this.value !== this.oldValue) {
        this.oldValue = this.value;
      }
    }
  }
};
</script>
