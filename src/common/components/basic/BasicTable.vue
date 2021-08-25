<template>
  <div class="table_container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      :border="border"
      :stripe="stripe"
      :highlight-current-row="highlightCurrentRow"
      :max-height="maxHeight"
      :height="height"
      :default-sort="defaultSort"
      size="mini"
    >
      <template v-for="configuration in table_configs">
        <el-table-column
          :key="configuration.prop"
          :prop="configuration.prop"
          :label="configuration.label"
          :sortable="configuration.sortable ? true : false"
          :sort-orders="configuration.sortOrders"
          :min-width="configuration.minWidth"
          :width="configuration.width"
          :fixed="configuration.fixed"
          :align="configuration.align ? configuration.algin : 'left'"
          :name="configuration.prop"
          show-overflow-tooltip
        >
          <template slot-scope="{ row }">
            <slot :name="configuration.prop" :row="row">
              <div v-html="getFormatData(row[configuration.prop])"></div>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BasicTable',
  components: {},
  props: {
    data: { type: Array, required: true },
    config: { type: Array, required: true },
    border: {
      type: Boolean,
      default: true,
    },
    stripe: {
      type: Boolean,
      default: true,
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
    },
    maxHeight: {
      type: [Number, String],
    },
    customCellStyleColumnIndexs: {
      type: Array,
      default: () => {
        return []
      },
    },
    defaultSort: {
      type: Object,
      default: () => {
        return {}
      },
    },
    labelHidden: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      table_configs: this.config,
      tableData: [],
    }
  },
  watch: {
    // 监听prop中data的更新
    data: {
      handler: function (newValue) {
        // 值发生改变时执行
        this.tableData = newValue
      },
      deep: true, // 深度监听，常用于数组、对象的监听
      immediate: true, // 不仅值发生改变时执行，默认绑定时也执行
    },
  },
  mounted() {},
  methods: {
    getFormatData(value) {
      if (value === null || value === undefined || value === '') {
        return '-'
      } else {
        return value
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-table ::v-deep .el-table__body tr.current-row > td {
  background: $default-color-light !important;
}
</style>
