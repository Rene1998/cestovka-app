<template>
	<ion-item lines="none" class="mb-2">
		<ion-icon :icon="search" class="absolute z-50 left-2 text-secondary-bright"></ion-icon>
		<ion-input class="m-0 p-0 placeholder:font-black rounded-lg" placeholder="Any place in your mind"></ion-input>
		<p class="text-secondary-dark absolute right-5 z-50">Search</p>
	</ion-item>
</template>

<script lang="ts" setup>
import {
	IonItem,
	IonIcon,
	IonInput,
} from '@ionic/vue'
import { search } from 'ionicons/icons'
</script>

<style scoped>
ion-input ::v-deep(input) {
	padding-left: 3rem !important;
	padding-inline-end: 0 !important;
	-webkit-padding-end: 0 !important;
}

ion-input {
	background: #ffffff !important;
}

ion-icon {
	color: black;
}
</style>