<template>
  <div id="WholeCotainer">
    <header-vue></header-vue>
    <div id="mainContent">
      <main-nav></main-nav>
     <div>
       <div>
        <login-area></login-area>
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
import MainContents from './components/Contents.vue'
import LoginArea from './components/LoginArea.vue'
import FooterVue from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    HeaderVue,
    MainNav,
    MainContents,
    LoginArea,
    FooterVue
  }
}
</script>

<style lang="scss">
* {
  margin : 0;
  padding: 0;
  font-family: 'Roboto-Medium';
  font-weight: 500 ;
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
}
#mainContent {
  display: flex;
  main-nav {
    position: absolute;
    top: 0;
    left: 0;
  }
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;

    > div {
      margin: 1.8rem 0 0 120px;

      > div {
        width: 1300px;
        margin: 0 auto;
      }
    }
    
  }
}

::selection {
  background-color: #de0000;
  color: #fff;
}
@font-face {
  font-family: 'Roboto-Medium';
  src: url(./fonts/Roboto-Medium.ttf);
  font-weight: 500;
}
@font-face {
  font-family: 'Roboto-Regular';
  src: url(./fonts/Roboto-Regular.ttf);
  font-weight: 300;
}
</style>
