import store from '@/store'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export default async function (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) {
	if (to.matched.some((record:any) => record.meta.requiresAuth) && !store.getters['authStore/isLoggedIn']) {
		return next({ path: '/accounts/login' })
	}
	if (to.matched.some((record:any) => !record.meta.requiresAuth && store.getters['authStore/isLoggedIn'])) {
		return next({ path: '/home' })
	}
	return next()
}
