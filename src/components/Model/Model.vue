<template>
    <transition :name="transition">
        <div 
            class="dy-model"
            :class="computedClasee" 
            ref="model" 
            v-if="visible" 
            @click="globalClickHandle"
        >
            <div class="dy-model-dialog" :style="styles" @click="dialogClickHandle">
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
                type: Number,
                default: 0
            },
            h: {
                type: Number,
                default: 0
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
            },
            styles() {
                const styles = [];

                if (this.w !== 0) {
                    styles["width"] = this.w + "px"
                }

                if (this.h !== 0) {
                    styles["height"] = this.h + "px"
                }

                return styles;

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
