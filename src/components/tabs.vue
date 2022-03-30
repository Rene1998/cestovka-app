<template>
	<div v-if="countries?.length" class="tabs-wrapper mt-4 mb-2 flex flex-row overflow-x-scroll whitespace-nowrap z-50">
		<div v-for="(country, i) in countries" :key="i">
				<p fill="none" class="px-6 mb-2 relative pb-2" @click="selectTab(country)" :class="{'text-secondary-bright tab-selected': country._id == selectedCountry._id}">
					{{ country.country_name }}
				</p>
		</div>
	</div>
	<loading-spinner v-else class="h-4 my-8" />
</template>

<script lang="ts" setup>
import {
	IonItem,
	IonButton
} from '@ionic/vue'
import { ref, onMounted, defineEmits } from 'vue'
import { ICountry } from '@/shared/tour'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

import apiService from '@/utils/apiService'

const emit = defineEmits(['selectedCountryChanged'])

const countries = ref<ICountry[] | null>(null)
const selectedCountry = ref<ICountry>()

onMounted(async () => {
	try {
		const { data } = await apiService.get_auth('/api/countries')
		console.log(data)
		if(!data.length) return
		countries.value = data
		selectTab(countries.value[0])
	} catch (err) {
		console.error(err)
	}

})

const selectTab = (tab: ICountry) => {
	selectedCountry.value = tab
	emit('selectedCountryChanged', tab)
}

</script>

<style lang="scss" scoped>
.selected-tab {
	@apply border-b-2 border-b-secondary-dark rounded-full
}

.tabs-wrapper::-webkit-scrollbar {
	display: none;
}

.tab-selected::before {
	transform: translate(-50%, 0);
	@apply rounded-full h-[0.35rem] absolute bottom-0 w-5 left-1/2 bg-secondary-dark content-['']
}
</style>