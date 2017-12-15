import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const AAA = () => import('./views/components/AAA.vue')
const BBB = () => import('./views/components/BBB.vue')

export default new VueRouter({
    routes: [
        { path: '/aaa', component: AAA },
        { path: '/bbb', component: BBB},
        { path: '*', redirect: '/aaa'}
    ]
});
