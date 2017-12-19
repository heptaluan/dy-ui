<template>
    <transition :name="transition">
        <div class="dy-select-box" v-if="visible">
            <ul class="dy-select-list" ref="lists">
                <li
                    v-for="(item, index) in renderOptions"
                    :key="index"
                    :class="{ 'dy-checked': isSelected(item) }"
                    @click.stop="selectHandle(item, index)"
                >
                    <span class="dy-select-text">{{ item.label }}</span>
                    <i class="dy-select-icon"></i>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>

    import Popup from "../../mixins/popup";
    
    export default {
        name: "dy-select-drop-down",
        mixins: [ Popup ],
        data() {
            const selectValue = [];
            this.options.forEach( (item) => {
                if (!this.multiple && selectValue.length) {
                    return;
                }
                if (item.selected) {
                    selectValue.push(item);
                }
            })
            return {
                selectValue,
                saveOptions: this.options,
                renderOptions: this.options,
                selectHeight: this.maxHeight + "px"
            }
        },
        props: ["value", "options", "maxHeight", "isFocus",
         "multiple", "transition"],
        methods: {
            isSelected(item) {
                let is = false;
                this.selectValue.every( (_item) => {
                    if (_item.value === item.value && _item.label === item.label) {
                        is = true;
                        return false;
                    }
                    return true;
                })
                return is;
            },
            selectHandle(item, index) {
                if (this.isSelected(item)) {
                    if (!this.multiple) {
                        return this.hide();
                    } else {
                        return this.filterSelectItem(item);
                    }
                }

                if (!this.multiple) {
                    this.selectValue = [item];
                    this.hide();
                } else {
                    this.selectValue.push(item);
                }
            },
            filterSelectItem(item) {
                this.selectValue.splice(this.selectValue.findIndex((_item) => {
                    return _item.label === item.label && _item.value === item.value;
                }), 1);
            },
            popupPosition() {
                const { top, left, height, width } = this.$parent.$el.getBoundingClientRect();
                const { top: offsetTop, left: offsetLeft } = this.getPageOffset(); 
                const ret = {
                    top: `${top + offsetTop + height}px`,
                    left: `${left + offsetLeft}px`,
                    width: `${width}px`,
                    height: `${this.selectHeight}` || "auto",
                    zIndex: this.getZIndex()
                }

                if (this.$refs["lists"].offsetHeight < this.maxHeight) {
                    this.scrollHeight = this.$refs["lists"].offsetHeight;
                }

                return ret;
            }
        },
        watch: {
            isFocus(val, oldVal) {
                if (val) {
                    this.show();
                } else {
                    this.hide();
                }
            },
            options(val, oldVal) {
                val.forEach( (item) => {
                    if (this.renderOptions.findIndex( (_item) => {
                        return _item.label === item.label && _item.value === item.value;
                    }) > -1) {
                        this.renderOptions.push(item);
                        this.saveOptions.push(item);
                        if (item.selected) {
                            if (this.selected) {
                                this.selectValue.push(item);
                            } else {
                                this.selectValue = [item];
                            }
                        }
                    }
                })
            },
            selectValue(val, oldVal) {
                this.$emit("input", val);
            },
            visible(val, oldVal) {
                if (val) {
                    this.$parent.isFocus = true;
                } else {
                    this.$parent.isFocus = false;
                }
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
        }
    }
</script>