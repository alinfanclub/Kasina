import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/routes/router.js'
import VueCarousel from 'vue-carousel';

createApp(App).use(store).use(router).use(VueCarousel).mount('#app')
