/**
 * store入口,引入各个module
 */

import Vue from 'vue'
import Vuex from 'vuex'
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    example, //products为命名空间名，例如可通过调用 this.$state.products.productsList 调用products模块下的 state
  },
})
