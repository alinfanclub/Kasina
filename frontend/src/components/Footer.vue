<template>
  <div id="footerContainer">
    <section>
        <div>
            <div id="ASNumber">
                1대1 문의
            </div>
            <ul>
                <li>고객센터 - 02 3443 8144</li>
                <li>AM 08:30 - PM 16:30 (Mon-Fri)</li>
                <li>신한 140-010-425880 (주)카시나</li>
            </ul>
            <p>© KASINA</p>
        </div>
        <div>
            <ul>
                <li>인스타그램</li>
                <li>유튜브</li>
            </ul>
            <ul>
                <li>FAQ</li>
                <li>개인정보</li>
                <li>이용약관</li>
            </ul>
            <ul>
                <li>회사소개</li>
                <li>협업문의</li>
                <li>채용</li>
            </ul>
        </div>
    </section>
    <section>
        <div>
            상호명: (주)카시나 | 대표 : 이은혁 | 개인정보관리자: 이현정 | 사업자등록: 211-87-21265 확인 | 통신판매업신고번호: 강남-05242호 | 전화: 02-3443-8144 | 팩스: 02-3446-8148 | 주소: 서울특별시 강남구 언주로164길 13
        </div>
    </section>
  </div>
</template>

<script>
export default {
    name : 'FooterVue',
}
</script>
    
<style lang="scss" scoped>
    #footerContainer {
        border-top: 1px solid #212529;
        padding: 0;
        font-size: 0.7rem;
        > section {
            padding: 20px;

          #ASNumber {
            border: 1px solid #212529;
            padding: 10px 20px;
            width: fit-content;
          }
          &:nth-child(1) {
            display: flex;
            border-bottom: 1px solid #212529;

            > div {
                width: 40%;

                &:nth-child(1) {
                    ul {
                        margin: 20px 0;

                        li {
                            line-height: 1.8;
                        }
                    }
                }

                &:nth-child(2) {
                    display: flex;
                     width: 60%;
                     flex-direction: row-reverse;

                    ul {
                        max-width: 150px;
                        width: 100%;
                        padding: 0 15px;
                        

                        li {
                            line-height: 1.8;
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
          }
        }
    }
</style>