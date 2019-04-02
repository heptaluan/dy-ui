<template>
  <transition :name="transition">
    <ul
      v-if="visible"
      class="dy-dropdown-box"
      :class="{'dy-dropdown-active': this.visible}"
      @mouseenter="mouseenterHandle"
      @mouseleave="mouseleaveHandle"
    >
      <slot></slot>
    </ul>
  </transition>
</template>

<script>
import Popup from "../../mixins/popup";
import { on, off } from "../../utils/dom";

export default {
  name: "dy-dropdown",
  mixins: [Popup],
  props: {
    trigger: {
      type: String,
      default: "focus",
      validator(value) {
        return ["focus", "click"].includes(value);
      }
    },
    fix: {
      type: Number,
      default: 0
    },
    delay: {
      type: Number,
      default: 100
    },
    transition: {
      type: String,
      default: "slide-down"
    }
  },
  methods: {
    clickHandle(e) {
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }

      e.stopPropagation();
    },
    globalClickHandle() {
      if (this.visible) {
        this.hide();
      }
    },
    delayHide() {
      if (this.timer !== null) {
        clearTimeout(this.timer);
      }

      this.timer = setTimeout(this.hide, this.delay);
    },
    mouseleaveHandle() {
      if (this.trigger !== "click") {
        this.hide();
      }
    },
    mouseenterHandle() {
      if (this.trigger !== "click") {
        if (this.timer !== null) {
          clearTimeout(this.timer);
        }
      }
    },
    popupPosition() {
      const $dropdown = this.$el;
      const $reference = this.$refs["reference"];
      const { top, left, height } = $reference.getBoundingClientRect();
      const { height: selfHeight } = $dropdown.getBoundingClientRect();
      const { top: offsetTop, left: offsetLeft } = this.getPageOffset();
      const ret = { zIndex: this.getZIndex() };

      ret["left"] = `${offsetLeft + left}px`;
      ret["top"] = `${offsetTop + top + height + this.fix}px`;

      return ret;
    }
  },
  beforeDestroy() {
    document.body.removeChild(this.$el);

    let $reference;
    return new Promise((resolv, reject) => {
      resolv(this);
    }).then(element => {
      $reference = element.$refs["reference"];
      if (this.trigger === "click") {
        $reference.removeEventListener("click", this.clickHandle);
        document.body.removeEventListener("click", this.globalClickHandle);
      } else {
        $reference.removeEventListener("mouseenter", this.show);
        $reference.removeEventListener("mouseleave", this.delayHide);
      }
    });
  },
  mounted() {
    document.body.appendChild(this.$el);

    let $reference;
    return new Promise((resolv, reject) => {
      resolv(this);
    }).then(element => {
      $reference = element.$refs["reference"];
      if (this.trigger === "click") {
        $reference.addEventListener("click", this.clickHandle);
        document.body.addEventListener("click", this.globalClickHandle);
      } else {
        $reference.addEventListener("mouseenter", this.show);
        $reference.addEventListener("mouseleave", this.delayHide);
      }
    });
  }
};
</script>