/**
 * 存放单个module的actions，getter  和 mutations
 */

import exampleService from '../../service/exampleService'
import { getProducts, getTopo } from '@/api/example.js'

// 初始化状态
const state = () => ({
  productsList: [],
  allProducts: {},
  appTopo: [],
})

// getters，包含 state 中派生出的一些状态
const getters = {
  productsListCount(state) {
    return state.productsList.length
  },
}

// actions，提交mutation来更改状态
const actions = {
  // 相对复杂的数据处理逻辑放在 service 里处理，常见使用场景：例如需要组合不同 api 返回的数据
  async getProductsList({ commit }) {
    let res = await exampleService.getProductsService()
    commit('setProductsList', res) // 提交 mutation，改变state
  },
  getAllProducts({ commit }) {
    // 不调用service，也可直接调用 api 在 action 里处理数据
    getProducts().then(res => {
      commit('setAllProducts', res)
    })
  },
  getAppTopo({ commit }) {
    getTopo().then(res => {
      commit('updateAppTopo', res.data.result)
    })
  },
}

// mutations，更改 state 的方法（必须且只能通过 mutation 改变 state ）
const mutations = {
  setProductsList(state, res) {
    state.productsList = res
  },
  setAllProducts(state, res) {
    state.allProducts = res
  },
  updateAppTopo(state, res) {
    let resArray = []
    resArray.push(res)
    state.appTopo = resArray
  },
}

export default {
  namespaced: true, // 设置该模块带命名空间
  state,
  getters,
  actions,
  mutations,
}
