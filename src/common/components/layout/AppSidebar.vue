<template>
  <div id="subnav" class="subnav-stage-main">
    <div class="context-header">
      <span>Standard Vue Project</span>
    </div>
    <div class="siderbar-context">
      <el-menu background-color="#EAEDF1" active-text-color="#42cc83" :router="true" :default-active="activeIndex">
        <el-menu-item index="/example">
          <template slot="title">
            <span slot="title">Example</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      activeIndex: '/example',
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function (val) {
        if (val.meta[0]) {
          this.activeIndex = val.meta[0].activePath
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
.subnav-stage-main {
  height: 100%;
}
.context-header {
  font-weight: bold;
  font-size: 14px;
  height: 70px;
  line-height: 70px;
  background: #d9dee4;
}
.siderbar-context {
  height: calc(100% - 70px);
}
.siderbar-context .el-menu {
  height: 100%;
}
.siderbar-context .el-menu .el-menu-item.is-active {
  background-color: #fff !important;
  box-shadow: inset 4px 0 0 default-color;
}
.siderbar-context .el-menu .el-menu-item {
  min-width: 180px;
  font-size: 13px;
}
.siderbar-context .el-menu {
  min-width: 180px;
}
</style>
