import Message from "./Message.vue";

Message.install = (Vue) => {
  const _constructor = Vue.extend(Message);
  const instances = {
    "left-top": [],
    "left-bottom": [],
    "right-top": [],
    "right-bottom": []
  };

  Vue.prototype.$message = (propsData) => {
    let instance = new _constructor({ propsData }).$mount();
    document.body.appendChild(instance.$el);

    let distance = 16;
    instances[instance.placement].forEach((_ins) => {
      distance += _ins.$el.offsetHeight + 16;
    });
    if (instance.isTop) {
      instance.offsetTop = distance;
    } else {
      instance.offsetBottom = distance;
    }

    instance.show();
    instances[instance.placement].push(instance);

    instance.hide = function () {
      instance.visible = false;
      let _distance = 16;
      instances[this.placement].splice(this);
      instances[this.placement].forEach((_ins) => {
        if (_ins.isTop) {
          _ins.$el.style.top = _distance + "px";
        } else {
          _ins.$el.style.bottom = _distance + "px";
        }
        _distance += _ins.$el.offsetHeight + 16;
      });
    };

    return instance;
  };
};

export {
  Message
};
