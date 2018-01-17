<template>
    <div class="dy-input-group-box">
        <input 
            v-if=" type != 'textarea' "
            class="dy-input"
            :class="computedClass"
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
            @change="changeHandle"
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
            @change="changeHandle"
            @input="inputHandle"
            @focus="focusHandle"
            @blur="blurHandle"
            ref="input"
        ></textarea>
        <div
            class="dy-input-error-msg"
            v-if="isError"
        >{{ errMsg }}</div>
    </div>
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
                default: "30px"
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
            regex: {
                type: [Object, String]
            },
            errorNotice: {
                type: String,
                default: "输入信息有误"
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
                curValue: this.value,
                isError: false,
                errMsg: ""
            }
        },
        watch: {
            value(curVal, oldVal) {
                if (this.validator(curVal)) {
                    this.isError = true;
                    return;
                }

                this.isError = false;
                this.curValue = curVal;
            },
            isError(curVal, oldVal) {
                if (curVal) {
                    this.showError();
                } else {
                    this.hideError();
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];

                if (this.isError) {
                    classes.push("dy-input-error")
                }

                if (this.disabled) {
                    classes.push("dy-input-disabled");
                }

                return classes.join(" ")
            },
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
            changeHandle(e) {
                this.$emit("change", e);
            },
            focusHandle(e) {
                this.$emit("focus", e)
            },
            blurHandle(e) {
                this.$emit("blur", e)
            },
            validator(curVal) {
                if (this.regex !== undefined && !new RegExp(this.regex).test(curVal)) {
                    this.errMsg = this.errorNotice;
                    return true;
                }
                return false;
            },
            showError(msg) {
                this.isError = true;
                this.errMsg = msg || this.errorNotice
            },
            hideError() {
                this.isError = false;
            }

        }
    }

</script>
