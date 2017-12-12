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
            <div class="dy-model-prompt-input">
                <dy-input
                    :placeholder="placeholder"
                    v-model="inputMsg"
                    :regex="regex"
                    :errorNotice="errorNotice"
                    @input="inputHandle"
                    autofocus="autofocus"
                ></dy-input>
            </div>
        </model-body>
        <model-footer>
            <dy-button size="m" class="dy-model-btn" @click="confirmHandle">
                {{ confirBtnText }}
            </dy-button>
            <dy-button color="primary" size="m" :disabled="waitError" class="dy-model-btn" @click="cancelHandle">
                {{ cancelBtnText }}
            </dy-button>
        </model-footer>
    </model>
</template>

<script>

    import { Button } from "../Button";
    import { Input } from "../Input";
    import { Model, ModelHeader, ModelBody, ModelFooter } from "../Model";
    
    export default {
        name: "dy-prompt",
        data() {
            return {
                syncSlot: this.isShow,
                curValue: this.value,
                inputMsg: "",
                waitError: true
            }
        },
        props: {
            value: {
                type: [String, Number]
            },
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
            },
            regex: {
                type: [Object, String]
            },
            errorNotice: {
                type: String,
                default: "输入信息有误"
            },
            placeholder: {
                type: String,
                default: "请输入内容"
            },
        },
        methods: {
            cancelHandle() {
                this.syncSlot = false;
                this.inputMsg = "";
                this.$emit("cancel")
            },
            confirmHandle() {
                this.syncSlot = false;
                this.inputMsg = "";
                this.$emit("confirm")
            },
            inputHandle(msg) {
                this.$emit("input", msg);
                this.curValue = msg;
            }
        },
        watch: {
            isShow(curVal, oldVal) {
                this.syncSlot = curVal;
                this.inputMsg = "";
            },
            syncSlot(curVal, oldVal) {
                this.$emit("update:isShow", curVal)
            },
            inputMsg(curVal) {
                if (!new RegExp(this.regex).test(curVal)) {
					this.waitError = true;
				} else {
					this.waitError = false;
				}
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