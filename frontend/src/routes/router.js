import { createWebHistory, createRouter } from "vue-router";
import  MainBanner from '../components/MainBanner.vue'
import Goods from '../components/GoodsVue.vue'
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;