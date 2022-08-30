export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/pages/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '系统首页',
    },
    component: () => import('/@/pages/home/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      title: '仪表盘',
    },
    component: () => import('/@/pages/dashboard/index.vue'),
  },
  {
    path: '/features',
    name: 'features',
    meta: {
      title: '功能',
    },
    component: () => import('/@/pages/features/table/index.vue'),
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {
          title: '用户列表',
        },
        component: () => import('/@/pages/features/table/index.vue'),
      },
      {
        path: 'table2',
        name: 'table2',
        meta: {
          title: '列表2',
        },
        component: () => import('/@/pages/features/table2/index.vue'),
      },
    ],
  },
]
