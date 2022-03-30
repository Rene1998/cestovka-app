import { Component } from 'vue'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import authGuard from '@/utils/authGuard'

interface ICRoute {
	path: string,
	name: string,
	meta: {
		title: string,
		requiresAuth?: boolean
	},
	component: Component,
	beforeEnter: (to:RouteLocationNormalized, from:RouteLocationNormalized, next:NavigationGuardNext) => Promise<void>
}

type TCRoute = [title: string, path: string, component: ReturnType<() => Component>, requiresAuth?: boolean]

export const cRoute = (...[title, path, component, requiresAuth]: TCRoute): ICRoute => ({
	path,
	name: title,
	meta: {
		title,
		requiresAuth: !!requiresAuth
	},
	component,
	beforeEnter: authGuard
})