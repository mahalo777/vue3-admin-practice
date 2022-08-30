// 最好按照模块分，但是项目小没必要
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
    path: '/userList',
    name: 'userList',
    meta: {
      title: '用户列表',
    },
    component: () => import('/@/pages/features/user/list.vue'),
  },
  {
    path: '/addUser',
    name: 'addUser',
    meta: {
      title: '新增用户',
    },
    component: () => import('/@/pages/features/user/add.vue'),
  },
  {
    path: '/table2',
    name: 'table2',
    meta: {
      title: '列表2',
    },
    component: () => import('/@/pages/features/table2/index.vue'),
  },
]
