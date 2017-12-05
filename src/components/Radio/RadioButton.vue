<template>
	<label :class="computedClass">
		<input
			class="dy-radio-origin"
			type="radio"
			v-model="bindMsg"
			:disabled="isDisabled"
			:value="label"
			@focus="focusHandle"
			:checked="checked"
			:name="name"
		/>
        <slot></slot>
		<template v-if="!$slots.default">{{ label }}</template>
    </label>
</template>

<script>
	import Emitter from "../../mixins/emitter";
	export default {
		name: "dy-radio-button",
		mixins: [Emitter],
		props: {
			value: {},
			customClass: {
				type: String
			},
			name: String,
			label: {
				type: [String, Number, Boolean],
				required: true
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				checked: false
			};
		},
		methods: {
			focusHandle() {
				this.bindMsg = this.label;
			}
		},
		watch: {
			bindMsg(curVal, oldVal) {
				if (curVal === this.label) {
					this.checked = true;
				} else {
					this.checked = false;
				}
			}
		},
		computed: {
			computedClass() {
				const classes = [];
				classes.push("dy-radio-button");

				if (this.checked) {
					classes.push("dy-radio-button-checked")
				}

				if (this.isDisabled) {
                    classes.push('dy-radio-disabled');
                }

				return classes.join(" ");;
			},
			isGroup() {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options.name !== "dy-radio-group") {
						parent = parent.$parent;
					} else {
						this.radioGroup = parent;
						return true;
					}
				}
				return false;
			},
			bindMsg: {
				get() {
					return this.isGroup ? this.radioGroup.value : this.value;
				},
				set(val) {
					if (this.isGroup) {
						this.dispatch("dy-radio-group", "input", [val]);
					} else {
						this.$emit("input", val);
						this.$emit("change", val);
					}
				}
			},
			isDisabled() {
				return this.isGroup ?
					this.radioGroup.disabled || this.disabled :
					this.disabled;
			}
		},
		mounted() {
			this.checked = this.label === this.bindMsg;
		}
	};
</script>
