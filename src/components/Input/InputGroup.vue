<template>
    <div class="dy-input-group">
        <span v-if="prepend" class="dy-input-group-prepend">
            <slot name="prepend" v-if="$slots.prepend"></slot>
        </span>
        <slot></slot>
        <span v-if="append" class="dy-input-group-append">
            <slot name="append" v-if="$slots.append"></slot>
        </span>
    </div>
</template>

<script>
    
    export default {
        name: "dy-input-group",
        data() {
            return {
                prepend: true,
                append: true
            }
        },
        props: {},
        mounted() {
            if (!this.$slots.prepend) {
                this.prepend = false;
            }

            if (!this.$slots.append) {
                this.append = false;
            }

        }
    }

</script>