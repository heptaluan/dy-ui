
import { Button } from './components/Button';

const install = function (Vue) {
    Vue.component(Button.name, Button);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
