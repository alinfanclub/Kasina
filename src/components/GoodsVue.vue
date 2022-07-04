<template>
    <div>
        {{a}}
    </div>
</template>

<script>
export default {
    name : 'GoodsVue',
    created(){
        console.log(this.$route);
    },
    props : {
        a : Array
    }
}
</script>

<style>

</style>