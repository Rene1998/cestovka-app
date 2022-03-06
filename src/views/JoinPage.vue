<template>
	<ion-page>
    
    <ion-content :fullscreen="true">
      <ion-header class="pt-16 pb-12">
				<h1 class="text-6xl font-bold text-secondary-bright bg-red text-center">
					Cestov<span class="text-secondary-dark">ka</span>
				</h1>
      </ion-header>

    
			<ion-card >
				<ion-card-content>
					<ion-item class="p-6 mb-6" lines="none">
						<img :src="require('../assets/svg/travelpalmtreesymbol.svg')" />
					</ion-item>
					<ion-item lines="none">
						<ion-button color="primary" class="w-full h-12 font-black text-base mb-6" @click="$router.push('/accounts/register')">
							Sign Up
						</ion-button>
					</ion-item>
					<ion-item>
						<ion-button color="primary" fill="outline" class="w-full h-12 font-black text-base" @click="$router.push('/accounts/login')">
							Sign In
						</ion-button>
					</ion-item>
				</ion-card-content>
			</ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonItem, IonIcon, IonButton } from '@ionic/vue'
</script>

<style lang="scss" scoped>
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
