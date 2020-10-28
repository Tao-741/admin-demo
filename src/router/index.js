import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/layout/index')

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录页' }
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'el-icon-s-data' }
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
    meta: {
      title: 'Table',
      icon: 'el-icon-table iconfont'
    },
    children: [
      {
        path: 'base-table',
        name: 'BaseTable',
        meta: {
          title: '表格'
        },
        component: () => import('views/table/BasicTable')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
