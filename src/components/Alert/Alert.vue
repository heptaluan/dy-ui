<template>
    <model v-bind="$props" ref="model" :close="close">
        <model-header :isShow.sync="syncSlot" :closeBtn="this.close">
            <div class="dy-alert-header">
                {{ titleText }}
            </div>
        </model-header>
        <model-body>
            <div class="dy-alert-body">
                <slot></slot>
            </div>
        </model-body>
        <model-footer>
            <div class="dy-alert-footer">
                <dy-button type="primary" size="m" class="dy-alert-btn" @click="submitHandle">
                    {{ submitButtonText }}
                </dy-button>
            </div>
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
            close: {
                type: Boolean,
                default: false
            },
            titleText: {
                type: String,
            },
            submitButtonText: {
                type: String,
                default: "确定"
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