
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { Input, InputGroup } from "./components/Input";
import { Radio, RadioGroup, RadioButton } from "./components/Radio";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Switch } from "./components/Switch";
import { BackToTop } from "./components/BackToTop";
import { ToolTip } from "./components/ToolTip";
import { Notify } from "./components/Notify";
import { Message } from "./components/Message";

import { Close } from "./components/Close";
import { Code } from "./components/Code";

import { Model, ModelHeader, ModelBody, ModelFooter } from "./components/Model";
import { Alert } from "./components/Alert";
import { Confirm } from "./components/Confirm";
import { Prompt } from "./components/Prompt";

import { Slider } from "./components/Slider";

import { Table, TableCol } from "./components/Table";


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
    Vue.component(Code.name, Code);

    Vue.component(Model.name, Model);
    Vue.component(ModelHeader.name, ModelHeader);
    Vue.component(ModelBody.name, ModelBody);
    Vue.component(ModelFooter.name, ModelFooter);
    Vue.component(Alert.name, Alert);
    Vue.component(Confirm.name, Confirm);
    Vue.component(Prompt.name, Prompt);

    Vue.component(Slider.name, Slider);

    Vue.component(Table.name, Table);
    Vue.component(TableCol.name, TableCol);
    
    

    Vue.use(Notify);
    Vue.use(Message);
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
