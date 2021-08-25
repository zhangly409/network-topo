import G6 from '@antv/g6'
import { getTopoNode } from 'api/example.js'

G6.registerBehavior('click-detail', {
  getEvents() {
    return {
      'node:dblclick': 'onNodeClick',
      'canvas:click': 'onCanvasClick',
    }
  },
  onNodeClick(e) {
    let { item } = e
    let url = (item.getModel() && item.getModel().url) || ''
    let nodeType = (item.getModel() && item.getModel().nodeType) || ''
    if (url) {
      /* 清除已有弹框 */
      let floatDOMs = document.getElementsByClassName('floatDOM')
      if (floatDOMs && floatDOMs.length > 0) {
        for (let i = 0; i < floatDOMs.length; i++) {
          if (floatDOMs[i] != null) floatDOMs[i].parentNode.removeChild(floatDOMs[i])
        }
      }
      let { x, y } = item.getModel()
      let floatDOM = document.createElement('div')
      floatDOM.className = 'floatDOM'
      getTopoNode(url).then(res => {
        let result = res.data.result
        let html = `<div class="header">${nodeType}</div><div class="body">`
        result &&
          Object.keys(result).length > 0 &&
          Object.keys(result).map(key => {
            html += `<div>${key}：  ${result[key]}</div>`
          })
        html += `</div>`
        floatDOM.innerHTML = html
        let canvasXY = this.graph.getCanvasByPoint(x, y)
        floatDOM.style.left = canvasXY.x + 'px'
        floatDOM.style.top = canvasXY.y + 'px'
        let container = document.getElementById('topoContainer')
        container.appendChild(floatDOM)
      })
    }
  },
  onCanvasClick() {
    /* 点击画布时清除已有弹框 */
    let floatDOMs = document.getElementsByClassName('floatDOM')
    if (floatDOMs && floatDOMs.length > 0) {
      for (let i = 0; i < floatDOMs.length; i++) {
        if (floatDOMs[i] != null) floatDOMs[i].parentNode.removeChild(floatDOMs[i])
      }
    }
  },
})
