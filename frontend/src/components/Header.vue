<template>
  <div id="headerContainer">
    <div id="headerWrap">
     <ul class="marquee">
        <li v-for="headerList in this.$store.state.HeaderData" :key="headerList" :class="{active : headerList.blink == true}">
            {{headerList.name}}
        </li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
    name: 'HeaderVue',
    computed : {
       
    }
}
</script>

<style scoped>
    #headerContainer {
        background-color: #212529;
        height: 1.8em;
        line-height: 1.8em;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
    }
    #headerWrap .marquee {
        animation: scroll-left 180s linear infinite;
        height: 1.8em;
        line-height: 1.8em;
        width: max-content;
        background-color: #212529;
    }
    #headerWrap .marquee:hover {
        animation-play-state: paused;
    }
    #headerWrap > ul > li {
        padding:2px 50px;
        color: #fff;
        font-size: 0.78rem;
        float: left;
    }
     #headerWrap > ul > li:hover {
        color:#faf300;
        text-decoration: underline;
     }
     #headerWrap > ul .active {
        color : #faf300;
        animation: blink .8s ease-in-out infinite alternate;
     }
    @keyframes scroll-left {
        0% {
            transform: translateX(0%);
        }
        100% { 
            transform: translateX(-100%);
        }
    }

    @keyframes blink {
        0% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }
</style>