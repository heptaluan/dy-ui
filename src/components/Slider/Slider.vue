<template>
	<div class="dy-slider" :class="{ 'dy-slider--with-input': showInput }">
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
			<div class="dy-slider-bar" :style="barStyle">
			</div>
			<slider-button v-model="inputValue" ref="button1">
			</slider-button>
			<div class="dy-slider-stop" v-for="item in stops" :key="item" :style="{ 'left': item + '%' }" v-if="showStops">
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
	import {
		Input
	} from "../Input";
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
			showStops: {
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
				if (this.dragging ||
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
			setPosition(percent) {
				const targetValue = this.min + percent * (this.max - this.min) / 100;
				this.$refs.button1.setPosition(percent);
			},
			onSliderClick(event) {
				if (this.dragging) return;
				this.resetSize();
				const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
				this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
				this.emitChange();
			},
			resetSize() {
				if (this.$refs.slider) {
					this.sliderSize = this.$refs.slider[`clientWidth`];
				}
			},
			emitChange() {
				this.$nextTick(() => {
					this.$emit("change", this.value);
				});
			}
		},
		computed: {
			stops() {
				if (this.step === 0) {
					return [];
				}
				const stopCount = (this.max - this.min) / this.step;
				const stepWidth = 100 * this.step / (this.max - this.min);
				const result = [];
				for (let i = 1; i < stopCount; i++) {
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
			precision() {
				let precisions = [this.min, this.max, this.step].map(item => {
					let decimal = ("" + item).split(".")[1];
					return decimal ? decimal.length : 0;
				});
				return Math.max.apply(null, precisions);
			},
			barStyle() {
				return {
					width: this.barSize,
					left: this.barStart
				};
			}
		},
		mounted() {
			let valuetext;
			if (typeof this.value !== "number" || isNaN(this.value)) {
				this.inputValue = this.min;
			} else {
				this.inputValue = Math.min(this.max, Math.max(this.min, this.value));
			}
			this.oldValue = this.inputValue;
			valuetext = this.inputValue;
			this.resetSize();
			window.addEventListener("resize", this.resetSize);
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.resetSize);
		}
	};
</script>
