<template>
    <transition :name="transition">
        <div
            :class="computedClass"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            v-if="visible"
        >
            <div class="dy-message-icon">
                <dy-icon size="24" type="&#xe64c;"></dy-icon>
            </div>
            <div class="dy-message-inner">
                <h2 class="dy-message-title">{{ title }}</h2>
                <p class="dy-message-content">{{ message }}</p>
            </div>
            <dy-icon 
                class="dy-message-close"
                v-if="close" 
                @click="closeHandle"
                size="10" 
                type="&#xe626;"
            ></dy-icon>
        </div>
    </transition>
</template>

<script>

    import { Icon } from "../Icon"
    import Popup from "../../mixins/popup"
    
    export default {
        name: "dy-message",
        mixins: [Popup],
        data() {
            return {
                offsetTop: 0,
                offsetBottom: 0
            }
        },
        props: {
            title: {
                type: String,
                required: true
            },
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
                        "error"
                    ].includes(value);
                }
            },
            placement: {
                type: String,
                default: "right-top",
                validator(value) {
                    return [
                        "left-top",
                        "left-bottom",
                        "right-top",
                        "right-bottom"
                    ].includes(value)
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
                const ret = { zIndex: this.getZIndex() };

                if (this.isTop) {
                    ret["top"] = this.offsetTop + "px"
                } else {
                    ret["bottom"] = this.offsetBottom + "px"
                }

                return ret;
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
                classes.push("dy-message");
                classes.push(`dy-message-${this.placement}`)
                
                if (this.type !== undefined) {
                    classes.push(`dy-message-${this.type}`)
                }

                return classes.join(" ")
            },
            transition() {
                if (this.placement.indexOf("left" > -1)) {
                    return "message-left"
                } else {
                    return "message-right"
                }
            },
            isTop() {
                return this.placement.indexOf("top") > -1
            }
        },
        components: {
            Icon
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