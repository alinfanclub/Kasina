<template>
      <div class="hamburger" :class="{hamburgerActive : this.$store.state.hamburgerActive === true}">
      <div id="headerVueMobile">
        <div >
          <img src="../../assets/icon/309084_plus_icon.png" alt="" @click="hamburgerToggle()">
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
        <login-area-vue></login-area-vue>
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
</template>

<script>
import CategoriNavVue from '../common/BrandNav.vue'
import BrandNavVue from '../common/CategoriNav.vue'
import LoginAreaVue from '../common/LoginArea.vue'
export default {
    name: "HamburgerVue",
    methods : {
        hamburgerToggle(){
        this.$store.state.hamburgerActive = !this.$store.state.hamburgerActive
        }
    },
    components : {
        CategoriNavVue,
        BrandNavVue,
        LoginAreaVue
    },
}
</script>

<style>

</style>