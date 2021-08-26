<template>
  <div id="topoContainer"></div>
</template>

<script>
import GTopo from 'common/components/topo'
export default {
  name: 'ExampleTable',
  props: {
    data: {
      type: Object,
      require: true,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {
    data: {
      handler(newValue) {
        if (newValue && newValue.nodes) {
          this.initGraph()
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    initGraph() {
      console.log(this.data)
      const graph = new GTopo('#topoContainer', {})
      graph.renderData(this._.cloneDeep(this.data))
      /* 画布缩放时 tooltip 和 floatDOM 随之缩放 */
      let cb = e => {
        e.stopPropagation()
        const tooltips = Array.from(document.getElementsByClassName('g6-node-tooltip'))
        tooltips.forEach(tooltip => {
          if (tooltip && tooltip.style) {
            tooltip.style.transform = `scale(${graph.getZoom()})`
          }
        })
        const floatDoms = Array.from(document.getElementsByClassName('floatDOM'))
        floatDoms.forEach(floatDom => {
          if (floatDom && floatDom.style) {
            floatDom.style.transform = `scale(${graph.getZoom()})`
          }
        })
      }
      graph.handleEvent('', 'wheelzoom', cb)
    },
  },
}
</script>
<style scoped></style>
<style lang="scss">
.popper__arrow {
  border-width: 6px;
}
.popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
#topoContainer {
  height: 100%;
  position: relative;
  .g6-grid-container {
    z-index: 0 !important;
  }
  svg {
    position: relative;
  }
}
.floatDOM {
  max-width: 200px;
  width: fit-content;
  border: 1px solid #0073ea;
  border-radius: 2px;
  position: absolute;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
  .header {
    padding: 4px 8px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    background-color: #0073ea;
    color: #fff;
    font-weight: bold;
  }
  .body {
    padding: 8px;
  }
}
</style>
