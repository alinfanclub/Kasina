import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store/store'
import router from '@/routes/router.js'
import LoadScript from 'vue-plugin-load-script';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp7iy-R-hfmdg7jUZWrkxF4KhHrFn0uN8",
  authDomain: "kasina-login.firebaseapp.com",
  projectId: "kasina-login",
  storageBucket: "kasina-login.appspot.com",
  messagingSenderId: "235477707097",
  appId: "1:235477707097:web:b8e2da4160411666da4448",
  measurementId: "G-TQJ6H2NC27"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).use(LoadScript).mount('#app')


