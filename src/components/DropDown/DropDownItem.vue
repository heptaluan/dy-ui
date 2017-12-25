<template>
    <li 
        :class="{
            'dy-active': this.active,
            'dy-header': this.header,
            'dy-disabled': this.disabled,
            'dy-divider': this.divider
        }" 
        @click="clickHandle"
    >
        <slot v-if="!divider"></slot>
    </li>
</template>

<script>
    export default {
        name: "dy-dropdown-item",
        props: {
            active: {
                type: Boolean,
                default: false
            },
            header: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divider: {
                type: Boolean,
                default: false
            },
            value: {
                type: [Number, String]
            }
        },
        methods: {
            clickHandle() {
                if (!this.disabled && !this.active) {
                    this.$emit("click", this.value);
                    this.$parent.hide();
                }
            }
        }
    };
</script>
