<template>
    <input 
        v-if=" type != 'textarea' "
        class="dy-input"
        :style="styles"
        :type="type"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :name="name"
        :max="max"
        :min="min"
        :step="step"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :form="form"
        :value="curValue"
        @input="inputHandle"
        @focus="focusHandle"
        @blur="blurHandle"
        ref="input"
    />
    <textarea
        v-else
        class="dy-textarea"
        :style="styles"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :name="name"
        :max="max"
        :min="min"
        :step="step"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :form="form"
        :value="curValue"
        @input="inputHandle"
        @focus="focusHandle"
        @blur="blurHandle"
        ref="input"
    ></textarea>
</template>

<script>
    
    export default {
        name: "dy-input",
        props: {
            value: {},
            w: {
                type: String,
                default: "100%"
            },
            h: {
                type: String,
                default: "40px"
            },
            type: {
                type: String,
                default: "text"
            },
            maxLen: {
                type: Number,
                default: 0
            },
            minLen: {
                type: Number,
                default: 0
            },

            // 原生属性
            name: String,
            form: String,
            max: {},
            min: {},
            step: {},
            placeholder: {
                type: String,
                default: "请输入内容"
            },
            readonle: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                validator(value) {
                    return ["off", "on"].includes(value);
                }
            },
            resize: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                curValue: this.value
            }
        },
        computed: {
            styles() {
                let style = {}

                if (this.w) {
                    style["width"] = `${this.w}`;
                } 

                if (this.h) {
                    style["height"] = `${this.h}`;
                }

                if (this.resize) {
                    style["resize"] = `vertical`;
                }

                return style;
            }
        },
        methods: {
            inputHandle(e) {
                const value = e.target.value;
                this.$emit("input", value);
                this.curValue = value;
            },
            focusHandle(e) {
                this.$emit("focus", e)
            },
            blurHandle(e) {
                this.$emit("blur", e)
            }
        }
    }

</script>
