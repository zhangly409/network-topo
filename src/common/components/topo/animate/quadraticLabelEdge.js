import G6 from '@antv/g6'

const dashArray = [
  [0, 1],
  [0, 2],
  [1, 2],
  [0, 1, 1, 2],
  [0, 2, 1, 2],
  [1, 2, 1, 2],
  [2, 2, 1, 2],
  [3, 2, 1, 2],
  [4, 2, 1, 2],
]

const lineDash = [4, 2, 1, 2]
const interval = 9 // lineDash 的和

const defaultConf = {
  style: {
    lineAppendWidth: 5,
    lineDash: [0, 0],
    lineDashOffset: 0,
    opacity: 1,
    labelCfg: {
      style: {
        fillOpacity: 1,
      },
    },
  },
  /**
   * 绘制边
   * @override
   * @param  {Object} cfg   边的配置项
   * @param  {G.Group} group 边的容器
   * @return {G.Shape} 图形
   */
  drawShape(cfg, group) {
    const item = group.get('item')
    const shapeStyle = this.getShapeStyle(cfg, item)
    const shape = group.addShape('path', {
      className: 'edge-path',
      attrs: shapeStyle,
    })
    return shape
  },
  drawLabel(cfg, group) {
    const labelCfg = cfg.labelCfg || {}
    const labelStyle = this.getLabelStyle(cfg, labelCfg, group)
    const text = group.addShape('text', {
      attrs: {
        ...labelStyle,
        text: cfg.label,
        fontSize: 12,
        fill: '#404040',
        cursor: 'pointer',
      },
      className: 'edge-label',
    })

    return text
  },

  /**
   * 获取图形的配置项
   * @internal 仅在定义这一类节点使用，用户创建和更新节点
   * @param  {Object} cfg 节点的配置项
   * @return {Object} 图形的配置项
   */
  getShapeStyle(cfg, item) {
    const { startPoint, endPoint } = cfg
    const type = item.get('type')

    const defaultStyle = this.getStateStyle('default', true, item)

    if (type === 'node') {
      return Object.assign({}, cfg.style, defaultStyle)
    }

    const controlPoints = this.getControlPoints(cfg)
    let points = [startPoint] // 添加起始点
    // 添加控制点
    if (controlPoints) {
      points = points.concat(controlPoints)
    }
    // 添加结束点
    points.push(endPoint)
    const path = this.getPath(points)

    const style = Object.assign({}, { path }, cfg.style, defaultStyle)
    return style
  },
  getControlPoints(cfg) {
    let controlPoints = cfg.controlPoints // 指定controlPoints

    if (!controlPoints || !controlPoints.length) {
      const { startPoint, endPoint } = cfg
      const innerPoint = G6.Util.getControlPoint(startPoint, endPoint, 0.5, cfg.edgeOffset || 30)
      controlPoints = [innerPoint]
    }
    return controlPoints
  },
  /**
   * 获取三次贝塞尔曲线的path
   *
   * @param {array} points 起始点和两个控制点
   * @returns
   */
  getPath(points) {
    const path = []
    path.push(['M', points[0].x, points[0].y])
    path.push(['Q', points[1].x, points[1].y, points[2].x, points[2].y])
    return path
  },
  /**
   * 根据不同状态，获取不同状态下的样式值
   * @param {string} name
   * @param {string} value
   * @param {Item} item
   */
  getStateStyle(name, value, item) {
    const model = item.getModel()
    const { style = {} } = model

    const defaultStyle = Object.assign({}, this.style)

    // 更新颜色
    return {
      ...defaultStyle,
      lineWidth: 1,
      stroke: '#48A0FF',
      ...style,
    }
  },
  /**
   * 添加动画效果
   * @param {*} cfg
   * @param {*} group
   */
  afterDraw(cfg, group) {
    // 获得该边的第一个图形，这里是边的 path
    const shape = group.get('children')[0]
    // 获得边的 path 的总长度
    const length = shape.getTotalLength()
    let totalArray = []
    // 计算出整条线的 lineDash
    for (var i = 0; i < length; i += interval) {
      totalArray = totalArray.concat(lineDash)
    }

    let index = 0
    // 边 path 图形的动画
    shape.animate(
      () => {
        index++
        if (index > 9) {
          index = 0
        }
        const res = {
          lineDash,
          lineDashOffset: -index,
        }
        // returns the modified configurations here, lineDash and lineDashOffset here
        return res
      },
      {
        repeat: true, // whether executes the animation repeatly
        duration: 3000, // the duration for executing once
      },
    )
  },
}

G6.registerEdge('quadratic-label-edge', defaultConf, 'quadratic')
