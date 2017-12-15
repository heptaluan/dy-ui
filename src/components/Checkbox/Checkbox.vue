<template>
	<label :class="computedClass">
			<span class="dy-checkbox-icons">
				<input
					class="dy-checkbox-origin"
					type="checkbox"
					v-model="bindMsg"
					:disabled="isDisabled"
					:value="label"
					:name="name"
				/> 
	        </span>
	        <slot></slot>
			<template v-if="!$slots.default && showLabel">{{ label }}</template>
    </label>
</template>

<script>
	import Emitter from "../../mixins/emitter";
	export default {
		name: "dy-checkbox",
		mixins: [Emitter],
		props: {
			value: {},
			customClass: {
				type: String
			},
			name: String,
			label: {
				type: [String, Number, Boolean]
			},
			disabled: {
				type: Boolean,
				default: false
			},
			showLabel: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			computedClass() {
				const classes = [];
				classes.push("dy-checkbox");
				if (this.checked) {
					classes.push("dy-checkbox-checked");
				}
				if (this.isDisabled) {
					classes.push("dy-checkbox-disabled");
				}
				return classes.join(" ");
			},
			checked() {
				if ({}.toString.call(this.bindMsg) === "[object Boolean]") {
					return this.bindMsg;
				} else if (Array.isArray(this.bindMsg)) {
					return this.bindMsg.indexOf(this.label) > -1;
				}
			},
			isGroup() {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options.name !== "dy-checkbox-group") {
						parent = parent.$parent;
					} else {
						this.checkboxGroup = parent;
						return true;
					}
				}
				return false;
			},
			bindMsg: {
				get() {
					return this.isGroup ? this.checkboxGroup.value : this.value;
				},
				set(val) {
					if (this.isGroup) {
						let limitChecked = false;
						if (this.checkboxGroup.min !== undefined && val.length < this.checkboxGroup.min) {
							limitChecked = true;
						}
						if (this.checkboxGroup.max !== undefined && val.length > this.checkboxGroup.max) {
							limitChecked = true;
						}
						if (!limitChecked) {
							this.dispatch("dy-checkbox-group", "input", [val]);
						}
					} else {
						this.$emit("input", val);
						this.$emit("change", val);
					}
				}
			},
			isDisabled() {
				return this.isGroup ?
					this.checkboxGroup.disabled || this.disabled :
					this.disabled;
			}
		}
	};
</script>
