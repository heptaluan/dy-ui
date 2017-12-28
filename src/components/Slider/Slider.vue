<template>
	<div class="dy-slider">
		<dy-input 
			v-model="inputValue" 
			v-if="showInput" 
			class="dy-slider-input" 
			ref="input" 
			@change="$nextTick(emitChange)" 
			:step="step" 
			:min="min" 
			:max="max"
		>
		</dy-input>
		<div class="dy-slider-box" :class="{ 'show-input': showInput }" @click="onSliderClick" ref="slider">
			<div class="dy-slider-bar" :style="barStyle"></div>
			<slider-button v-model="inputValue" ref="button">
				<span class="dy-slider-box-tooltip" v-if="showTooltip" ref="tooltip">{{ inputValue }}</span>
			</slider-button>
			<div class="dy-slider-step" v-for="item in steps" :key="item" :style="{ 'left': item + '%' }" v-if="showSteps"></div>
		</div>
		
	</div>
</template>

<script type="text/babel">

	import { Input } from "../Input";
	import SliderButton from "./SliderButton";

	export default {
		name: "dy-slider",
		props: {
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 100
			},
			step: {
				type: Number,
				default: 1
			},
			value: {
				type: [Number, String],
				default: 0
			},
			showInput: {
				type: Boolean,
				default: false
			},
			showSteps: {
				type: Boolean,
				default: false
			},
			showTooltip: {
				type: Boolean,
				default: false
			}
		},
		components: {
			SliderButton
		},
		data() {
			return {
				inputValue: null,
				oldValue: null,
				dragging: false,
				sliderSize: 1
			};
		},
		watch: {
			value(val, oldVal) {
				if (
					this.dragging ||
					Array.isArray(val) &&
					Array.isArray(oldVal) &&
					val.every((item, index) => item === oldVal[index])) {
					return;
				}
				this.setValues();
			},
			dragging(val) {
				if (!val) {
					this.setValues();
				}
			},
			inputValue(val) {
				this.$emit("input", val);
				this.setToolTipPosition();
			},
			min() {
				this.setValues();
			},
			max() {
				this.setValues();
			}
		},
		methods: {
			valueChanged() {
				return this.value !== this.oldValue;
			},
			setValues() {
				const val = this.value;
				if (typeof val === "number" && !isNaN(val)) {
					if (val < this.min) {
						this.$emit("input", this.min);
					} else if (val > this.max) {
						this.$emit("input", this.max);
					} else {
						this.inputValue = val;
						if (this.valueChanged()) {
							this.oldValue = val;
						}
					}
				}
			},
			onSliderClick(e) {
				if (this.dragging) return;
				this.resetSize();
				this.emitChange();

				// 调用 SliderButton 组件的 setPosition() 方法来定位按钮
				const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
				this.$refs.button.setPosition((e.clientX - sliderOffsetLeft) / this.sliderSize * 100);
			},
			// 避免 input 出现或者消失引起的定位问题
			resetSize() {
				if (this.$refs.slider) {
					this.sliderSize = this.$refs.slider[`clientWidth`];
				}
			},
			emitChange() {
				this.$nextTick(() => {
					this.$emit("change", this.value);
				});
			},
			setToolTipPosition() {
				// 避免数字过大 tooltip 定位偏差
				if (this.showTooltip) {
					let l = this.inputValue.toString().length;
					if (l == 2) {
						this.$refs.tooltip.style.left = `0px`
					} else if (l < 2) {
						this.$refs.tooltip.style.left = `3px`
					} else {
						this.$refs.tooltip.style.left = `-${ (l - 2) * 4 }px`
					}
				}
			}
		},
		computed: {
			steps() {
				if (this.step === 0) {
					return [];
				}

				// 计算间断点距离
				const stepCount = (this.max - this.min) / this.step;
				const stepWidth = 100 * this.step / (this.max - this.min);
				const result = [];
				for (let i = 1; i < stepCount; i++) {
					result.push(i * stepWidth);
				}
				return result.filter(step => step > 100 * (this.inputValue - this.min) / (this.max - this.min));
			},
			barSize() {
				return `${ 100 * (this.inputValue - this.min) / (this.max - this.min) }%`;
			},
			barStart() {
				return `0%`;
			},
			barStyle() {
				return {
					width: this.barSize,
					left: this.barStart
				};
			}
		},
		mounted() {
			// 初始化 赋值显示
			if (typeof this.value !== "number" || isNaN(this.value)) {
				this.inputValue = this.min;
			} else {
				this.inputValue = Math.min(this.max, Math.max(this.min, this.value));
			}
			this.oldValue = this.inputValue;
			this.resetSize();
			this.setToolTipPosition();
			window.addEventListener("resize", this.resetSize);
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.resetSize);
		}
	};
</script>