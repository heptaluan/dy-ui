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
            <dy-button size="m" class="dy-model-btn" @click="confirmHandle">
                {{ confirBtnText }}
            </dy-button>
            <dy-button color="primary" size="m" class="dy-model-btn" @click="cancelHandle">
                {{ cancelBtnText }}
            </dy-button>
        </model-footer>
    </model>
</template>

<script>

    import { Button } from "../Button";
    import { Model, ModelHeader, ModelBody, ModelFooter } from "../Model";
    
    export default {
        name: "dy-confirm",
        data() {
            return {
                syncSlot: this.isShow
            }
        },
        props: {
            titleText: {
                type: String,
            },
            cancelBtnText: {
                type: String,
                default: "确定"
            },
            confirBtnText: {
                type: String,
                default: "取消"
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
            cancelHandle() {
                this.syncSlot = false;
                this.$emit("cancel")
            },
            confirmHandle() {
                this.syncSlot = false;
                this.$emit("confirm")
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