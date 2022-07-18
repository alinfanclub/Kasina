<template>
  <div id="loginContainer">
    <ul>
        <li>CART / {{cartedItem}}</li>
        <li v-if="isLoggedIn == false" @click="logIn(), closeHamburger()" class="pointer">LOGIN</li>
        <li v-if="isLoggedIn == true" @click="handleSignOut(), closeHamburger()" class="pointer">SIGN OUT</li>
        <li>SEARCH</li>
    </ul>
  </div>
</template>

<script>
// import { onMounted} from "vue"
import router from "@/routes/router";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"

let auth;


export default {
    name : 'LoginArea',
    data(){
        return {
            cartedItem : 0,
            isLoggedIn : false,
        }
    },
    methods : {
        handleSignOut() {
            signOut(auth).then(() => {
                router.push('/')
                console.log('signOut');
            });
        },
        logIn() {
            router.push('/login')
        },

       closeHamburger() {
        if(this.$store.state.hamburgerActive == true){
            this.$store.state.hamburgerActive = false
        }
       }
    },
    mounted() {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        });

    }
}
</script>

<style lang="scss" scoped>
    #loginContainer {
        position: fixed;
        top: 30px;
        right: 0;
        height: fit-content;
        z-index: 99;
        ul {
            display: flex;
            flex-direction: row-reverse;
            margin: 8px 10px 0 0;

            > li {
                font-family: 'Roboto';
                padding-left: 10px;
                font-size: 0.78rem;
            }
        }
    }
    button {
        cursor: pointer;
    }
    .pointer{
        cursor: pointer;
    }
    
</style>