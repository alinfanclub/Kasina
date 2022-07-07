<template>
   <div id="brandNav">
        <div>
            CATEGORIES
        </div>
       <div>
         <ul>
            <li>NEW</li>
        </ul>
         <ul>
            <li>SNEAKER</li>
            <li>CLOTHING</li>
            <li>HEADWEAR</li>
            <li>ACC</li>
        </ul>
         <ul>
            <li>SKATE</li>
            <li>WOMAN</li>
            <li>KIDS</li>
            <li>PET</li>
        </ul>
         <ul>
            <li class="high-light">SALE</li>
             <li>SNEAKER</li>
            <li>CLOTHING</li>
            <li>HEADWEAR</li>
            <li>ACC</li>
        </ul>
       </div>
    </div>
</template>

<script>
export default {
    name : 'subNav'
}
</script>

<style lang="scss" scoped>
    #brandNav {
        width: 140px;
        padding-left: 10px;
        box-sizing: border-box;
        font-size: 0.78rem;

        > div {
            margin-bottom: 20px;

            &:nth-child(1) {
                position: fixed;
                padding-top: 140px;
                background-color: #fff;
                width: 150px
            }
            &:nth-child(2) {
                height: 84vh;
                margin-top: 180px;
                overflow: scroll;
            }
        }
    }
    ul {
        margin-bottom:40px;
        li {
            line-height: 2;

             &:hover {
            text-decoration: underline;
            }
        }
    }

    .high-light {
        color: #de0000;;
    }
</style>