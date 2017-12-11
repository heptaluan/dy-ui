<template>
    <transition name="notify">
        <div
            :class="computedClass"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            v-if="visible"
        >
            <dy-icon size="14" type="&#xe64c;"></dy-icon>
            <p class="dy-notify-msg">{{ message }}</p>
            <dy-close
                class="dy-notify-close"
                v-if="close" 
                @click="closeHandle"
            ></dy-close>
        </div>
    </transition>
</template>

<script>

    import { Close } from "../Close"
    import Popup from "../../mixins/popup"
    
    export default {
        name: "dy-notify",
        mixins: [Popup],
        props: {
            message: {
                type: [String, Object],
                required: true
            },
            close: {
                type: Boolean,
                default: false
            },
            delay: {
                type: Number,
                default: 3000
            },
            onClose: {
                type: Function
            },
            type: {
                type: String,
                default: "default",
                validator(value) {
                    return [
                        "default",
                        "success",
                        "waring",
                        "danger"
                    ].includes(value);
                }
            },
            align: {
                type: String,
                default: "left",
                validator(value) {
                    return [
                        "left",
                        "center"
                    ].includes(value);
                }
            }
        },
        methods: {
            closeHandle() {
                if (this.close) {
                    clearTimeout(this.timer);
                    this.hide();
                }
            },
            mouseenter() {
                clearTimeout(this.timer);
            },
            mouseleave() {
                if (this.delay > 0) {
                    this.timer = setTimeout( () => {
                        this.hide();
                    }, this.delay)
                }
            },
            destory() {
                this.$el.removeEventListener("transitioned", this.delay);
                this.destory(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            popupPosition() {
                return {
                    zIndex: this.getZIndex()
                }
            }
        },
        watch: {
            visible(curVal, oldVal) {
                if (curVal) {
                    this.$el.addEventListener("transitioned", this.destoryElement)
                } else {
                    if (this.onClose) {
                        this.onClose.call(this);
                    }
                }
            }
        },
        computed: {
            computedClass() {
                const classes = [];
                classes.push("dy-notify");
                classes.push(`dy-notify-${this.align}`)
                
                if (this.type !== undefined) {
                    classes.push(`dy-notify-${this.type}`)
                }

                if (this.visible) {
                    classes.push("dy-notify-active")
                }

                return classes.join(" ")
            }
        },
        components: {
            Close
        },
        mounted() {
            if (this.delay > 0) {
                this.timer = setTimeout( () => {
                    this.hide()
                }, this.delay)
            }
        }
    }

</script>