<template>
    <button
        type="button"
        @click="clickHandle"
        class="dy-close"
        :size="size"
    >
        <dy-icon 
            class="dy-close" 
            :size="closeSize" 
            type="&#xe626;"
        ></dy-icon>
    </button>
</template>

<script>
    
    import { Icon } from "../Icon"

    export default {
        name: "dy-close",
        props: {
            size: {
                type: [String, Number],
                default: 10
            }
        },
        computed: {
            closeSize() {
                return this.size
            }
        },
        methods: {
            clickHandle(e) {
                this.$emit("click", e)
            }
        }
    }

</script>