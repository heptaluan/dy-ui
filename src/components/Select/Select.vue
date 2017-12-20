<template>
    <div 
        class="dy-selected"
        :class="{ 'dy-select-active': isFocus }"
        ref="selectButton"
        @click.stop="toggleSelect"
        :style="selectBoxStyle"
    >
        <button class="dy-select-button dy-btn">
            <span class="dy-button-text">{{ text }}</span>
            <i class="dy-button-icon"></i>
        </button>

        <select-dropdown
            :options="options"
            :isFocus="isFocus"
            :maxHeight="maxHeight"
            :multiple="multiple"
            :width="width"
            :transition="transition"
            v-model="selectValue"
        ></select-dropdown>
    </div>
</template>

<script>
    
    import SelectDropdown from "./SelectDropDown";
    import * as doms from "../../utils/dom";

    export default {
        name: "dy-select",
        data() {
            return {
                isFocus: false,
                disabled: false,
                selectValue: []
            }
        },
        props: {
            placeholder: {
                type: String,
                default: "请选择"
            },
            width: {
                type: [String, Number]
            },
            maxHeight: {
                type: Number,
                default: 300
            },
            multiple: {
                type: Boolean,
                default: false
            },
            options: {
                type: Array,
                required: true
            },
            transition: {
                type: String,
                default: "slide-down"
            }
        },
        methods: {
            toggleSelect() {
                this.isFocus = !this.isFocus;
            },
            bodyClickHandle() {
                if (this.isFocus) {
                    this.toggleSelect();
                }
            }
        },
        watch: {
            selectValue(val, oldVal) {
                this.$emit("input", val);
                this.$emit("select", this.multiple ? val : val[0]);
                if (val.length >= oldVal.length) {
                    this.$emit("change", val[val.length - 1], true);
                } else {
                    this.$emit("change", val[val.length - 1], false);
                }
            }
        },
        computed: {
            text() {
                if (!this.selectValue.length) {
                    return this.placeholder;
                }

                const text = [];
                this.selectValue.forEach( (item) => {
                    text.push(item.label);
                })
                return text.join(",");
            },
            selectBoxStyle() {
                let style= {};

                if (this.width) {
                    style["width"] = `${this.width}px`;
                } else {
                    style["width"] = `200px`;
                }

                return style;
            }
        },
        components: {
            SelectDropdown
        },
        mounted() {
            doms.on(document.body, "click", this.bodyClickHandle);
        },
        beforeDestroy() {
            doms.off(document.body, "click", this.bodyClickHandle)
        }
    }
</script>