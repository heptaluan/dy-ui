<template>
    <div class="dy-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    
    export default {
        name: "dy-radio-group",
        props: {
            value: {},
            props: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            value(curVla, oldVal) {
                this.$emit("change", curVla)
            }
        }
    }

</script>
