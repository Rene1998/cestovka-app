<template>
	<ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header class="py-16">
				<h1 class="text-6xl font-bold text-secondary-bright bg-red text-center">
					Cestov<span class="text-secondary-dark">ka</span>
				</h1>
      </ion-header>
    
			<ion-card >
				<ion-card-content>
					<ion-item lines="none" class="mb-6">
						<ion-label position="stacked" class="antialiased mb-2">Email address</ion-label>
						<div class="pl-1 pr-3 w-full">
							<ion-input/>
						</div>
					</ion-item>

					<ion-item lines="none" class="mb-12">
						<ion-label position="stacked" class="antialiased mb-2">Password</ion-label>
						<div class="pl-1 pr-3 w-full flex items-center">
							<ion-input :type="isPwShown ? 'text' : 'password'" class="relative" />
							<ion-button @click="isPwShown = !isPwShown" fill="clear" class="absolute right-4 z-50">
								<ion-icon :icon="eyeOutline" v-if="isPwShown"></ion-icon>
								<ion-icon :icon="eyeOffOutline" v-else></ion-icon>
							</ion-button>
						</div>
						<a class="text-xs w-full flex justify-end pr-3">Forgot your password?</a>
					</ion-item>

					<ion-item lines="none">
						<ion-button color="primary" class="w-full h-12 font-black text-base">
							Sign In
						</ion-button>
					</ion-item>

					<ion-item lines="none">
						<a class="text-xs w-full text-center text-black">
							New here?
							<span class="text-secondary-bright font-bold ml-1" @click="$router.push('/accounts/register')">
								Create an account
							</span>
						</a>
					</ion-item>
				</ion-card-content>
			</ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonInput, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/vue'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'

import { ref, Ref } from 'vue'

const isPwShown: Ref<boolean> = ref(false)

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
