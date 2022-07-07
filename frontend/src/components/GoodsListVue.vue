<template>
    <div id="goodsListContainer">
       <div id="subNav">
            <brand-nav-vue></brand-nav-vue>
            <categori-nav-vue></categori-nav-vue>
       </div>
        <div>
            <!-- <div class="item-header">
                <button>Advanced Search +</button>
                <h2>"{{this.$store.state.itemList.page_h}}"</h2>
            </div> -->
            <div class="item-headers">
                <p>{{this.$store.state.itemList.page_h}}</p>
                <ul v-if="this.$store.state.itemList.categori == true">
                   <li>CLOTHING</li>
                    <li>ACCESSORY</li>
                    <li>HEADWEAR</li>
                    <li @click="showSale" v-if="this.$store.state.itemList.sale == true">OUTLET</li>
                </ul>
            </div>
            <div class="brand-story">
                <p>{{this.$store.state.itemList.brand_s}}</p>
            </div>
            <div class="item-set">
                <ul>
                    <li @click="priceSort()">PRICE↑</li>
                    <li>PRICE↓</li>
                    <li>NEW</li>
                </ul>
            </div>
           <div class="image-area" v-if="saleItem == false">
                <div v-for="item in this.$store.state.itemList.items" :key="item">
                   <div>
                        <router-link :to="`/goods/detail/${item.detail}`">
                             <img :src="require(`../assets/goods/${item.id}/${item.image}`)" alt="image">
                        </router-link>
                    <div>
                        <p>{{item.brand}}</p>
                        <p>{{item.name}}</p>
                        <p :class="{cross_line : item.sale == true}">￦{{item.price}}</p>
                        <p v-if="item.sale == true" class="sale-price">￦{{item.sale_price}}</p>
                    </div>
                   </div>
                </div>
           </div>
           <div class="image-area" v-if="saleItem == true" >
                <div v-for="item in this.$store.state.itemList.items" :key="item">
                    <div v-if="item.sale == true">
                        <img :src="require(`../assets/goods/${item.id}/${item.image}`)" alt="image">
                        <div>
                            <p>{{item.brand}}</p>
                            <p>{{item.name}}</p>
                            <p :class="{cross_line : item.sale == true}">￦{{item.price}}</p>
                            <p v-if="item.sale == true" class="sale-price">￦{{item.sale_price}}</p>
                        </div>
                    </div>
                </div>
           </div>
           <div class="page-array">
                <div>1</div>
           </div>
        </div>
    </div>
</template>

<script>
import brandNavVue from './BrandNav.vue'
import CategoriNavVue from './CategoriNav.vue'
// import { mapGetters } from 'vuex'
// import {useRoute} from 'vue-router'
export default {
    name : 'GoodsVue', 
    data(){
        return {
            saleItem : false
        }
    },
    created() {
      const brand = this.$route.params.id
      this.$store.dispatch('FETCH_BRANDS', brand)
    //   console.log(this.$store.state.itemList[0].id);
    },
    components : {
        brandNavVue,
        CategoriNavVue
    },
   methods : {
    // priceSort(){
    //     this.$store.state.itemList.items.price.toNumber().sort()
    // }
    showSale : function(){
        this.saleItem = !this.saleItem 
    },
}
}
</script>

<style lang="scss" scoped>
    #goodsListContainer {
        display: flex;
        // background-color: aqua;

        > div {
            &:nth-child(1) {
                width: 300px;
                display: flex;
                position: fixed;
            }
            &:nth-child(2) {
                // background-color: aquamarine;
                width: 77%;
                margin: 0 auto;
                margin-left: 300px;
                margin-top: 140px;


                > .image-area {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    // width: fit-content;
                    margin : 0 auto;

                   > div {
                     > div {

                        > div {
                            height: 250px;
                            background-color : #fff ;
                            padding-top: 20px;
                            p {
                                &:nth-child(1) {
                                    padding-bottom: 5px;
                                }
                                padding-bottom: 10px;
                                font-size: 0.78rem;
                            }
                        }
                    }
                   }
                }

            }

            img {
                width: 370px;
                background-color: #e4e4e4;
                margin-right: 20px;
            }
        }

        .item-set {
            > ul {
                display: flex;
                justify-content: right;
                flex-direction: row-reverse;
                font-size: .78rem;

                > li {
                    padding-left: 10px;
                }
            }
            margin-bottom: 50px;
        }
        .page-array {
            text-align: center;
            padding-bottom: 50px;
            width: fit-content;
            margin: 0 auto;
           > div {
             border: 1px solid black;
             width: 20px;
             height: 20px;
           }
        }

        .item-header {
            button {
                border: none;
                color: white;
                background-color: black;
                padding: 2px;
                margin-bottom: 16.5px;
            }

            h2 {
                font-size: 2rem;
                font-weight: 500;
            }

            small {
                font-size: 0.8rem;
            }
        }

        .item-headers {
            font-size: 0.78rem;
             ul {
                margin-top: 16px;
                display: flex;

                li {
                    margin-right: 10px;
                    cursor: pointer;
                    &:nth-child(1) {
                        margin-left: 20px;
                        position: relative;

                        &::before {
                            content: '';
                            width: 5px;
                            height: 6px;
                            border-left: 1px solid #aaa;
                            border-bottom: 1px solid #aaa;
                            // background-color: blue;
                            position: absolute;
                            top: 50%;
                            transform: translateY(calc(-50% - 6px));
                            left: -15px;
                        }
                    }
                }
             }
        }

        .brand-story {
            padding-top: 20px;
            padding-bottom: 30px;
        }

        .cross_line {
            text-decoration: line-through;
        }

        .sale-price {
            color : #de0000
        }
    }   
</style>