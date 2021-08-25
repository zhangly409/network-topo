module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: [
    'html', // 使用 eslint-plugin-html 插件
  ],
  extends: [
    // 启用 eslint-plugin-vue 推荐的规则
    'plugin:vue/recommended',
    // 启用 eslint 推荐的规则
    'eslint:recommended',
    // 启用 prettier 推荐的规则，优先级低于 .prettierrc.js
    'plugin:prettier/recommended',
    // 解决 eslint 和 prettier、prettier-vue 冲突, 冲突时以 prettier 为准
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error', // 不符合 prettier 规则的代码进行错误提示
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
