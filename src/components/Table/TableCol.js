export default {
  name: "dy-table-col",
  props: {
    prop: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    width: Number
  },
  created() {
    if (this.$parent.$options._componentTag === "dy-table") {
      this.$parent.appendField(this.$options.propsData);
    }
  },
  render() {
    return null;
  }
}