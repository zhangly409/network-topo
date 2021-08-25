import G6 from '@antv/g6'

G6.registerNode(
  'play-image-node',
  {
    afterDraw(cfg, group) {
      cfg.size = cfg.size[0] || cfg.size
      let size = cfg.size
      let width = size - 4
      let height = size - 4
      let r = cfg.size / 2
      let img = cfg.img || null
      let nodeStatus = cfg.nodeStatus
      // 添加图片
      if (img) {
        group.addShape('image', {
          zIndex: 1,
          attrs: {
            x: -width / 2,
            y: -height / 2,
            width: width,
            height: height,
            img: img,
          },
        })
      } else {
        group.addShape('text', {
          zIndex: 1,
          attrs: {
            x: 0,
            y: 0,
            textAlign: 'center',
            textBaseline: 'middle',
            text: cfg.nodeType,
            fill: '#666',
          },
        })
      }
      let x, y, position
      position = cfg.position
      switch (position) {
        case 'top':
          x = -size / 2 + 21
          y = -size / 2 - 12
          break
        case 'bottom':
          x = -size / 2 + 21
          y = -size / 2 + 60
          break
        case 'left':
          x = -size / 2 - 12
          y = -size / 2 + 16
          break
        case 'right':
          x = size / 2
          y = -size / 2 + 16
          break
        default:
          x = size / 2 - 16
          y = -size / 2 - 6
          break
      }
      // 添加 warning 图标
      group.addShape('image', {
        attrs: {
          x: x,
          y: y,
          width: 20,
          height: 20,
          img: require('@/assets/warning.png'),
        },
      })
      if (nodeStatus === 'error') {
        let back1 = group.addShape('circle', {
          zIndex: -3,
          attrs: {
            x: 0,
            y: 0,
            r,
            fill: nodeStatus === 'error' ? 'red' : '#E6A23C',
            opacity: 0.6,
          },
          name: 'back1-shape',
        })
        let back2 = group.addShape('circle', {
          zIndex: -2,
          attrs: {
            x: 0,
            y: 0,
            r,
            opacity: 0.6,
          },
          name: 'back2-shape',
        })
        let back3 = group.addShape('circle', {
          zIndex: -1,
          attrs: {
            x: 0,
            y: 0,
            r,
            opacity: 0.6,
          },
          name: 'back3-shape',
        })
        group.sort()
        back1.animate(
          {
            r: r + 10,
            opacity: 0.1,
          },
          {
            duration: 3000,
            easing: 'easeCubic',
            delay: 0,
            repeat: true,
          },
        )
        back2.animate(
          {
            r: r + 10,
            opacity: 0.1,
          },
          {
            duration: 3000,
            easing: 'easeCubic',
            delay: 1000,
            repeat: true,
          },
        )
        back3.animate(
          {
            r: r + 10,
            opacity: 0.1,
          },
          {
            duration: 3000,
            easing: 'easeCubic',
            delay: 2000,
            repeat: true,
          },
        )
      }
    },
    options: {
      style: {
        strokeWidth: 0,
        fill: '#fff',
      },
    },
  },
  'circle',
)
