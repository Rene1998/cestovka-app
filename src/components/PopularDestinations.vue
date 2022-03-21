<template>
	<div class="p-4">
		<h1 class="homepage-title p-0 block mb-2">Popular Place</h1>
		<swiper
			v-if="destinations.length"
			class="p-2 pb-7 overflow-visible"
			:modules="swiperModules"
			:slides-per-view="4.2"
			:space-between="12"
			:observer="true"
			:observe-parents="true"
			>
			<swiper-slide class="overflow-visible max-h-fit max-h-fit" v-for="(destination, i) in destinations" :key="i">
				<ion-avatar class="w-64 h-64 drop-shadow-xl">
					<img :src="destination.image.path" >
				</ion-avatar>
			</swiper-slide>
			<swiper-slide>
				<div class="rounded-full bg-primary-bright destination-more drop-shadow-xl justify-center flex items-center opacity-50">
					<ion-icon class="text-secondary-bright" :icon="ellipsisHorizontalOutline" />
				</div>
			</swiper-slide>
		</swiper>

	</div>
</template>

<script lang="ts" setup>
import {
	IonAvatar,
	IonSpinner,
	IonicSlides,
	IonIcon
} from '@ionic/vue'
import 'swiper/css'
import '@ionic/vue/css/ionic-swiper.css'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import { ellipsisHorizontalOutline } from 'ionicons/icons'
import { Swiper, SwiperSlide } from 'swiper/vue'

const swiperModules = [IonicSlides]


const destination = {
	id: 1,
	image: {
		path: 'https://www.fodors.com/wp-content/uploads/2019/01/take-a-vacation.jpg'
	}
}

const destinations = Array(10).fill(destination)

</script>

<style lang="scss" scoped>
ion-card-title {
	@apply font-black font-OpenSansBold text-white opacity-80 text-xl
}
ion-avatar img, .destination-more {
	width: 64px !important;
	height: 64px !important;
}
</style>