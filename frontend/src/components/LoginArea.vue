<template>
  <div id="loginContainer">
    <ul>
        <li>CART / {{cartedItem}}</li>
        <li>LOGIN</li>
        <li>SEARCH</li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'LoginArea',
    data(){
        return {
            cartedItem : 0,
        }
    }
}
</script>

<style lang="scss" scoped>
    #loginContainer {
        position: fixed;
        top: 0;
        right: 0;
        height: fit-content;
        z-index: 99;
        ul {
            display: flex;
            flex-direction: row-reverse;
            margin: 8px 10px 0 0;

            > li {
                font-family: 'Roboto-Regular';
                padding-left: 10px;
                font-size: 0.78rem;
            }
        }
    }
    
</style>