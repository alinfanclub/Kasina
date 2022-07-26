<template>
   <div id="brandNav">
        <div>
            BRANDS
        </div>
       <div>
         <ul>
             <li v-for="a in this.$store.state.BrandNav.a" :key="a" :class="{click_false : a.click == false}">
                  <router-link :to="`/brand/${a.id}`" :class="{under_line : a.under_line == true}">
                    {{a.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="b in this.$store.state.BrandNav.b" :key="b" :class="{click_false : b.click == false}">
                  <router-link :to="`/brand/${b.id}`" :class="{under_line : b.under_line == true}">
                    {{b.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="c in this.$store.state.BrandNav.c" :key="c" :class="{click_false : c.click == false}">
                  <router-link :to="`/brand/${c.id}`" :class="{under_line : c.under_line == true}">
                    {{c.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="d in this.$store.state.BrandNav.d" :key="d" :class="{click_false : d.click == false}">
                  <router-link :to="`/brand/${d.id}`" :class="{under_line : d.under_line == true}">
                    {{d.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="e in this.$store.state.BrandNav.e" :key="e" :class="{click_false : e.click == false}">
                  <router-link :to="`/brand/${e.id}`" :class="{under_line : e.under_line == true}">
                    {{e.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="g in this.$store.state.BrandNav.g" :key="g" :class="{click_false : g.click == false}">
                  <router-link :to="`/brand/${g.id}`" :class="{under_line : g.under_line == true}">
                    {{g.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="h in this.$store.state.BrandNav.h" :key="h" :class="{click_false : h.click == false}">
                  <router-link :to="`/brand/${h.id}`" :class="{under_line : h.under_line == true}">
                    {{h.name}}
                </router-link>
            </li>
        </ul>
        <ul>
            <li v-for="i in this.$store.state.BrandNav.g" :key="i" :class="{click_false : i.click == false}">
                  <router-link :to="`/brand/${i.id}`" :class="{under_line : i.under_line == true}">
                    {{i.name}}
                </router-link>
            </li>
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

            &::-webkit-scrollbar {
                width: 1px;
            }
            &::-webkit-scrollbar-track {
                background-color: #eee;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #333;
            }
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
    .under_line {
        text-decoration: underline;
        text-decoration-color: #de0000;
    }
    .click_false {
        pointer-events: none;
    }
</style>