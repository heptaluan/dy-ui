<template>
    <button
        :disabled="disabled"
        :class="computedClass"
        @click="buttonClick"
    >
        <slot v-if="!loading"></slot>
        <span v-if="loading">
            <span class="rotation">
                <dy-icon size="14" type="&#xe631;"></dy-icon>
            </span>
            {{ loadingText }}
        </span>

    </button>
</template>

<script>
    export default {
        name: "dy-button",
        props: {
            type: {
                type: String,
                default: "default",
                validator(value) {
                    return [
                        "default",
                        "primary",
                        "success",
                        "info",
                        "warning",
                        "danger"
                    ].includes(value)
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            isRound: {
                type: Boolean,
                default: false
            },
            block: {
                type: Boolean,
                default: false
            },
            isActive: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return ["s", "m", "l"].includes(value)
                }
            },
            customClass: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: "加载中..."
            },
            isPlanin: {
                type: Boolean,
                default: false
            },
            text: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            buttonClick() {
                if (!this.disabled) {
                    this.$emit("click")
                }
            }
        },
        computed: {
            computedClass() {
                const computedClass = [];
                // 默认样式
                computedClass.push("dy-btn");
                computedClass.push("dy-btn-" + this.type);

                if (this.isRound) {
                    computedClass.push("dy-round");
                }

                if (this.block) {
                    computedClass.push("dy-btn-block");
                }

                if (this.isActive) {
                    computedClass.push("dy-active");
                }

                if (this.size !== undefined) {
                    computedClass.push("dy-btn-" + this.size)
                }

                if (this.customClass !== undefined) {
                    computedClass.push(this.customClass);
                }

                if (this.loading) {
                    computedClass.push("dy-btn-loading")
                }

                if (this.disabled || this.loading) {
                    computedClass.push("dy-btn-disabled")
                }

                if (this.isPlanin) {
                    computedClass.push("dy-isPlanin")
                }

                if (this.text) {
                    computedClass.push("dy-btn-text")
                }

                return computedClass.join(" ");
            }
        }
    }
</script>