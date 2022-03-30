import { toastController } from '@ionic/vue'
import { ref } from 'vue'

export default {
	_isLoading: ref(false),

	isLoading() {
		return this._isLoading.value
	},
	stopLoading() {
		this._isLoading.value = false
	},
	async error(error = 'Error', position: any = 'bottom') {
		this._isLoading.value = false

		const toast = await toastController.create({
			message: error,
			color: 'danger',
			position,
			duration: 2000
		})

		toast.present()
	},
	async success(message = 'Success', position: any = 'bottom') {
		this._isLoading.value = false

		const toast = await toastController.create({
			message,
			color: 'success',
			position,
			duration: 2000
		})

		toast.present()
	},
	clear_loading() {
		this._isLoading.value = true
	}
}
