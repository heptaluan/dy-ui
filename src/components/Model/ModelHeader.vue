<template>
    <div class="dy-model-header">
        <slot></slot>
        <dy-close
            class="dy-close-model"
            v-if="closeBtn"
            @click="closeModel"
        ></dy-close>
    </div>
</template>

<script>

    import { Close } from "../Close";
    
    export default {
        name: "dy-model-header",
        props: {
            closeBtn: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            closeModel() {
                this.$emit("update:isShow", false);
            }
        },
        components: {
            Close
        }

    }

</script>