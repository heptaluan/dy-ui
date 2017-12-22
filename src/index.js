
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
import { Select } from "./components/Select";
import { Progress } from "./components/Progress";
import { Loading } from "./components/Loading";
import { Tab, TabList } from "./components/Tab";
import { Carousel, CarouselItem } from "./components/Carousel";
import { DropDown, DropDownItem } from "./components/DropDown";


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
    
    Vue.component(Select.name, Select);
    Vue.component(Progress.name, Progress);
    Vue.component(Tab.name, Tab);
    Vue.component(TabList.name, TabList);

    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);

    Vue.component(DropDown.name, DropDown);
    Vue.component(DropDownItem.name, DropDownItem);

    Vue.use(Notify);
    Vue.use(Message);
    Vue.use(Loading);
    Vue.use(DropDown);
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install
};
