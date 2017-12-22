import DropDown from "./DropDown.vue";
import DropDownItem from "./DropDownItem.vue";

DropDown.install = function (Vue, options) {
    Vue.directive('popover', {
        bind(el, binding, vnode, oldVnode) {
            vnode.context.$refs[binding.arg].$refs.reference = el;
        }
    });
};

export {
    DropDown,
    DropDownItem
};
