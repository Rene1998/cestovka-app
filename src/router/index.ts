import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import { cRoute } from '@/utils/customRoute'

const prefixRoutes = (prefix: string, routes: Array<RouteRecordRaw>) => {
	routes.map((route) => route.path = `${prefix}/${route.path}`)
	return routes
}

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/accounts/join' },
	...prefixRoutes('/', [
		cRoute('Homepage', 'home', () => import('@/views/HomePage.vue'), true),
		cRoute('Tour', 'tour/:id', () => import('@/views/TourPage.vue'), true),
		cRoute('Search', 'search', () => import('@/views/SearchPage.vue'), true),

		...prefixRoutes('accounts/', [
			cRoute('Join', 'join', () => import('@/views/JoinPage.vue')),
			cRoute('Login', 'login', () => import('@/views/LoginPage.vue')),
			cRoute('Register', 'register', () => import('@/views/RegisterPage.vue')),
		]),
	]),

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
