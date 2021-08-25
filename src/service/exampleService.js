import { getProducts } from '@/api/example.js'

export default {
  async getProductsService() {
    let projectListResult = await getProducts().then(res => {
      let projectList = []
      let result = res.data.result
      result &&
        Object.keys(result).map(pid => {
          projectList.push({
            id: pid,
            title: result[pid].title,
            inventory: result[pid].inventory,
            price: result[pid].price,
          })
        })
      return projectList
    })
    return projectListResult
  },
}
