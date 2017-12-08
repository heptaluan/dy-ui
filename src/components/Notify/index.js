import Notify from "./Notify.vue";

Notify.install = (Vue) => {
    const _constructor = Vue.extend(Notify);

    Vue.prototype.$notify = (propsData) => {
        const instance = new _constructor({ propsData });
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        instance.vm.show();
    };
};

export {
    Notify
}