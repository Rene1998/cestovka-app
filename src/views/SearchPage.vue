<template>
  <ion-page>
		<tour-page-header :showOptions="false" :searchValue="$route.query.searchValue"/>
    
    <ion-content :fullscreen="true">
			<div v-if="filteredTours?.length" class="h-80">
				<ion-card
					class="bg-cover bg-center h-full relative drop-shadow-xl rounded-xl filtered-card"
					v-for="(tour, i) in filteredTours" :key="i"
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
			</div>
			<loading-spinner v-else-if="!filteredTours" :loadedArray="filteredTours" lengthErrorMessage="nenašli sa žiadne zájazdy vyhovujúce vašim požiadavkám"/>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
	IonItem,
	IonIcon,
	IonContent,
	IonPage,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonSpinner
} from '@ionic/vue'
import { location, calendarOutline, star } from 'ionicons/icons'
import { ref, onMounted } from 'vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import TourPageHeader from '@/components/TourPageHeader.vue'
import apiService from '@/utils/apiService'
import loadingSpinner from '@/components/LoadingSpinner.vue'
import { ITour } from '@/shared/tour'
import { useRoute } from 'vue-router'

const route = useRoute()

const filteredTours = ref<ITour[]>()

onMounted(async () => await loadFilteredTours(route.query.searchValue))

const loadFilteredTours = async (searchValue?: string) => {
	try {
		const { data } = await apiService.get_auth(`/api/filtered-tours/${searchValue}`)
		filteredTours.value = data
	} catch (err) {
		console.error(err)
	}
}
</script>

<style scoped>
ion-card-title {
	@apply font-black font-OpenSansBold text-white opacity-80 text-xl
}
.filtered-card {
	width: calc(100% - 0.5rem);
	@apply mx-1
}
</style>