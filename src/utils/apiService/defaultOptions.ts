import store from '@/store'

export default function useDefaultOptions() {
	const authorization = store.getters['authStore/token']

	const headers = {
		...authorization && {
			Authorization: `Bearer ${authorization}`,
		},
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}

	return {
		headers: { ...headers },
	}
}