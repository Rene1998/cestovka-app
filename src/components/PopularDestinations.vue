<template>
	<div class="p-4">
		<h1 class="homepage-title p-0 block mb-2">Popular Place</h1>
		<swiper
			v-if="destinations?.length"
			class="p-2 pb-7 overflow-visible"
			:modules="swiperModules"
			:slides-per-view="4.2"
			:space-between="12"
			:observer="true"
			:observe-parents="true"
			>
			<swiper-slide class="overflow-visible max-h-fit max-h-fit" v-for="(destination, i) in destinations" :key="i" @click="$router.push(`/search?searchValue=${destination._id}`)">
				<ion-avatar class="w-64 h-64 drop-shadow-xl">
					<img :src="destination.image.path" >
				</ion-avatar>
			</swiper-slide>
		</swiper>
		<loading-spinner v-else :loadedArray="destinations" />
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
import apiService from '@/utils/apiService'
import { onMounted, ref } from 'vue'
import { ICountry } from '@/shared/tour'
import loadingSpinner from '@/components/LoadingSpinner.vue'

const swiperModules = [IonicSlides]

const destinations = ref<ICountry>()

onMounted(async () => await loadCountries())

const loadCountries = async() => {
	try {
		const { data } = await apiService.get_auth('/api/countries')
		destinations.value = data
		console.log(data)
	} catch (err) {
		console.error(err)
	}
}

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