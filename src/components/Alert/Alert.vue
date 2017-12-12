<template>
    <model v-bind="$props" ref="model">
        <model-header :isShow.sync="syncSlot" :closeBtn="true">
            <div class="dy-header-text">
                {{ titleText }}
            </div>
        </model-header>
        <model-body>
            <div class="dy-body-text">
                <slot></slot>
            </div>
        </model-body>
        <model-footer>
            <dy-button size="m" class="dy-model-btn" @click="submitHandle">
                {{ submitButtonText }}
            </dy-button>
        </model-footer>
    </model>
</template>

<script>

    import { Button } from "../Button";
    import { Model, ModelHeader, ModelBody, ModelFooter } from "../Model";
    
    export default {
        name: "dy-alert",
        data() {
            return {
                syncSlot: this.isShow
            }
        },
        props: {
            titleText: {
                type: String,
            },
            submitButtonText: {
                type: String,
                default: "确定"
            },
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
                type: String
            }
        },
        methods: {
            submitHandle() {
                this.syncSlot = false;
                this.$emit("submit")
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncSlot = curVal;
            },
            syncSlot(curVal, oldVal) {
                this.$emit("update:isShow", curVal)
                
            }
        },
        components: {
            Model,
            ModelHeader,
            ModelBody,
            ModelFooter
        }
    }

</script>