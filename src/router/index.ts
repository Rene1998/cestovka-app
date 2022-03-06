import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import { cRoute } from '@/utils/customRoute'

const prefixRoutes = (prefix: string, routes: Array<RouteRecordRaw>) => {
	routes.map((route) => route.path = `${prefix}/${route.path}`)
	return routes
}

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/home' },
	cRoute('Homepage', '/home', () => import('@/views/HomePage.vue')),

	...prefixRoutes('/accounts/', [
		cRoute('Join', 'join', () => import('@/views/JoinPage.vue')),
		cRoute('Login', 'login', () => import('@/views/LoginPage.vue')),
		cRoute('Register', 'register', () => import('@/views/RegisterPage.vue')),
	])
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
