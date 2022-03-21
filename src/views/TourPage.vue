<template>
  <ion-page>
		<tour-page-header />
    
    <ion-content :fullscreen="true" class="no-scroll">
			<div class="flex justify-center w-screen">
				<div
					class="tour-image"
					:style="`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, #2C2E37 100%), \
					url(${card.image.path}) !important`"/>
				<div class="tour-price">
					{{ card.currency_type }}
					<b>{{ card.price }}</b>
				</div>
			</div>

			<div class="p-7">
				<h1 class="block w-full font-black font-OpenSansBold text-black opacity-60 text-xl">{{ card.name }}</h1>

				<div class="flex items-center mt-2">
					<ion-icon class="text-secondary-dark mr-1 w-[14px]" :icon="location" />
					<p class="text-black font-semibold opacity-50 text-xs mr-4">{{ card.location }}</p>

					<ion-icon class="text-secondary-dark mr-1 w-[14px]" :icon="calendarOutline" />
					<p class="text-black font-semibold opacity-50 text-xs mr-4">{{ card.duration_in_days }}</p>

					<ion-icon class="text-gold mr-1 w-[14px]" :icon="star" />
					<p class="text-black font-semibold opacity-50 text-xs">{{ card.star_rating }}</p>
				</div>

				<p class="font-bold opacity-50 mt-6">{{ card.description }}</p>
			</div>
    </ion-content>

  </ion-page>
</template>

<script lang="ts" setup>
import {
	IonItem,
	IonIcon,
	IonContent,
	IonPage
} from '@ionic/vue'
import { location, calendarOutline, star } from 'ionicons/icons'
import TourPageHeader from '@/components/TourPageHeader.vue'
interface ICard {
	id: string,
	name: string,
	location: string,
	price: string,
	description: string,
	currency_type: string,
	star_rating: string,
	duration_in_days: string,
	image: {
		path: string
	}
}

const card: ICard = {
	id: '1',
	name: 'Railey Beach',
	location: 'Malaysia',
	price: '654€',
	description: 'Nový Zéland je ostrovný štát v Austrálii a Oceánii. Je tvorený dvoma hlavnými a mnohými malými ostrovmi v juhozápadnej časti Tichého oceánu. Nový Zéland je známy pre jeho izoláciu, od Austrálie na severozápade je oddelený asi 2 000 km širokým Tasmanovým',
	currency_type: 'EUR',
	star_rating: '4.7',
	duration_in_days: '4 Days',
	image: {
		path: 'https://www.fodors.com/wp-content/uploads/2019/01/take-a-vacation.jpg'
	}
}

</script>

<style scoped>
.tour-image {
	@apply pt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-cover rounded-2xl bg-center h-[22rem] w-[85%] relative
}
.tour-price {
	@apply absolute w-16 h-16 rounded-3xl bg-secondary-dark brightness-[1.3] text-primary-bright text-center font-black font-OpenSansBold;
}
</style>