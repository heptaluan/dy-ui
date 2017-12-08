<template>
    <i 
        class="iconfont" 
        :style="styles" 
        v-html="type"
        @click="clickHandle"
    ></i>
</template>

<script>

    export default {
        name: "dy-icon",
        props: {
            type: String,
            size: [Number, String]
        },
        computed: {
            styles() {
                let style = {};

                if (this.size) {
                    style["font-size"] = `${this.size}px`;
                }

                return style;
            }
        },
        methods: {
            clickHandle(e) {
                this.$emit("click", e)
            }
        }
    }

</script>