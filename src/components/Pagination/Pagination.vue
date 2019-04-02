<template>
  <ul class="dy-pagination" :class="{'dy-pagination-disabled': disabled}">
    <li
      :class="{'dy-pagination-disabled': currentPage === 1 || disabled}"
      @click="currentPage !== 1 && changePage(1)"
    >
      <a href="javascript:;">{{ firstBtnText }}</a>
    </li>
    <li
      :class="{'dy-pagination-disabled': currentPage === 1 || disabled}"
      @click="currentPage !== 1 && changePage(currentPage - 1)"
    >
      <a href="javascript:;">{{ prevBtnText }}</a>
    </li>

    <li
      v-for="(num, index) in pages"
      :key="index"
      :class="{'dy-pagination-active': num === currentPage, 'dy-pagination-disabled': disabled && num !== currentPage}"
      @click="num !== currentPage && changePage(num)"
    >
      <a href="javascript:;">{{ num }}</a>
    </li>

    <li
      :class="{'dy-pagination-disabled': currentPage === allPages || disabled}"
      @click="currentPage !== allPages && changePage(currentPage + 1)"
    >
      <a href="javascript:;">{{ nextBtnText }}</a>
    </li>
    <li
      :class="{'dy-pagination-disabled': currentPage === allPages || disabled}"
      @click="currentPage !== allPages && changePage(allPages)"
    >
      <a href="javascript:;">{{ lastBtnText }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "dy-pagination",
  data() {
    return {
      // 子组件不能修改 props
      // 所以利用 currentPage 中转 props 中传递过来的 value
      currentPage: this.value
    };
  },
  props: {
    value: {
      type: Number,
      default: 1
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
    fixedShowPageNums: {
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
      this.currentPage = pageNum;
    }
  },
  computed: {
    // 总页数 = 总条目 / 每页显示数
    allPages() {
      const allPage = Math.ceil(this.total / this.pageSize);
      return allPage < 0 ? 1 : allPage;
    },
    pages() {
      // 将选中按钮固定在最中间，左右默认为 3
      const pageFixNum = Math.floor(this.fixedShowPageNums / 2);
      let start = this.currentPage;

      if (start - pageFixNum <= 0) {
        start = 1;
      } else if (start + this.fixedShowPageNums >= this.allPages) {
        start = this.allPages - (this.fixedShowPageNums - 1);
        if (this.currentPage + pageFixNum < this.allPages) {
          start = this.currentPage - pageFixNum;
        }
      } else {
        start -= pageFixNum;
      }

      // 渲染
      let pageNums =
        this.allPages < this.fixedShowPageNums
          ? this.allPages
          : this.fixedShowPageNums;
      const pagesArr = [];
      for (var i = 0; i < pageNums; i++) {
        pagesArr.push(i + start);
      }
      return pagesArr;
    }
  }
};
</script>