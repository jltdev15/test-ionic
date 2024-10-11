import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
         component: () => import('@/views/StartUpPage.vue')
  },
  {
    path: '/login',
         component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/registration',
         component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/dashboard',
    component: TabsPage,
    children: [
      {
        path: '/',
        component: () => import('@/views/DashBoardPage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
