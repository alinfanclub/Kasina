import { createWebHistory, createRouter } from "vue-router";
import  MainBanner from '../components/MainBanner.vue'
import Goods from '../components/GoodsListVue.vue'
import GoodsDetail from '../components/Goods_detailVue.vue'
import Login from "../components/LoginVue.vue"
import SignUp from "../components/SignUpVue.vue"

const routes = [
  {
    path: "/",
    name : 'MainBanner',
    component: MainBanner,
  },
  {
    path: "/brand/:id",
    name : Goods,
    component: Goods,
  },
  {
    path : "/goods/detail/:id",
    name : GoodsDetail,
    component : GoodsDetail
  },
  {
    path : "/login",
    name : Login,
    component : Login
  },
  {
    path : "/signup",
    name : SignUp,
    component : SignUp
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});


export default router;