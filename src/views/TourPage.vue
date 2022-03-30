<template>
  <ion-page>
		<tour-page-header :showOptions="false"/>
    
    <ion-content :fullscreen="true" class="no-scroll">
			<div v-if="tour">
				<div class="flex justify-center w-screen">
					<div
						class="tour-image"
						:style="`background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, #2C2E37 100%), \
						url(${tour?.image?.path}) !important`">
							<div class="tour-price">
							{{ tour.currency_type }}
							<b>{{ tour.price }}</b>
						</div>
					</div>
				</div>

				<div class="p-7">
					<h1 class="block w-full font-black font-OpenSansBold text-black opacity-60 text-xl">{{ tour.name }}</h1>

					<div class="flex items-center mt-2">
						<ion-icon class="text-secondary-dark mr-1 w-[14px]" :icon="location" />
						<p class="text-black font-semibold opacity-50 text-xs mr-4">{{ tour.location?.country_name }}</p>

						<ion-icon class="text-secondary-dark mr-1 w-[14px]" :icon="calendarOutline" />
						<p class="text-black font-semibold opacity-50 text-xs mr-4">{{ tour.duration_in_days }} Days</p>

						<ion-icon class="text-gold mr-1 w-[14px]" :icon="star" />
						<p class="text-black font-semibold opacity-50 text-xs">{{ tour.star_rating }}</p>
					</div>

					<p class="font-bold opacity-50 mt-6">{{ tour.description }}</p>
				</div>
			</div>
			<loading-spinner v-else />
    </ion-content>

  </ion-page>
</template>

<script lang="ts" setup>
import {
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonIcon,
	IonicSlides,
	IonPage,
	IonContent
} from '@ionic/vue'
import { location, calendarOutline, star } from 'ionicons/icons'
import { ref, onMounted } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import TourPageHeader from '@/components/TourPageHeader.vue'
import apiService from '@/utils/apiService'
import { ITour } from '@/shared/tour'
import { useRoute } from 'vue-router'

const route = useRoute()


const tour = ref<ITour>()

onMounted(async () => {
	try {
		console.log(route.params.id)
		const { data } = await apiService.get_auth(`/api/tour/${route.params.id}`)
		tour.value = data
		console.log(tour.value)
	} catch (err) {
		console.error(err)
	}
})

</script>

<style scoped>
.tour-image {
	@apply pt-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-cover rounded-2xl bg-center h-[22rem] w-[85%] relative
}
.tour-price {
	@apply absolute w-16 h-16 rounded-3xl bg-secondary-dark brightness-[1.3] text-primary-bright text-center -bottom-8 right-8 p-2;
}
.tour-price b {
	@apply font-black font-OpenSansBold
}
</style>