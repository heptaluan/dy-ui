import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Button = () => import('./views/components/Button.vue')

export default new VueRouter({
    routes: [
        { path: '/button', component: Button },
        { path: '*', redirect: '/button'}
    ]
});
