import { createStore } from 'vuex'
import HeaderData from '@/data/data'
import mainBanner from '@/data/main-banner'
import ItemData from '@/data/goods'
const store = createStore({
  state(){
    return {
        HeaderData,
        mainBanner,
        list : [],
        ItemData
    }
  },
})

export default store