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
            :loop="true"
            :autoplay="{
            delay: 2500,
            disableOnInteraction: false
            }"
            >
                <swiper-slide class="slide"  v-for=" detail in this.$store.state.detailList.image" :key="detail">
                    <img :src="require(`../assets/detail/${this.$store.state.detailList.id}/${detail.image_slide}`)" alt="">
                </swiper-slide>
            </swiper>
            <div id="expended" v-for=" detail in this.$store.state.detailList.image" :key="detail">
                <img :src="require(`../assets/detail/${this.$store.state.detailList.id}/${detail.image_slide}`)" alt="">
            </div>
            <input type="button" id="naverPayBtn" value="네이버페이 결제 버튼">
            <div id="itemLabel">
                <p>소재  : {{this.$store.state.detailList.material}}</p>
                <p>색상  : {{this.$store.state.detailList.color}}</p>
                <p>치수  : {{this.$store.state.detailList.size}}</p>
                <p>제조자  : {{this.$store.state.detailList.made_form}}</p>
                <p>제조연월 :  정확한 제조연월은 배송 받으신 제품의 라벨을 참고하시기 바랍니다.</p>

            </div>
            <div id="itemRelative">
                <p id="itemRelativeHeader">Related</p>
               <div>
                 <div v-for="item in this.$store.state.detailList.realated_image" :key="item">
                    <router-link to="/">
                         <img :src="require(`../assets/detail/${item.id}/${item.image}`)" alt="">
                    </router-link>
                    <p>{{item.name}}</p>
                 </div>
               </div>
            </div>
            <div id="itemDetails">
                <details  @click="toggleSummaryEvent()">
                    <summary>
                        <div>Shipping</div>
                        <div id="summary">
                            <img src="../assets/icon/309084_plus_icon.png" alt="" :class="{toggle_summary : toggleSummary == false, toggle_s : toggleSummary == true}">
                        </div>
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
                <details @click="toggleSummaryEvent2()">
                  <summary>
                     <div>Return</div>
                     <div id="summary">
                        <img src="../assets/icon/309084_plus_icon.png" alt="" :class="{toggle_summary : toggleSummary2 == false, toggle_s : toggleSummary2 == true}">
                     </div>
                  </summary>
                  <ul>
                    <li>
                        - 상품 택(tag)제거 또는 개봉으로 상품 가치 훼손 시에는 상품수령후 7일 이내라도 교환 및 반품이 불가능합니다.
                    </li>
                    <li>
                        - 고객 변심에 의한 교환, 반품은 고객께서 배송비를 부담하셔야 합니다. (제품의 하자,배송오류는 제외)
                    </li>
                    <li>
                        - 일부 상품은 신모델 출시, 부품가격 변동 등 제조사 사정으로 가격이 변동될 수 있습니다.
                    </li>
                    <li>
                        - 신발의 경우, 실외에서 착화하였거나 사용흔적이 있는 경우에는 교환/반품 기간내라도 교환 및 반품이 불가능 합니다.
                    </li>
                    <li>
                        - 제품 및 본 상품의 박스 훼손, 분실 등으로 인한 상품 가치 훼손 시 교환 및 반품이 불가능 하오니, 양해 바랍니다.
                    </li>
                  </ul>
                </details>
                <details @click="toggleSummaryEvent3()">
                    <summary>
                        <div>Refund</div>
                        <div id="summary">
                            <img src="../assets/icon/309084_plus_icon.png" alt="" :class="{toggle_summary : toggleSummary3 == false, toggle_s : toggleSummary3 == true}">
                        </div>
                    </summary>
                    <ul>
                        <li>
                            - 상품 청약철회 가능기간은 상품 수령일로 부터 7일 이내 입니다.
                        </li>
                    </ul>
                </details>
                <details @click="toggleSummaryEvent4()">
                    <summary >
                        <div>AS</div>
                        <div id="summary">
                            <img src="../assets/icon/309084_plus_icon.png" alt="" :class="{toggle_summary : toggleSummary4 == false, toggle_s : toggleSummary4 == true}">
                        </div>
                    </summary>
                    <ul>
                        <li>
                            - 소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.
                        </li>
                        <li>
                            - A/S는 판매자에게 문의하시기 바랍니다.
                        </li>
                    </ul>
                </details>
            </div>
          </div>
    </div>
</template>

<script>
import brandNavVue from './BrandNav.vue'
import CategoriNavVue from './CategoriNav.vue'
import { defineComponent } from 'vue'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/vue'
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
            },
            toggleSummary : true, 
            toggleSummary2 : true, 
            toggleSummary3 : true, 
            toggleSummary4 : true, 

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

        toggleSummaryEvent: function() {
            this.toggleSummary = !this.toggleSummary
        },
        toggleSummaryEvent2: function() {
            this.toggleSummary2 = !this.toggleSummary2
        },
        toggleSummaryEvent3: function() {
            this.toggleSummary3 = !this.toggleSummary3
        },
        toggleSummaryEvent4: function() {
            this.toggleSummary4 = !this.toggleSummary4
        },r
    },
   setup() {
      return {
        modules: [Pagination, Autoplay]
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

            }


            #expended {
                width: 700px;
                img {
                    width: 100%;
                      background-color: #e4e4e4;
                      margin-bottom: 50px;

                      &:nth-of-type(1) {
                        margin-top: 50px;
                      }
                }
            }
        }

        #itemLabel {
            width: 700px;
            border-top: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            margin: 50px 0 0 0;

            p {
                margin : 8px 0;
                padding:  0 10px;
                color: #666;
            }
        }

        #itemDetails {
            width: 700px;
            padding-bottom: 200px;  
            details {
            

                ul {
                    padding: 20px 0;

                    li {
                        padding: .7em .5em;
                        word-break: break-all;
                    }
                }
                summary {
                    display: flex;
                    align-items: center;padding: 10px 10px;
                    justify-content: space-between;

                    &::marker{
                        font-size:20px;
                    }

                    &::-webkit-details-marker {
                        display:none;
                    }

                    div {
                        &:nth-child(2) {
                            height: 12px;
                            display: flex;
                            align-items: center;
                        }
                        img {
                            width: 12px;
                            height: 12px;  
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
            .toggle_summary {
                transform: rotate(315deg);
                transition: .5s;
            }
            .toggle_s {
                transform: rotate(-0deg);
                transition: .5s;
            }
            details {
                border-bottom: 1px solid #dbdbdb;

                &:nth-of-type(1) {
                    border-top: 1px solid #dbdbdb;
                }
            }
        }
    }  

    #itemRelative {
        padding: 100px 0;
        padding-bottom: 200px;
        max-width: 700px;
        widows: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;

        #itemRelativeHeader {
            top: 0;
            left: 0;
        }
        
       > div {
        width: 90%;
        display: flex;
        justify-content: space-around;

         > div {
            text-align: left;
            width: 240px;

            img {
                width: 100%;
                background-color: #dbdbdb;
            }

            p {
                margin-top: 20px;
            }
        
        }
       }
    }

    @media (min-width:250px) and (max-width:1200px) {

        .swiper {
            width: 100%;
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

            #subNav {
                display: none;
            }

            > div {
                &:nth-child(1) {
                    display: flex;
                    position: fixed;
                }
                &:nth-child(2) {
                    // background-color: aquamarine;
                    width: 90%;
                    margin: 0 auto;
                    margin-top: 1.5rem;

                }


                #expended {
                    width: 100%;
                    img {
                        width: 100%;
                        background-color: #e4e4e4;
                        margin-bottom: 50px;

                        &:nth-of-type(1) {
                            margin-top: 50px;
                        }
                    }
                }
            }
            #itemLabel {
            width: 100%;
            border-top: 1px solid #dbdbdb;
            border-bottom: 1px solid #dbdbdb;
            margin: 50px 0 0 0;

                p {
                    margin : 8px 0;
                    padding:  0 10px;
                    color: #666;
                }
            }
             #itemDetails {
                width: 100%;
                padding-bottom: 200px;  
                details {
                

                    ul {
                        padding: 20px 0;

                        li {
                            // padding: .7em .5em;
                            word-break: break-all;
                        }
                    }
                    summary {
                        display: flex;
                        align-items: center;padding: 10px 10px;
                        justify-content: space-between;

                        &::marker{
                            font-size:20px;
                        }

                        &::-webkit-details-marker {
                            display:none;
                        }

                        div {
                            &:nth-child(2) {
                                height: 12px;
                                display: flex;
                                align-items: center;
                            }
                            img {
                                width: 12px;
                                height: 12px;  
                                display: flex;
                                align-items: center;
                            }
                        }
                    }
                }
                .toggle_summary {
                    transform: rotate(315deg);
                    transition: .5s;
                }
                .toggle_s {
                    transform: rotate(-0deg);
                    transition: .5s;
                }
                details {
                    border-bottom: 1px solid #dbdbdb;

                    &:nth-of-type(1) {
                        border-top: 1px solid #dbdbdb;
                    }
                }
            }

              #itemRelative {
                padding: 100px 0;
                padding-bottom: 200px;
                max-width: 700px;
                display: block;
                justify-content: space-between;
                position: relative;

                #itemRelativeHeader {
                    top: 0;
                    left: 0;
                    margin-bottom: 20px;
                }
                
            > div {
                width: 100%;
                display: flex;
                justify-content: space-around;

                > div {
                    text-align: left;
                    width: fit-content;
                    width: 40%;

                    img {
                        width: 100%;
                        background-color: #dbdbdb;
                    }

                    p {
                        margin-top: 20px;
                    }
                
                }
            }
            }
        }
        
  
    }
</style>