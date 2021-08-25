<template>
  <div><example-table :data="appTopoData" /></div>
</template>

<script>
import ExampleTable from '@/components/example/ExampleTable.vue'
import { mapActions, mapState } from 'vuex'
import pvcImg from 'assets/pvc-yellow.png'
import dnsImg from 'assets/dns-cloud.png'
import qlbImg from 'assets/qlb-cloud.png'
import podImg from 'assets/pod.png'
import containerImg from 'assets/container-solid.png'
import { textTruncation } from 'common/utils/functions.js'
export default {
  name: 'Example',
  components: { ExampleTable },
  props: {},
  data() {
    return {
      appTopoData: {},
      topoData: {},
    }
  },
  computed: {
    ...mapState({
      appTopo: state => state.example.appTopo,
    }),
  },
  watch: {
    appTopo: {
      handler(newValue) {
        newValue && newValue.length > 0 && this.generateTopoData(newValue)
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.fetchData()
  },
  mounted() {},
  methods: {
    ...mapActions('example', ['getAppTopo']),
    fetchData() {
      this.getAppTopo()
    },
    generateTopoData(data) {
      this.topoData = {
        nodes: [],
        edges: [],
        combos: [],
      }
      this.getChildren(data)
      this.appTopoData = this._.cloneDeep(this.topoData)
    },
    getChildren(data, parentId = 0, comboId = 0, comboName = '', parentStatus = '', parentClusterId = '') {
      let clusterId = parentClusterId
      data &&
        data.length > 0 &&
        data.map(children => {
          let childrenCopy = this._.cloneDeep(children.children || [])
          let childrenComboId = (children.background && children.background.id) || comboId || 0
          let childrenComboName = ''
          if (children.background && Object.prototype.hasOwnProperty.call(children.background, 'name')) {
            childrenComboName = children.background.name || ''
          } else {
            childrenComboName = comboName || ''
          }
          // 设置 combo
          if (children.background && children.background.id) {
            if (children.background.type === 'cluster') {
              clusterId = children.background.id.toString()
            }
            let combo = {
              id: childrenComboId.toString(),
              label: childrenComboName,
              type: 'rect',
              style: {
                stroke: children.background.type === 'node' ? '#409EFF' : '#E6A23C',
                lineWidth: 1,
                fill: children.background.type === 'node' ? '#ecf5ff' : 'rgb(253, 246, 236)',
              },
            }
            if (comboId) {
              combo.parentId = comboId.toString()
            }
            this.topoData.combos.filter(combo => {
              return combo.id === childrenComboId
            }).length === 0 && this.topoData.combos.push(combo)
            // 对 node 下的子节点进行排序，目的让 pvc 始终在最后
            if (children.background.type === 'node') {
              childrenCopy &&
                childrenCopy.sort(function (a, b) {
                  if (a.type > b.type) {
                    return 1
                  } else {
                    if (a.type < b.type) {
                      return -1
                    } else {
                      return 0
                    }
                  }
                })
            }
          }
          // 设置 node
          let img = null
          switch (children.type) {
            case 'pvc':
              img = pvcImg
              break
            case 'qlb':
              img = qlbImg
              break
            case 'internet':
              img = dnsImg
              break
            case 'pod':
              img = podImg
              break
            case 'container':
              img = containerImg
              break
            default:
              img = ''
          }
          let type = children.status === 'error' || children.status === 'warning' ? 'play-image-node' : 'image'
          let node = {
            id: children.id.toString(),
            name: children.name || children.type,
            label: textTruncation(children.name) || children.type,
            nodeType: children.type,
            nodeStatus: children.status,
            url: children.url,
            type: type,
            size: children.type === 'container' ? 30 : 60,
            img: img,
          }
          node.comboId = children.type === 'pvc' ? clusterId : childrenComboId
          this.topoData.nodes.push(node)
          // 设置 edge
          if (parentId !== 0) {
            let type = children.type === 'pvc' ? 'quadratic' : 'quadratic-label-edge'
            this.topoData.edges.push({
              source: parentId.toString(),
              target: children.id.toString(),
              type: type,
              style: {
                stroke: children.status === 'error' && parentStatus === 'error' ? 'red' : '#888',
                lineWidth: 2,
                endArrow: children.type === 'pvc' ? false : true,
              },
            })
          }
          // 递归
          if (childrenCopy && childrenCopy.length > 0) {
            this.getChildren(childrenCopy, children.id, childrenComboId, childrenComboName, children.status, clusterId)
          }
        })
    },
  },
}
</script>
<style scoped></style>
