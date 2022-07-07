<template>
    <div id="goodsListContainer">
       <div id="subNav">
            <brand-nav-vue></brand-nav-vue>
            <categori-nav-vue></categori-nav-vue>
       </div>
          <div>
            <swiper
            class="swiper"
            :modules="modules"
            :space-between="30"
            :pagination="{ clickable: true }"
            >
                <swiper-slide class="slide"  v-for=" detail in this.$store.state.detailList.image" :key="detail">
                    <img :src="require(`../assets/detail/${this.$store.state.detailList.id}/${detail.image_slide}`)" alt="">
                </swiper-slide>
            </swiper>
            <div id="expended" v-for=" detail in this.$store.state.detailList.image" :key="detail">
                <img :src="require(`../assets/detail/${this.$store.state.detailList.id}/${detail.image_slide}`)" alt="">
            </div>

            <div id="itemLabel">
                <p>소재  : {{this.$store.state.detailList.material}}</p>
                <p>색상  : {{this.$store.state.detailList.color}}</p>
                <p>치수  : {{this.$store.state.detailList.size}}</p>
                <p>제조자  : {{this.$store.state.detailList.made_form}}</p>
                <p>제조연월 :  정확한 제조연월은 배송 받으신 제품의 라벨을 참고하시기 바랍니다.</p>

            </div>
            <div id="itemDetails">
                <details>
                    <summary>
                        Shipping
                    </summary>
                    <ul>
                        <li>
                            - 배송비 : 기본배송료는 3,000원 입니다. (도서,산간,오지 일부지역은 배송비가 추가될 수 있습니다)  50,000원 이상 구매시 무료배송입니다.
                        </li>
                        <li>
                            - 본 상품의 평균 배송일은 3일입니다.(입금 확인 후) 설치 상품의 경우 다소 늦어질수 있습니다.[배송예정일은 주문시점(주문순서)에 따른 유동성이 발생하므로 평균 배송일과는 차이가 발생할 수 있습니다.]
                        </li>
                        <li>
                            - 본 상품의 배송 가능일은 7일 입니다. 배송 가능일이란 본 상품을 주문 하신 고객님들께 상품 배송이 가능한 기간을 의미합니다. (단, 연휴 및 공휴일은 기간 계산시 제외하며 현금 주문일 경우 입금일 기준 입니다.)
                        </li>
                    </ul>
                </details>
                <details>
                  <summary>
                     Return
                  </summary>
                </details>
                <details>
                    <summary>
                        Refund
                    </summary>
                </details>
                <details>
                    <summary>
                        AS
                    </summary>
                </details>
            </div>
          </div>
    </div>
</template>

<script>
import brandNavVue from './BrandNav.vue'
import CategoriNavVue from './CategoriNav.vue'
  import { defineComponent } from 'vue'
  import { Pagination } from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
export default defineComponent( {
    name : 'GoodsVue', 
    data(){
        return {
            saleItem : false,
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }   
        }
    },
    created() {
      console.log(this.$store.state.detailList.image);
      const brand = this.$route.params.id
      this.$store.dispatch('FETCH_DETAIL', brand)
      console.log(this.$store.state.detailList.material);
    },
    components : {
        brandNavVue,
        CategoriNavVue,
        Swiper,
        SwiperSlide
    },
   methods : {
        showSale : function(){
        this.saleItem = !this.saleItem 
        },
    },
   setup() {
      return {
        modules: [Pagination]
      }
    }
})
</script>

<style lang="scss" scoped>
    .swiper {
        width: 700px;
        margin-left: 0;
        .slide {
            width: 100%;
        }

        img {
            width: 100%;
            background-color: #e4e4e4;
        }

       .swiper-pagination-bullet-active {
        background-color: red;
       }
    }
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


                // > .image-area {
                //     display: flex;
                //     flex-wrap: wrap;
                //     justify-content: center;
                //     // width: fit-content;
                //     margin : 0 auto;

                //    > div {
                //      > div {

                //         > div {
                //             height: 250px;
                //             background-color : #fff ;
                //             padding-top: 20px;
                //             p {
                //                 &:nth-child(1) {
                //                     padding-bottom: 5px;
                //                 }
                //                 padding-bottom: 10px;
                //                 font-size: 0.78rem;
                //             }
                //         }
                //     }
                //    }
                // }

            }

            // img {
            //     width: 370px;
            //     background-color: #e4e4e4;
            //     margin-right: 20px;
            // }

            #expended {
                width: 700px;

                img {
                    width: 100%;
                      background-color: #e4e4e4;
                }
            }
        }

        #itemLabel {
            width: 700px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
        }

        #itemDetails {
            width: 700px;
        }
    }   

</style>