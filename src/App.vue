<template>
  <div id="WholeCotainer">
    <div id="headerVue">
        <header-vue></header-vue>
        <div id="mn"><mobile-nav></mobile-nav></div>
    </div>
    <hamburger-vue></hamburger-vue>
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
    
import HeaderVue from './components/common/Header.vue'
import MainNav from './components/common/MainNav.vue'
import MainContents from './views/ContentsView.vue'
import LoginArea from './components/common/LoginArea.vue'
import FooterVue from './components/common/Footer.vue'
import MobileNav from './components/mobile/MobileNav.vue'
import HamburgerVue from './components/mobile/Hamburger.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    MainNav,
    MainContents,
    LoginArea,
    FooterVue,
    MobileNav,
    // LoadingSpinnerVue,
    HamburgerVue
  },
  created () {
    console.log(process.env.VUE_APP_TITLE);
  }
}
</script>

<style lang="scss">
  @import url(./css/common.css);
</style>
