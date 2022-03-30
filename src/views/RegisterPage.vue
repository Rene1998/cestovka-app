<template>
	<ion-page>
    <ion-content :fullscreen="true">
      <ion-header class="py-16">
				<h1 class="text-6xl font-bold text-secondary-bright bg-red text-center">
					Cestov<span class="text-secondary-dark">ka</span>
				</h1>
      </ion-header>

			<h1 class="text-xl text-center font-black mb-4">Create Your Account</h1>
			<ion-card>
				<ion-card-content>
					<form @submit.prevent="register()">
						<ion-item lines="none" class="mb-6">
							<ion-label position="stacked" class="antialiased mb-2">Name</ion-label>
							<div class="pl-1 pr-3 w-full">
								<ion-input v-model="registerForm.name" />
							</div>
						</ion-item>

						<ion-item lines="none" class="mb-6">
							<ion-label position="stacked" class="antialiased mb-2">Email address</ion-label>
							<div class="pl-1 pr-3 w-full">
								<ion-input v-model="registerForm.email" />
							</div>
						</ion-item>

						<ion-item lines="none" class="mb-12">
							<ion-label position="stacked" class="antialiased mb-2">Password</ion-label>
							<div class="pl-1 pr-3 w-full flex items-center">
								<ion-input v-model="registerForm.password" :type="isPwShown ? 'text' : 'password'" class="relative" />
								<ion-button @click="isPwShown = !isPwShown" fill="clear" class="absolute right-4 z-50">
									<ion-icon :icon="eyeOutline" v-if="isPwShown"></ion-icon>
									<ion-icon :icon="eyeOffOutline" v-else></ion-icon>
								</ion-button>
							</div>
						</ion-item>

						<ion-item lines="none">
							<ion-button color="primary" class="w-full h-12 font-black text-base" @click="register()">
								Sign Up
							</ion-button>
						</ion-item>
					</form>

					<ion-item lines="none">
						<span class="text-xs w-full flex justify-center text-center mt-4" lines="none">
							I'm already a member.
							<a class="text-secondary-bright font-bold ml-1" @click="$router.push('/accounts/login')">Sign In</a>
						</span>
					</ion-item>

				</ion-card-content>
			</ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/vue'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'
import { IRegisterForm } from '@/shared/auth'

import { ref, Ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import toast from '@/utils/toast'


const store = useStore()
const router = useRouter()

const isPwShown: Ref<boolean> = ref(false)

const registerForm = reactive<IRegisterForm>({
	name: 'rererereererrererere',
	email: 'ren3@gmail.com',
	password: '123456789'
})

const register = async () => {
	try {
		toast.clear_loading()
		await store.dispatch('authStore/register', registerForm)
		await toast.success('Registered successfully')
		toast.stopLoading()
		router.push('/accounts/login')
	} catch (err) {
		toast.error(`Could not register ${err}`)
		toast.stopLoading()
	}
}
</script>

<style lang="scss" scoped>
ion-input {
	padding-left: 20px !important;
	@apply bg-primary-dark rounded-xl antialiased text-sm;
}

ion-card {
	@apply m-0 shadow-none;
}

ion-card-content {
	@apply p-0;
}

ion-button {
	--border-radius: 2rem;
}

</style>
