<template>
  <div class="sign-up">
    <p>회원가입</p>
    <input type="text" placeholder="email" v-model="email"><br>
    <input type="password" placeholder="password" v-model="password"><br>
   <div id="signUp">
     <button @click="signUp">가입하기</button>
    <button @click="signInwithGoogle">sign in With Google</button>
   </div>
  </div>
</template>

<script>
 import router from "@/routes/router";
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

export default {
    data() {
        return {
            email : '',
            password : '',
        }
    },
    methods : {
        signUp() {
           createUserWithEmailAndPassword(getAuth(), this.email, this.password)
           // eslint-disable-next-line 
            .then((data) => {
                console.log("succes");
                router.push('/login')
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message)
            })
        },
        signInwithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
            .then((result) => {
                console.log(result.user);
                router.push('/')
            })
            .catch((error)=> {
                console.log(error);
            })
        }

    }
}
</script>

<style scoped>
button {
    cursor: pointer;
    width: 7rem;
}
#signUp {
    display: flex;
    justify-content: space-around;
}
.sign-up {
    margin-top: 40px;
    width: 320px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

@media (min-width:250px) and (max-width:1200px) {

        .sign-up {
            margin: 22rem auto;
        }
}
</style>