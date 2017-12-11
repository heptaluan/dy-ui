
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { Input, InputGroup } from './components/Input';
import { Radio, RadioGroup, RadioButton } from './components/Radio';
import { Checkbox, CheckboxGroup } from './components/Checkbox';
import { Switch } from './components/Switch';
import { BackToTop } from './components/BackToTop';
import { ToolTip } from './components/ToolTip';
import { Notify } from './components/Notify';
import { Message } from './components/Message';
import { Close } from './components/Close';
// import { Model, ModelHeader, ModelBody, ModelFooter } from "./components/Model";

const install = function (Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);

    Vue.component(Input.name, Input);
    Vue.component(InputGroup.name, InputGroup);
    
    Vue.component(Radio.name, Radio);
    Vue.component(RadioGroup.name, RadioGroup);
    Vue.component(RadioButton.name, RadioButton);

    Vue.component(Checkbox.name, Checkbox);
    Vue.component(CheckboxGroup.name, CheckboxGroup);

    Vue.component(Switch.name, Switch);
    Vue.component(BackToTop.name, BackToTop);
    Vue.component(Close.name, Close);

    // Vue.component(Model.name, Model);
    // Vue.component(ModelHeader.name, ModelHeader);
    // Vue.component(ModelBody.name, ModelBody);
    // Vue.component(ModelFooter.name, ModelFooter);
    

    Vue.use(Notify);
    Vue.use(Message);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
