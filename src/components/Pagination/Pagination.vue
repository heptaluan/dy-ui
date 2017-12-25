<template>
    <ul class="dy-pagination" :class="{'dy-pagination-disabled': disabled}">
        <li 
            :class="{'dy-pagination-disabled': value === 1 || disabled}"
            @click="value !== 1 && changePage(1)"
        ><a href="javascript:;">{{ firstBtnText }}</a></li>
        <li 
            :class="{'dy-pagination-disabled': value === 1 || disabled}"
            @click="value !== 1 && changePage(value - 1)"
        ><a href="javascript:;">{{ prevBtnText }}</a></li>

        <li 
            v-for="(num, index) in pages"
            :key="index"
            :class="{'dy-pagination-active': num === value, 'dy-pagination-disabled': disabled && num !== value}"
            @click="num !== value && changePage(num)"
        ><a href="javascript:;">{{ num }}</a></li>

        <li 
            :class="{'dy-pagination-disabled': value === pageCount || disabled}"
            @click="value !== pageCount && changePage(value + 1)"
        ><a href="javascript:;">{{ nextBtnText }}</a></li>
        <li 
            :class="{'dy-pagination-disabled': value === pageCount || disabled}"
            @click="value !== pageCount && changePage(pageCount)"
        ><a href="javascript:;">{{ lastBtnText }}</a></li>
    </ul>
</template>

<script>
    
    export default {
        name: "dy-pagination",
        props: {
            value: {
                type: Number,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            total: {
                type: Number,
                required: true
            },
            pageSize: {
                type: Number,
                default: 10
            },
            showPageBtnCount: {
                type: Number,
                default: 7
            },
            firstBtnText: {
                type: String,
                default: "首页"
            },
            prevBtnText: {
                type: String,
                default: "上一页"
            },
            nextBtnText: {
                type: String,
                default: "下一页"
            },
            lastBtnText: {
                type: String,
                default: "尾页"
            }
        },
        methods: {
            changePage(pageNum) {
                if (this.disabled) {
                    return;
                }
                this.$emit("input", pageNum);
                this.$emit("change", pageNum);
            }
        },
        computed: {
            // 总页数 = 总条目 / 每页显示数 
            pageCount() {
                let count = Math.ceil(this.total / this.pageSize);
                return count < 0 ? 1 : count;
            },
            // 渲染
            pages() {
                let pageNums = this.pageCount < this.showPageBtnCount ? this.pageCount : this.showPageBtnCount;
                const pagesArr = [];
                for (var i = 0; i < pageNums; i++) {
                    pagesArr.push(i + 1)
                }
                return pagesArr;
            }
        }
    }
</script>