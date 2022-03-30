import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import defaultOptions from './defaultOptions'

axios.defaults.baseURL = process.env.VUE_APP_API_SERVICE_URL

export default {
	get: async<T>(url: string, config?: AxiosRequestConfig) => await axios
		.get<T>(url, config),

	post: async<T>(url: string, parameters: any | null, config?: AxiosRequestConfig) => await axios
		.post(url, parameters, config),

	get_auth: async<T>(url: string, config?: AxiosRequestConfig) => await axios
		.get<T>(url, { ...defaultOptions(), ...config }),
}