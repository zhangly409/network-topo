import G6 from '@antv/g6'
import './animate/quadraticLabelEdge.js'
import './animate/playImageNode'
import './behavior/click2Detail.js'

import { baseNode, baseNodeStateStyles } from './base/baseNode'
import { baseEdge, baseEdgeStateStyles } from './base/baseEdge'
import { baseCombo, baseComboStateStyles } from './base/baseCombo'
import { baseLayout } from './base/baseLayout'
import { baseModes } from './base/baseModes'

/**
 * 实例化 Grid 插件
 */
const grid = new G6.Grid()

class NTopo {
  constructor(dom, config = {}) {
    this.container = document.querySelector(dom)
    this.width = Number.parseFloat(getComputedStyle(this.container)['width'])
    this.height = Number.parseFloat(getComputedStyle(this.container)['height']) || 800
    this.init(config)
  }
  init(config) {
    this.graph = new G6.Graph({
      container: this.container,
      width: config.width || this.width,
      height: config.height || this.height,
      renderer: config.renderer || 'svg',
      fitView: config.fitView || true,
      fitViewPadding: config.fitViewPadding || 10,
      groupByTypes: config.groupByTypes || false,
      autoPaint: config.autoPaint || true,
      minZoom: config.minZoom || 0.2,
      maxZoom: config.maxZoom || 10,
      animate: config.animate || false,
      defaultNode: config.defaultNode || baseNode,
      defaultEdge: config.defaultEdge || baseEdge,
      defaultCombo: config.defaultCombo || baseCombo,
      nodeStateStyles: config.nodeStateStyles || baseNodeStateStyles,
      edgeStateStyles: config.edgeStateStyles || baseEdgeStateStyles,
      comboStateStyles: config.comboStateStyles || baseComboStateStyles,
      layout: config.layout || baseLayout,
      modes: config.modes || baseModes,
      plugins: config.plugins || [grid],
    })
  }

  // 读取数据并渲染图
  renderData(data) {
    this.graph.data(data)
    this.graph.render()
  }

  setAutoPaint(data) {
    this.graph.setAutoPaint(data)
  }

  // 更新数据
  updateData(data) {
    this.graph.changeData(data)
  }

  // 刷新数据
  refreshData() {
    this.graph.refresh()
  }

  // 更新layout布局
  updateLayout(cfg) {
    this.graph.updateLayout(cfg)
  }

  // 清除画布元素
  clear() {
    this.graph.clear()
  }

  // 销毁画布
  destroy() {
    this.graph.destroy()
  }

  addBehaviors(behaviors, modes) {
    this.graph.addBehaviors(behaviors, modes)
  }

  removeBehaviors(behaviors, modes) {
    this.graph.removeBehaviors(behaviors, modes)
  }

  changeSize(width, height) {
    this.graph.changeSize(width, height)
  }

  addPlugin(plugin) {
    this.graph.addPlugin(plugin)
  }

  removePlugin(plugin) {
    this.graph.removePlugin(plugin)
  }

  downloadImage(name = 'image') {
    this.graph.downloadImage(name)
  }

  setItemState(item, state, enabled) {
    this.graph.setItemState(item, state, enabled)
  }

  clearItemStates(item, states) {
    this.graph.clearItemStates(item, states)
  }

  refreshPositions() {
    this.graph.refreshPositions()
  }

  // 画布、节点、连线的操作 type支持canvas、node、edge
  handleEvent(type, event, cb) {
    if (!event) return
    const targetEvent = type ? `${type}:${event}` : `${event}`
    if (targetEvent) {
      this.graph.on(targetEvent, evt => {
        cb(evt)
      })
    } else {
      console.warn('没有这个事件')
    }
  }

  // 获取所有节点的位置信息
  getNodePosition() {
    const nodes = this.graph.getNodes()
    const allNodesPosition = nodes.map(item => {
      const id = item._cfg.model.id
      const x = item._cfg.model.x
      const y = item._cfg.model.y
      return { id, x, y }
    })
    return allNodesPosition
  }
  Tooltip(options) {
    return G6.Tooltip(options)
  }
  getZoom() {
    return this.graph.getZoom()
  }
}

export default NTopo
