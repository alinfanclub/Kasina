import { createWebHistory, createRouter } from "vue-router";
import  MainBanner from '../components/MainBanner.vue'
import Goods from '../components/GoodsListVue.vue'
import GoodsDetail from '../components/Goods_detailView.vue'
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
  }
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