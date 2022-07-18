<template>
  <div class="login">
    <h3>회원 로그인</h3>
    <div id="form">
        <div>
            <input type="text" placeholder="email" v-model="email"><br>
            <input type="password" placeholder="password" v-model="password"><br>
        </div>
        <div>
            <button @click="login">로그인</button>
        </div>
    </div>
    <div id="checkBox">
         <input type="checkbox" name="remember" id="remember-box"><label for="remember-box">아이디 저장</label>
    </div>
    <div id="loginSub">
        <router-link to="/signup"><button>회원가입</button></router-link>
        <button>아이디 찾기</button>
        <button>비밀번호 찾기</button>
    </div>
    <dir>
        <button @click=" logInwithGoogle">Login With Google</button>
    </dir>
  </div>
</template>

<script>
 import router from "@/routes/router";
import {getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup} from "firebase/auth"

  export default {
    name: 'loginView',
    data() {
      return {
        email : '',
        password : ''
      }
    },
     methods : {
        login() {
           signInWithEmailAndPassword(getAuth(), this.email, this.password)
           // eslint-disable-next-line 
            .then((data) => {
                console.log("succes login");
                router.push('/')
            })
            .catch((error) => {
                console.log(error.code);
                alert(error.message)
            })
        },
         logInwithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
            .then((result) => {
                console.log(result.user);
                router.push('/')
            })
            .catch((error)=> {
                console.log(error);
            })
        },

    }
  }
</script>

<style scoped lang="scss">
  .login {
    margin-top: 40px;
    width: 320px;
    margin-left: 50px;
    h3 {
        margin-bottom: 20px;
    }
    > #form {
        display: flex;
        justify-content: space-between;

        > div {
            input {
                width: 200px;
                height: 36px;
                border: 1px solid #000;
                padding: 10px;
                box-sizing: border-box;

                &:nth-child(1) {
                    margin-bottom: 20px;
                }
            }
            button {
                width: 100px;
                height: auto;
                height: 100%;
                border: 0px;
                background-color: #000;
                color: #fff;
                cursor: pointer;
            }
            
        }
    }

    > #checkBox {
        display: flex;
        align-items: center;
        padding: 20px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid #000;

        label {
            margin-left: 10px;
        }
    }

    > #loginSub {
        display: flex;
        justify-content: space-between;

        > a {
            width: 30%;
        }
        button {
             border: 1px solid #000;
             background-color: #fff;
             padding: 4px 10px;
             width: 30%;
             height: 30px;

             &:nth-child(1) {
                width: 100%;
                background-color: #000;
                color: #fff;
             }
        }
    }
  }
 

     @media (min-width:250px) and (max-width:1200px) {

        #goodsListContainer {
            #subNav {
                display: none;
            }
        }

        .login {
            
            margin: 15rem auto;
        }
    }
</style>