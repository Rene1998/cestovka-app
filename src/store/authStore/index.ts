import { Commit, Dispatch } from 'vuex'
import apiService from '@/utils/apiService'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { IState, IUser, TToken, IRegisterResponse, ILoginResponse, TLoginForm, IRegisterForm } from './IAuth'

const state: IState = {
	user: JSON.parse(localStorage.getItem(process.env.VUE_APP_LS_USER_NAME) || '{}'),
	token: localStorage.getItem(process.env.VUE_APP_LS_TOKEN_NAME) || ''
}

const mutations = {
	auth_success: (state: IState, data: ILoginResponse) => {
		console.log(data)
		state.token = data.token
		state.user = data.user
		localStorage.setItem(process.env.VUE_APP_LS_TOKEN_NAME, data.token)
		localStorage.setItem(process.env.VUE_APP_LS_USER_NAME, JSON.stringify(data.user))
	},
	logout: (state: IState) => {
		state.token = <TToken>''
		state.user = <IUser>{}
		localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_NAME)
		localStorage.removeItem(process.env.VUE_APP_LS_USER_NAME)
	}
}

const actions = {
	register: async({ commit } : { commit : Commit}, registerForm: IRegisterForm) => {
		return new Promise<void>((resolve, reject) => {
			apiService
				.post<IRegisterResponse>('/api/register', registerForm)
					.then(() => resolve())
					.catch((err) => {
						axios.isAxiosError(err) && err.response
							? reject(err.response.data.message)
							: reject(err)
					})
		})
	},
	login: async({ commit } : { commit : Commit}, loginForm: TLoginForm) => {
		return new Promise((resolve, reject) => {
			apiService
				.post<ILoginResponse>('/api/login', loginForm)
					.then((loginResponse) => {
						const { data } = loginResponse
						commit('auth_success', data)
						console.log(data)
						resolve(data)
					})
					.catch((err) => {
						console.log(err.response.data)
						axios.isAxiosError(err) && err.response
							? reject(err.response.data)
							: reject(err)
					})
			
		})
	},
	logout: async ({ commit }: { commit: Commit }) => {
		return new Promise((resolve, reject) => {
			// invalide token
			commit('logout')
			resolve()
		})
	}

}

const getters = {
	isLoggedIn: (state: IState):boolean => !!state.token,
	token: (state: IState):TToken => state.token || '',
	user: (state: IState):IUser => state.user
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}