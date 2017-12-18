import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const Box = () => import('./views/components/Box.vue');

const Table = () => import('./views/components/Table.vue');
const Button = () => import('./views/components/Button.vue');
const Input = () => import('./views/components/Input.vue');
const Radio = () => import('./views/components/Radio.vue');
const Checkbox = () => import('./views/components/Checkbox.vue');
const Switch = () => import('./views/components/Switch.vue');



export default new VueRouter({
    routes: [
        { path: '/box', component: Box },
        { path: '/table', component: Table },
        { path: '/button', component: Button },
        { path: '/input', component: Input },
        { path: '/radio', component: Radio },
        { path: '/checkbox', component: Checkbox },
        { path: '/switch', component: Switch },
        { path: '*', redirect: '/box'}
    ]
});
