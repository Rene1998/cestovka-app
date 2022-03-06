import { Component } from 'vue'

interface ICRoute {
	path: string,
	name: string,
	meta: {
		title: string,
	},
	component: Component,
}

type TCRoute = [title: string, path: string, component: ReturnType<() => Component>]

export const cRoute = (...[title, path, component]: TCRoute): ICRoute => ({
	path,
	name: title,
	meta: { title },
	component
})