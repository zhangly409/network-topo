const baseEdge = {
  type: 'flow-edge',
  style: {
    stroke: '#888',
    lineWidth: 2,
  },
}

const baseEdgeStateStyles = {
  // click 状态为 true 时的样式
  hover: {
    fill: '#fff',
    lineWidth: 3,
  },
  active: {
    fill: '#fff',
    lineWidth: 6,
  },
}

export { baseEdge, baseEdgeStateStyles }
