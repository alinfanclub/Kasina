<template>
  <div id="container">
    <div>
      &nbsp;
    </div>
    <div>
        <router-link to="/">
            <img src="../../assets/icon/main-logo.png" alt="">
        </router-link>
    </div>
    <div>
        <img src="../../assets/icon/menu-icon.png" alt="" @click="hamburgerToggle()">
    </div>
  </div>
</template>

<script>
export default {
    methods : {
       
    hamburgerToggle : function() {
        this.$store.state.hamburgerActive = !this.$store.state.hamburgerActive
    }
    },
}
</script>

<style lang="scss" scoped>
    #container {
        display: flex;
        padding: .5rem 0;
        width: 100vw;;
        border-bottom: 1px solid #000;

        > div {
            width: 33.33%;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: center;

            &:nth-child(2) {
               img {
                 width: 70%;
               }
            }

            &:nth-child(3) {
                img {
                    width: 30%;
                    margin-right: 1rem;
                }
            }
        }
         img {
            display: flex;
            margin: 0 auto;
            align-items: center;
        }
    }
</style>