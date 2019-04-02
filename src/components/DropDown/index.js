import DropDown from "./DropDown.vue";
import DropDownItem from "./DropDownItem.vue";

DropDown.install = function (Vue, options) {
  Vue.directive("dropdown", {
    bind(el, binding, vnode, oldVnode) {
      // 避免赋值的时候，元素还没渲染出来
      return new Promise((resolv, reject) => {
        resolv(vnode.context.$refs)
      }).then((element) => {
        element[binding.arg].$refs.reference = el;
      })
    }
  });
};

export {
  DropDown,
  DropDownItem
};
