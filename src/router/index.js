import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { Message } from 'element-ui'

const Layout = () => import('@/layout/index')

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录页' },
    hidden: true
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/table',
    name: 'Table',
    redirect: '/table/base-table',
    component: Layout,
    meta: { title: 'Table', icon: 'el-icon-s-data' },
    children: [
      {
        path: 'base-table',
        name: 'BaseTable',
        meta: {
          title: '表格'
        },
        component: () => import('@/views/table/BasicTable')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// 导航守卫
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title
  if (to.path === '/login') {
    next()
  } else {
    // 有token
    if (store.getters.token) {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/_getInfo')
          const addRoutes = await store.dispatch('permission/getAsyncRoutes', roles)
          router.addRoutes(addRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          Message.error(error)
        }
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
export default router
