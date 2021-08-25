/**
 * 示例相关的router列表
 */

const routes = [
  {
    path: '/example',
    component: () => import('@/views/example/Example.vue'), // 路由懒加载
    name: 'Example',
    meta: [
      {
        title: '示例',
        activePath: '/example',
      },
    ],
  },
]

export default routes
