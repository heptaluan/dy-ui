import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Table = () => import('./views/components/Table.vue');
const Icon = () => import('./views/components/Icon.vue');
const Close = () => import('./views/components/Close.vue');
const BackToTop = () => import('./views/components/BackToTop.vue');
const Button = () => import('./views/components/Button.vue');
const Input = () => import('./views/components/Input.vue');
const Radio = () => import('./views/components/Radio.vue');
const Checkbox = () => import('./views/components/Checkbox.vue');
const Switch = () => import('./views/components/Switch.vue');
const ToolTip = () => import('./views/components/ToolTip.vue');
const Notify = () => import('./views/components/Notify.vue');
const Message = () => import('./views/components/Message.vue');
const Dialog = () => import('./views/components/Dialog.vue');
const Slider = () => import('./views/components/Slider.vue');
const Select = () => import('./views/components/Select.vue');
const Progress = () => import('./views/components/Progress.vue');
const Loading = () => import('./views/components/Loading.vue');
const Tab = () => import('./views/components/Tab.vue');
const Carousel = () => import('./views/components/Carousel.vue');
const DropDown = () => import('./views/components/DropDown.vue');
const Tag = () => import('./views/components/Tag.vue');
const Pagination = () => import('./views/components/Pagination.vue');
const Start = () => import('./views/components/Start.vue');
const Nav = () => import('./views/components/Nav.vue');
const Article = () => import('./views/components/Article.vue');


export default new VueRouter({
    routes: [
        { path: '/start', component: Start },
        { path: '/table', component: Table },
        { path: '/icon', component: Icon },
        { path: '/close', component: Close },
        { path: '/backtotop', component: BackToTop },
        { path: '/button', component: Button },
        { path: '/input', component: Input },
        { path: '/radio', component: Radio },
        { path: '/checkbox', component: Checkbox },
        { path: '/switch', component: Switch },
        { path: '/tooltip', component: ToolTip },
        { path: '/notify', component: Notify },
        { path: '/message', component: Message },
        { path: '/dialog', component: Dialog },
        { path: '/slider', component: Slider },
        { path: '/select', component: Select },
        { path: '/progress', component: Progress },
        { path: '/loading', component: Loading },
        { path: '/tab', component: Tab },
        { path: '/carousel', component: Carousel },
        { path: '/dropDown', component: DropDown },
        { path: '/tag', component: Tag },
        { path: '/pagination', component: Pagination },
        { path: '/nav', component: Nav },
        { path: '/article', component: Article },
        { path: '*', redirect: '/start'}
    ],
    // mode: "history",
    // scrollBehavior (to, from, savedPosition) {
    //     return { x: 0, y: 0 }
    // }
});
