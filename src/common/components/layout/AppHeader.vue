<template>
  <div class="header-bread">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadList" :key="item.title" :to="{ path: item.activePath }">{{
        item.title
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {},
  data() {
    return {
      breadList: [], // 路由集合
    }
  },
  computed: {},
  watch: {
    $route: {
      handler: function (newValue) {
        this.getBreadcrumb(newValue)
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    this.getBreadcrumb()
  },
  mounted() {},
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched
      let breadList = []
      matched &&
        matched.map(route => {
          if (route.meta && route.meta.length > 0) {
            route.meta.map(r => {
              breadList.push({ title: r.title, activePath: r.activePath })
            })
          }
        })
      this.breadList = breadList
    },
  },
}
</script>
<style scoped>
.el-breadcrumb {
  line-height: 60px;
}
</style>
