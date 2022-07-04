<template>
  <div id="bannerItem">
    <div v-for="(banners, i) in this.$store.state.mainBanner" :key="i" >
      <router-link :to="`/brand/${banners.id}`" :a = a>
         <img :src='banners.image' alt="image">
        <div>
          <p>{{banners.name}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name : 'MainBanner',
    data(){
      return {
        a : 0
      }
    },
    computed : {
      
    },
  //   methods: {
  //   randomList: function(rand){
  //     return rand.sort(function(){return 0.5 - Math.random()});
  //   }
  // }
}
</script>

<style lang="scss" scoped> 
  #bannerItem {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 2%;
    max-width: 1400px;
    width: 100%;
    > div {
      width: 49%;
      position: relative;
      // padding: 2% 0 0 0;
      img {
        width: 100%;
        padding: 1% 0;
      }

       div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        height: 100%;
        opacity: 0;

        &:hover {
          opacity: 1;
        }
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align: center;
        font-size: 3rem;
        color: #333;
      }
    }
  }
</style>