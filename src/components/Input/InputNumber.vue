<template>
    
    <div class="input-number">
        <div class="number-button">
            <a 
                @click="up"
                @mousedown="preventDefault"
                class="input-number-btn up-number"
                :class="{'upDisabled': this.upDisabled}"
            > + </a>
            <a 
                @click="down"
                @mousedown="preventDefault"
                class="input-number-btn down-number"
                :class="{'downDisabled': this.downDisabled}"
            > - </a>
        </div>
        
        <div class="input-number-wrapper">
            <input 
                :value="inputValue"
                @input="change"
                @change="change"
                @keydown.stop="keyDown"
            />
        </div>

    </div>

</template>

<script>
    
    export default {
        name: "dy-input-number",
        data() {
            return {
                upDisabled: false,
                downDisabled: false,
                currentValue: this.value
            }
        },
        props: {
            min: {
                type: Number,
                default: -Infinity
            },
            max: {
                type: Number,
                default: Infinity
            },
            step: {
                type: Number,
                default: 1
            },
            value: {
                type: [Number, String],
                default: 1
            },
            autofocus: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            inputValue() {
                return this.currentValue
            }
        },
        methods: {
            changeVal(val) {
                val = Number(val);
                if (!isNaN(val)) {
                    var step = this.step;

                    this.upDisabled = val + step > this.max;
                    this.downDisabled = val - step < this.min;
                } else {
                    this.upDisabled = true;
                    this.downDisabled = true;
                }
            },
            preventDefault(e) {
                e.preventDefault();
            },
            up(e) {
                const targetVal = Number(e.target.value);
                if (this.upDisabled && isNaN(targetVal)) {
                    return false;
                }
                this.changeStep('up', e);
            },
            down(e) {
                const targetVal = Number(e.target.value);
                if (this.downDisabled && isNaN(targetVal)) {
                    return false;
                }
                this.changeStep('down', e);
            },
            addNum(num1, num2) {
                let sq1, sq2, m;
                try {
                    sq1 = num1.toString().split('.')[1].length;
                } catch(e) {
                    sq1 = 0;
                }

                try {
                    sq2 = num2.toString().split('.')[1].length;
                } catch(e) {
                    sq2 = 0;
                }

                m = Math.pow(10, Math.max(sq1, sq2));
                return (Math.round(num1 * m) + Math.round(num2 * m)) / m
            },
            changeStep(type, e) {
                const targetVal = Number(e.target.value);
                let val = Number(this.currentValue);
                const step = Number(this.step);

                if (isNaN(val)) return false;
                if (!isNaN(targetVal)) {
                    if (type === 'up') {
                        if (this.addNum(targetVal, step) <= this.max) {
                            val = targetVal;
                        } else {
                            return false;
                        }
                    } else if (type === 'down') {
                        if (this.addNum(targetVal, -step) >= this.min) {
                            val = targetVal;
                        } else {
                            return false;
                        }
                    }
                }

                if (type === 'up') {
                    val = this.addNum(val, step);
                } else if(type === 'down') {
                    val = this.addNum(val, -step);
                }

                this.setValue(val);
            },
            setValue(val) {
                val = Number(Number(val).toFixed(0));

                this.$nextTick(() => {
                    this.currentValue = val;
                    this.$emit('input', val);
                    this.$emit('change', val);
                })
            },
            change(e) {
                let val = e.target.value.trim();
                if (e.type == 'input' && val.match(/^\-?\.?$|\.$/)) return;

                const { min, max } = this;
                const isEmptyValue = val.length === 0;
                val = Number(val);

                if (e.type === 'change') {
                    if (val === this.currentValue && val > min && val < max) return;
                }

                if (!isNaN(val) && !isEmptyValue) {
                    this.currentValue = val;

                    if (e.type === 'input' && val < min) return;
                    if (val > max) {
                        this.setValue(max);
                    } else if (val < min) {
                        this.setValue(min);
                    } else {
                        this.setValue(val);
                    }
                } else {
                    e.target.value = this.currentValue;
                }
            },
            keyDown (e) {
                if (e.keyCode === 38) {
                    e.preventDefault();
                    this.up(e);
                } else if (e.keyCode === 40) {
                    e.preventDefault();
                    this.down(e);
                }
            }
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.changeVal(this.currentValue)
            },
            min() {
                this.changeVal(this.currentValue);
            },
            max() {
                this.changeVal(this.currentValue);
            }
        },
        mounted() {
            this.changeVal(this.currentValue);
        }
    }

</script>