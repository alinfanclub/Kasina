<template>
  <div v-for="items in this.$store.state.ItemData" :key="items">
    {{items.puma.name}}
  </div>
</template>

<script>
// import {useRoute} from 'vue-router'
export default {
    name : 'GoodsVue', 
    data(){
        return {
            goodsData : ''
        }
    },
    created(){
        return {
           
        }
    },
    props : {
        a : Number,
    },
}
</script>

<style>

</style>