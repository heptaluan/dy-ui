<template>
    <button
        type="button"
        @click="clickHandle"
        class="dy-close"
    >
        <dy-icon 
            class="dy-close" 
            size="10" 
            type="&#xe626;"
        ></dy-icon>
    </button>
</template>

<script>
    
    import { Icon } from "../Icon"

    export default {
        name: "dy-close",
        props: {},
        methods: {
            clickHandle(e) {
                this.$emit("click", e)
            }
        }
    }

</script>