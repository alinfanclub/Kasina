<template>
  <div id="WholeCotainer">
    <div id="headerVue">
        <header-vue></header-vue>
        <div id="mn"> <mobile-nav></mobile-nav></div>
    </div>
    <div class="hamburger" :class="{hamburgerActive : this.$store.state.hamburgerActive === true}">
      <div id="headerVueMobile">
        <div >
          <img src="./assets/icon/309084_plus_icon.png" alt="" @click="hamburgerToggle()">
        </div>
        <div>
          <ul>
              <li>WEB STORE</li>
              <li>REATURE</li>
              <li>STORES</li>
              <li>.WAV</li>
          </ul>
        </div>
      </div>
      <div id="loginAreaMobile">
        <login-area></login-area>
      </div>
      <div>
        <div>
          <brand-nav-vue></brand-nav-vue>
        </div>
        <div>
          <categori-nav-vue></categori-nav-vue>
        </div>
      </div>
    </div>
    <div id="mainContent">
        <div id="mainNav">
            <div>
              <main-nav></main-nav>
            </div>
        </div>
        <div>
          <div id="contentArea">
              <div id="loginArea">
                <login-area></login-area>
              </div>
              <main-contents></main-contents>
          </div>
          <footer-vue></footer-vue>
      </div>
    </div>
  </div>
</template>

<script>
    
import HeaderVue from './components/Header.vue'
import MainNav from './components/MainNav.vue'
import MainContents from './Contents.vue'
import LoginArea from './components/LoginArea.vue'
import FooterVue from './components/Footer.vue'
import MobileNav from './components/mobile/MobileNav.vue'
import CategoriNavVue from './components/CategoriNav.vue'
import BrandNavVue from './components/BrandNav.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    MainNav,
    MainContents,
    LoginArea,
    FooterVue,
    MobileNav,
    CategoriNavVue,
    BrandNavVue
  },
  methods : {
    hamburgerToggle(){
      this.$store.state.hamburgerActive = !this.$store.state.hamburgerActive
    }
  },
  created () {
    console.log(process.env.VUE_APP_TITLE);
  }
}
</script>

<style lang="scss">
body, th, td, h1, h2, h3, h4, h5, h6, input, select, textarea, button {
  color: #212529;
    font-size: .78rem;
    font-weight: normal;
    line-height: 1.8;
    font-family: 'Roboto';
}
* {
  margin : 0;
  padding: 0;
  color: #212529;;
}
a {
  color: #212529;
  text-decoration: none;
}
li {
  list-style: none;
}

#WholeCotainer {
  border-bottom: 1px solid #212529;
  margin-bottom: 1px;
  box-sizing: border-box;

   #headerVue {
      position: fixed;
      height: fit-content;
      z-index: 99;
      #mn {
        display: none;
      }
    }
    .hamburger {
      transition: .3s;
      overflow: scroll;
      position: fixed;
      width: 0;
      top: 0;
      left: 0;
      height: 100vh;
      background-color:#fff;
      z-index: 999;
      #headerVueMobile {
        // background-color: beige;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > div {
          padding: 10px;
          &:nth-child(1) {
            text-align: right;

            img {
              transform: rotate(45deg);
              width: 13%;
            }
          }
          &:nth-child(2) {
            font-size: .9rem;
            font-weight: 700;
          }
        }
      }
      #loginAreaMobile {
        #loginContainer {
          position: relative;
          top: 0;
          left: 0;
          padding-bottom: 20px;
          ul {
            margin: 0;
            padding-right: 20px;
          }
          border-bottom:  1px #212529 solid;
        }
      }
      > div {
        &:nth-child(3) {
          display: flex;
          margin-top: 1px;
            border-top: 1px solid #212529;
          > div {
              width: 50%;

              &:nth-child(1) {
                border-right: 1px solid #212529;
                ul {
                  > li {
                    padding-left: 10px;
                    &:nth-child(1) {
                      padding-left: 0;
                      font-weight: 700;
                    }
                  }
                }
              }
          }
          #brandNav {
            position: relative;
            > div {
              margin-top: 0;
              padding: 0;
              &:nth-child(1) {
                position: relative;
               background-color: transparent;
               padding: 10px 0;
               font-weight: 700;
              }
              &:nth-child(2) {
                margin-top: 20px;
                height: 100%;
                overflow:auto;

               
              }
            }
          }
        }
      }
    }

    .hamburgerActive {
      width: 100%;
    }
}
#mainContent {
  display: flex;
  main-nav {
    position: absolute;
    top: 0;
    left: 0;
  }
  > div {
    &:nth-child(2) {
         width: 100%;
        display: flex;
        flex-direction: column;
        > div {
          margin: 1.8rem 0 0 120px;
        }
    }
  }
}




::selection {
  background-color: #de0000;
  color: #fff;
}


    @media (min-width:250px) and (max-width:1200px) {
      #WholeCotainer  {
        #headerVue {
        background-color: rgba(255, 255, 255, 0.5);
        #mn {
          display: block;
        }
      }
      }
      #mainContent {
        #loginArea {
          position: relative;
          display: none;
        }
        > div {
          &:nth-child(1) {
            > div {
              &:nth-child(1) {
                display: none;
              }
            }
          }
          &:nth-child(2) {
           > div {
            margin-top: 4.6rem;
            margin-left: 0;
           }
          }
        }
      }
    }
</style>
