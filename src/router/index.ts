import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isLogin } from '/@/utils/auth'

//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (_to, _from, next) => {
  NProgress.start()
  if (_to.path !== '/login') {
    if (!isLogin()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach((_to) => {
  NProgress.done()
})

export default router
