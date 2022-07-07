import axios from "axios";

const config = {
    baseUrl:'https://alinfanclub.github.io/kasina_data/'
}

function fectchMainList() {
    //    return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}main/main.json`);
}
function fectchItemList(brand) {
    //    return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}brands/${brand}.json`);
}
function fectchDetail(id) {
    //    return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}goods_detail/${id}.json`);
}

export {
    fectchMainList,
    fectchItemList,
    fectchDetail
}