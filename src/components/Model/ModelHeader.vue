<template>
    <div class="dy-model-header">
        <dy-close
            class="dy-close-model"
            v-if="closeBtn"
            @click="closeModel"
        ></dy-close>
        <slot></slot>
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
                setTimeout( () => {
					this.$notify({
						message: "取消了事件",
						type: "waring",
						delay: 2000
					})
				}, 300)
            }
        },
        computed: {
            model() {
                let parent = this.parent;
                while(parent) {
                    if (parent.$options.name !== "dy-model") {
                        parent = parent.$parent;
                    } else {
                        return parent;
                    }
                }
            }
        },
        components: {
            Close
        }

    }

</script>