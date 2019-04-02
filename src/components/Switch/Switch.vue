<template>
  <div
    class="dy-switch"
    :class="{ 'dy-switch-disabled': disabled, 'dy-checked': checked, 'dy-switch-active': value }"
  >
    <span
      class="dy-switch-inActiveText"
      :class="{ 'dy-switch-text-toggle': !value, 'dy-switch-text': true }"
      v-if="inActiveText"
    >{{ inActiveText }}</span>
    <span class="dy-switch-box" :style="{ 'width': coreWidth + 'px' }" @click="switchHandle">
      <span class="dy-switch-btn" :style="{ transform }">
        <input
          type="checkbox"
          class="dy-switch-toggleInput"
          ref="input"
          :name="name"
          :disabled="disabled"
          v-model="bindMsg"
          :value="bindMsg"
        >
      </span>
    </span>
    <span
      class="dy-switch-activeText"
      :class="{ 'dy-switch-text-toggle': value, 'dy-switch-text': true }"
      v-if="activeText"
    >{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: "dy-switch",
  data() {
    return {
      bindMsg: this.value,
      coreWidth: this.width
    };
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "dy-switch"
    },
    inActiveText: String,
    activeText: String
  },
  watch: {
    bindMsg(curVal, oldVal) {
      this.$emit("input", curVal);
    }
  },
  computed: {
    transform() {
      return this.value ? `translate3d(${this.coreWidth - 20}px, 0, 0)` : "";
    }
  },
  methods: {
    switchHandle() {
      this.$refs.input.click();
    }
  },
  mounted() {
    this.coreWidth = this.width || 40;
  }
};
</script>