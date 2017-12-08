
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { Input } from './components/Input';
import { Radio, RadioGroup, RadioButton } from './components/Radio';
import { Checkbox, CheckboxGroup } from './components/Checkbox';
import { Switch } from './components/Switch';
import { BackToTop } from './components/BackToTop';
import { ToolTip } from './components/ToolTip';

const install = function (Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(Input.name, Input);
    
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(RadioButton.name, RadioButton);

    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);

    Vue.component(Switch.name, Switch);
    Vue.component(BackToTop.name, BackToTop);
    // Vue.component(ToolTip.name, ToolTip);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
