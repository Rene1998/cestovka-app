<template>
<div class="flex flex-row items-center">
  <swiper
		v-if="tours.length"
		class="p-2 pb-7"
		:modules="swiperModules"
    :slides-per-view="1.3"
    :space-between="0"
		:observer="true" :observe-parents="true"
  >
		<swiper-slide class="h-80 overflow-visible" v-for="(tour, i) in tours" :key="i">
			<ion-card
				class="tour-card bg-cover bg-center h-full w-full relative drop-shadow-xl rounded-xl mx-3"
				:style="`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #2C2E37 100%), \
					url(${card.image.path}) !important`"
				@click="$router.push(`/tour/${card.id}`)"
			>
			<ion-card-header class="absolute left-0 bottom-1 w-full">
				<ion-card-title class="mb-2 text-left">{{ card.name }}</ion-card-title>
				<div class="flex justify-between">
					<div class="flex items-center">
						<ion-icon class="text-secondary-dark mr-2" :icon="location" />
						<p class="text-white font-semibold opacity-80">{{ card.location }}</p>
					</div>
					<div class="flex items-center">
						<ion-icon class="text-gold mr-1" :icon="star"></ion-icon>
						<b class="text-white font-OpenSansBold font-black text-md opacity-80 ">{{ card.star_rating }}</b>
					</div>
				</div>
			</ion-card-header>
			</ion-card>
		</swiper-slide>
  </swiper>
	<div v-else class="h-80 w-full flex justify-center items-center">
		<ion-spinner class="w-32" name="dots"></ion-spinner>
	</div>
</div>
</template>

<script lang="ts" setup>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonSpinner,
	IonicSlides
} from '@ionic/vue'
import 'swiper/css'
import '@ionic/vue/css/ionic-swiper.css'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { location, star } from 'ionicons/icons'

const swiperModules = [IonicSlides]


const card = {
	id: 1,
	name: 'Railey Beach',
	location: 'Malaysia',
	star_rating: 4.7,
	image: {
		path: 'https://www.fodors.com/wp-content/uploads/2019/01/take-a-vacation.jpg'
	}
}

const tours = Array(10).fill(card)
console.log(tours)

</script>

<style lang="scss" scoped>
ion-card-title {
	@apply font-black font-OpenSansBold text-white opacity-80 text-xl
}
ion-spinner {
	--color: var(--ion-color-secondary);
	transform: scale(3);
}
</style>