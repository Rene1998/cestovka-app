<template>
<div class="flex flex-row items-center">
  <swiper
		v-if="tours?.length"
		class="p-2 pb-7 w-full"
		:modules="swiperModules"
    :slides-per-view="1.3"
    :space-between="0"
		:observer="true" :observe-parents="true"
  >
		<swiper-slide class="h-80 overflow-visible" v-for="(tour, i) in tours" :key="i">
			<ion-card
				class="bg-cover bg-center h-full w-full relative drop-shadow-xl rounded-xl mx-3"
				:style="`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #2C2E37 100%), \
					url(${tour?.image?.path}) !important`"
				@click="$router.push(`/tour/${tour._id}`)"
			>
			<ion-card-header class="absolute left-0 bottom-1 w-full">
				<ion-card-title class="mb-2 text-left">{{ tour.name }}</ion-card-title>
				<div class="flex justify-between">
					<div class="flex items-center">
						<ion-icon class="text-secondary-dark mr-2" :icon="location" />
						<p class="text-white font-semibold opacity-80">{{ tour.location?.country_name }}</p>
					</div>
					<div class="flex items-center">
						<ion-icon class="text-gold mr-1" :icon="star"></ion-icon>
						<b class="text-white font-OpenSansBold font-black text-md opacity-80 ">{{ tour.star_rating }}</b>
					</div>
				</div>
			</ion-card-header>
			</ion-card>
		</swiper-slide>
  </swiper>
	<loading-spinner v-else :loadedArray="tours" lengthErrorMessage="V tejto destinacií sa nenachádzajú žiadne zájazdy"/>
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

import { onMounted, ref, defineProps, watch } from 'vue'

import { ITour, ICountry } from '@/shared/tour'

import loadingSpinner from '@/components/LoadingSpinner.vue'

import apiService from '@/utils/apiService'

const tours = ref<ITour[]>()

const swiperModules = [IonicSlides]

const props = defineProps<{ selectedCountry: ICountry }>()

watch(() => props.selectedCountry, (newlySelectedCountry) => loadToursByCountry(newlySelectedCountry))

const loadToursByCountry = async (country: ICountry) => {
	try {
		console.log(country)
		const { data } = await apiService.get_auth<ITour>(`/api/tours/${country._id}`)
		tours.value = data
		console.log(tours.value)
	} catch (err) {
		console.error(err)
	}
}
</script>

<style lang="scss" scoped>
ion-card-title {
	@apply font-black font-OpenSansBold text-white opacity-80 text-xl
}
</style>