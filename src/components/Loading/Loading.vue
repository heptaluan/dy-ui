<template>
    <dy-model v-bind="$props" :isShow.sync="syncSlot" class="dy-loading">
        <div class="dy-loading-icon">
            <span class="rotation">
                <dy-icon size="16" type="&#xe631;"></dy-icon>
            </span>
        </div>
        <div class="dy-loading-text">
            {{ loadingText }}
        </div>
    </dy-model>
</template>

<script>
    
    export default {
        name: "dy-loading",
        data() {
            return {
                syncSlot: this.isShow
            }
        },
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            transition: {
                type: String,
                default: "scale-up"
            },
            timeout: {
                type: Number,
                default: 0
            },
            loadingText: {
                type: String,
                default: "Loading"
            }
        },
        watch: {
            isShow(val, oldVal) {
                this.syncSlot = val;
            },
            syncSlot(val, oldVal) {
                this.$emit("update:isShow", val);
                if (val && this.timeout > 0) {
                    this.timer = setTimeout( () => {
                        this.timer = null;
                        this.syncSlot = false;
                    }, this.timeout)
                } else {
                    if (this.timer !== null) {
                        clearTimeout(this.timer)
                    }
                }
            }
        },
        created() {
            this.timer = null;
        }
    }
</script>
