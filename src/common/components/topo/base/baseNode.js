const baseNode = {
  type: 'image',
  size: [60, 60],
  labelCfg: {
    position: 'bottom',
    offset: 0.2,
    style: {
      lineWidth: 8,
      fontSize: 12,
      background: {
        fill: '#ffffff',
        padding: [1, 1, 1, 1],
        radius: 2,
      },
    },
  },
}

const baseNodeStateStyles = {
  hover: {
    fill: '#fff',
  },
  active: {
    fill: '#fff',
    lineWidth: 6,
  },
}

export { baseNode, baseNodeStateStyles }
