import Loading from "./Loading.vue";

Loading.install = function (Vue, options) {
  let instance = null;
  let container = document.createElement("div");

  function createInstance() {
    let Component = Vue.component(Loading.name, Loading);
    instance = new Component({ el: container });
    return instance;
  }

  Vue.prototype.$loading = {
    open(options = { timeout: 2000 }) {
      instance = createInstance();
      instance.syncSlot = true;
      Object.assign(instance, options);
    },

    close() {
      instance = instance || createInstance();
      instance.syncSlot = false;
    }
  };
};

export {
  Loading
};
