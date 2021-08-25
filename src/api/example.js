/**
 * 存放单个module的api
 */
import axios from '@/common/api/request'

const getProducts = function () {
  return axios({
    url: '/mock/getProducts',
    method: 'get',
  })
}
const deleteProduct = function () {
  return axios({
    url: '/mock/deleteProducts',
    method: 'post',
  })
}
const getTopo = function () {
  return axios({
    url: 'mock/getTopo',
    method: 'get',
  })
}
const getTopoNode = function (url) {
  return axios({
    url: 'mock/getTopoNode',
    method: 'get',
  })
}

export { getProducts, deleteProduct, getTopo, getTopoNode }
