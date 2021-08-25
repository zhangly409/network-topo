const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  pluginOptions: {
    singlePageApplication: {
      useHash: false,
    },
  },
  filenameHashing: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        // 传入共享的全局变量
        additionalData: `@import "@/style/variables.scss";`,
      },
    },
  },
  devServer: {
    port: 8000,
    disableHostCheck: true,
    // 设置代理到 mock 服务
    proxy: {
      '/mock': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/mock': '',
        },
      },
    },
  },
  configureWebpack: {},
  chainWebpack: config => {
    // 创建 import 或 require 的别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('service', resolve('src/service'))
      .set('views', resolve('src/views'))
      .set('router', resolve('src/router'))
      .set('style', resolve('src/style'))
      .set('api', resolve('src/api'))
      .set('store', resolve('src/store'))
  },
  // 禁用每次保存时 lint 代码
  lintOnSave: false,
}
