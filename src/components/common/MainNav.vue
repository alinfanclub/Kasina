<template>
  <div id="navContainer">
    <div>
       <router-link to="/">
         <img src="../../assets/icon/main-logo.png" alt="MainLogo">
       </router-link>
    </div>
    <ul>
        <li>WEB STORE</li>
        <ul>
            <li>BRANDS</li>
            <li>CATEGORIES</li>
            <li>&nbsp;</li>
            <li>NEW</li>
            <li class="high-light">TIME ATTACK</li>
            <li>DRAW</li>
            <li>SNEAKER</li>
            <li class="high-light">SALE</li>
            <li>RESTOCK</li>
        </ul>
        <li>FEATURE</li>
        <li>STORES</li>
        <li>.WAV</li>
    </ul>
  </div>
</template>

<script>
export default {
    name : 'MainNav'
}
</script>

<style scoped lang="scss">
    #navContainer {
        background-color: #fff;
        position: fixed;
        width: 120px;
        height: calc(100vh - 1px);
        border-right: 1px solid #212529;
        z-index: 90;

        img {
            width: 120px;
            // transform: translateX(-120px);
            padding: 85px 15px 20px 15px;
            box-sizing: border-box;
        }
        
        li {
            font-weight: 900;
        }
        > ul {
                font-size: 0.9rem;
            > li {
                margin-left: 15px;
                &:nth-of-type(1) {
                    padding-bottom: 8px;
                }
                &:nth-of-type(2){
                    padding: 8px 0 0 0;
                }
            }
            > ul {
                border-bottom:  1px solid #212529;
                border-top: 1px solid #212529;
                padding: 8px 0;

                > li {
                    padding-left: 15px;
                    line-height: 21px;
                }
            }

            .high-light {
                color: #de0000;
            }
            li:hover {
                text-decoration: underline;
                text-decoration-color: #212529;
            }
        }
    }
</style>