import { createStore } from 'vuex'
import HeaderData from '@/data/data'
import mutations from './mutations.js'
import actions from './actions.js'
import BrandNav from '@/data/brand_nav_data'
import getters from './getters.js'
const store = createStore({
  state(){
    return {
        HeaderData,
        BrandNav,
        itemList : [],
        mainList : [],
        item : {},
        detailList : [],
        hamburgerActive : false,
        Loading: false,
    }
  },
  mutations,
  actions,
  getters,
})

export default store