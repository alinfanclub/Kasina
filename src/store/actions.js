import { fectchMainList, fectchItemList, fectchDetail } from '@/api/api'

export default{
    FETCH_MAIN(context) {
        fectchMainList()
        .then(response => {
            context.commit('SET_MAIN', response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    // FETCH_BRANDS(context) {
    //     fectchItemList()
    //     .then(response => {
    //         context.commit('SET_ITEMS', response.data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // },
    FETCH_BRANDS({commit}, pageName) {
        fectchItemList(pageName)
        .then(({data}) => commit('SET_ITEMS', data))
        .catch(error => console.log(error))
    },
    FETCH_DETAIL({commit}, id) {
        fectchDetail(id)
        .then(({data}) => commit('SET_DETAIL', data))
        .catch(error => console.log(error))
    }
}