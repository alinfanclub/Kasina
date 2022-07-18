import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/routes/router.js'
import LoadScript from 'vue-plugin-load-script';

createApp(App).use(store).use(router).use(LoadScript).mount('#app')


