import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Button = () => import('./views/components/Button.vue')
const BBB = () => import('./views/components/BBB.vue')

export default new VueRouter({
    routes: [
        { path: '/button', component: Button },
        { path: '/bbb', component: BBB},
        { path: '*', redirect: '/button'}
    ]
});
