import { Checkbox } from "../Checkbox";

export default {
    name: "dy-table",
    data() {
        return {
            rowFields: [],
            selectModel: [],
            selectAllModel: false
        }
    },
    props: {
        data: Array,
        value: Array,
        border: {
            type: Boolean,
            default: false
        },
        striped: {
            type: Boolean,
            default: false
        },
        hover: {
            type: Boolean,
            default: false
        },
        select: {
            type: Boolean,
            default: false
        },
        selectText: {
            type: String,
            default: "选择"
        },
        selectAll: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        appendField(field) {
            this.rowFields.push(field);
        },
        // 全选事件
        selectAllHandle(checked) {
            if (checked) {
                const selectModel = [];
                this.data.forEach( (item, index) => {
                    selectModel.push(index)
                })
                this.selectModel = selectModel;
            } else {
                this.selectModel = [];
            }
        },
        // 单选值
        selectModelInput(val) {
            this.selectModel = val;
        },
        // 全选值
        selectAllModelInput(val) {
            this.selectAllModel = val;
        }
    },
    watch: {
        // 单选与全选关联
        selectModel(curVal, oldVal) {
            const data = [];
            curVal.forEach( (index) => {
                data.push(this.data[index]);
            })
            this.$emit("input", data);
            if (curVal.length === this.data.length) {
                this.selectAllModel = true;
            } else {
                this.selectAllModel = false;
            }
        }
    },
    computed: {
        computedClass() {
            const classes = [];
            classes.push("dy-table");

            if (this.border) {
                classes.push("dy-table-border");
            }

            if (this.striped) {
                classes.push("dy-table-striped");
            }

            if (this.hover) {
                classes.push("dy-table-hover");
            }

            return classes.join(" ");
        },
        formatData() {
            // [{
            //     num: 1,
            //     title: "西瓜",
            //     date: "1999-09-09"
            // },{
            //     num: 2,
            //     title: "西瓜",
            //     date: "1999-09-09"
            // }]
            const data = [];

            if (!this.data) {
                return data;
            }

            this.data.forEach( (item, index) => {
                const obj = {};
                for (let prop in item) {
                    if (typeof item[prop] === "object") {
                        obj[prop] = item[prop]
                    } else {
                        obj[prop] = {
                            value: item[prop]
                        }
                    }
                }
                data.push(obj)
            })

            return data;
        }
    },
    render(h) {
        // 挂载方法
        const {
            computedClass,
            data,
            formatData,
            rowFields,
            select,
            selectModel,
            selectText,
            selectAll,
            selectAllModel
        } = this;
        // jsx 渲染
        return (
            <table class={ computedClass }>
                {
                    data && rowFields &&
                    <thead>
                        <tr>
                            { select && <td>{ selectText }</td>}
                            {
                                rowFields.map( (row, key) => {
                                    return (
                                        <td key={key} width={row.width}>
                                            { row.label }
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                }
                {
                    data && rowFields &&
                    <tbody>
                        {
                            formatData.map( (item, index) => {
                                return (
                                    <tr class={item.active ? "dy-table-active" : ""} key={index}>
                                        {
                                            select && 
                                            <td>
                                                <dy-checkbox
                                                    label={index}
                                                    showLabel={false}
                                                    value={selectModel}
                                                    on-input={this.selectModelInput}
                                                ></dy-checkbox>
                                            </td>
                                        }
                                        {
                                            rowFields.map( (field, key) => {
                                                const { render, value, color } = item[field.prop];
                                                return (
                                                    <td key={key} class={color ? `dy-${color}` : ""}>
                                                        { typeof render === "function" ? render(h, item, field.prop, index) : value }
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                }
                {
                    data && select && selectAll &&
                    <tfoot>
                        <tr>
                            <td><dy-checkbox label="全选" on-change={this.selectAllHandle} value={selectAllModel} on-input={this.selectAllModelInput}></dy-checkbox></td>
                            <td colspan={rowFields.length}>{ this.$slots.tfoot }</td>
                        </tr>
                    </tfoot>
                }
                { this.$slots.default }
            </table>
        )
    },
    components: {
        Checkbox
    }
}