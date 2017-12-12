<template>
    <transition :name="transition">
        <div 
            class="dy-model"
            :class="computedClasee" 
            ref="model" 
            v-if="visible" 
            @click="globalClickHandle"
        >
            <div class="dy-model-dialog"  @click="dialogClickHandle">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>

    import Popup from "../../mixins/popup";
    
    export default {
        name: "dy-model",
        mixins: [Popup],
        props: {
            w: {
                type: String,
                default: "420px"
            },
            h: {
                type: String,
                default: "auto"
            },
            isShow: {
                type: Boolean,
                default: false
            },
            transition: {
                type: String,
                default: "alert-fade"
            },
            closeViaDimmer: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            isShow(curVla, oldVal) {
                if (curVla) {
                    this.show()
                } else {
                    this.hide()
                }
            }
        },
        methods: {
            dialogClickHandle(e) {
                e.stopPropagation();
            },
            globalClickHandle() {
                if (this.closeViaDimmer) {
                    this.$emit("update:isShow", false)
                }
            },
            popupPosition() {
                return {
                    zIndex: this.getZIndex()
                };
            }
        },
        computed: {
            computedClasee() {
                const classes = [];

                if (this.visible) {
                    classes.push("dy-model-active");
                }

                return classes.join(" ")
            }
        },
        mounted() {
            document.body.appendChild(this.$el);
        },
        created() {
            this.overlay = true;
        }
    }

</script>
