<template>
	<div class="tabs-wrapper mt-4 mb-2 flex flex-row overflow-x-scroll whitespace-nowrap z-50">
		<div v-for="(country, i) in countries" :key="i">
				<p fill="none" class="px-6 mb-2 relative pb-2" @click="selectTab(country)" :class="{'text-secondary-bright tab-selected': country.id == selectedCountry.id}">
					{{ country.country_name }}
				</p>
				<!-- <div class="bg-secondary-dark absolute block h-1 w-6 rounded-full opacity-80" v-if="country.id == selectedCountry.id"></div> -->
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	IonItem,
	IonButton
} from '@ionic/vue'
import { ref, onMounted } from 'vue'

interface ICountry {
	id: number,
	country_name: string
}

const countries = ref<ICountry[] | null>(null)

onMounted(() => {
	countries.value = [
		{ id: 1, country_name: 'Indonesia' },
		{ id: 2, country_name: 'Vietnam' },
		{ id: 3, country_name: 'China' },
		{ id: 4, country_name: 'Thailand' },
		{ id: 5, country_name: 'Malaysia' },
		{ id: 6, country_name: 'Japan' },
		{ id: 7, country_name: 'Slovakia' },
	]

	selectedCountry.value = countries.value[0]
})



const selectedCountry = ref<ICountry>()

const selectTab = (tab: ICountry) => {
	selectedCountry.value = tab
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