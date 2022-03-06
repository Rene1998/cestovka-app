<template>
  <ion-page>
		<ion-header>
			<ion-toolbar class="p-4">
				<ion-title class="p-0">Explore</ion-title>
				<ion-buttons class="flex items-center float-right">
					<ion-button fill="clear" class="float-right h-14">
						<ion-avatar class="w-10 flex items-center">
							<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
						</ion-avatar>
					</ion-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
    
    <ion-content :fullscreen="true" class="px-4 no-scroll">
			<ion-item lines="none" class="w-full">
				<ion-icon :icon="search" class="absolute z-50 left-2 text-secondary-bright"></ion-icon>
				<ion-input class="m-0 p-0 placeholder:font-black rounded-lg" placeholder="Any place in your mind"></ion-input>
				<p class="text-secondary-dark absolute right-5 z-50">Search</p>
			</ion-item>
    </ion-content>

		
  </ion-page>
</template>

<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonMenu,
	IonList,
	IonIcon,
	IonButton,
	IonButtons,
	IonAvatar,
	IonInput,
	menuController
} from '@ionic/vue'
import { search } from 'ionicons/icons'

const openMenu = () => {
	menuController.open('hamburger-main-menu')
}

</script>

<style lang="scss">
ion-input {
	background: #ffffff !important;
}

ion-input input {
	padding-inline-end: 0 !important;
	-webkit-padding-end: 0 !important;
	padding-left: 3rem !important;
}

ion-icon {
	color: black;
}

ion-title {
	@apply text-2xl font-black font-OpenSansBold text-left
}

ion-avatar img {
	@apply border-2 border-solid border-white drop-shadow-md
}

ion-header {
    --min-height: 28px;
    --background: rgba(0,0,0,0);
    --border-style: none;
}

ion-toolbar {
  --min-height: 28px;
  --background: rgba(0,0,0,0);
  --border-style: none;
}
</style>
