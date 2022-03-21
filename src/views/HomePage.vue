<template>
  <ion-page>
		<home-page-header />
    
    <ion-content :fullscreen="true" class="px-4 no-scroll">
			<search-bar />
			<tabs />
			<tour-slides />
			<popular-destinations />
    </ion-content>

  </ion-page>
</template>

<script lang="ts" setup>
import {
	IonContent,
	IonPage,
} from '@ionic/vue'

import HomePageHeader from '@/components/HomePageHeader.vue'
import Tabs from '@/components/tabs.vue'
import TourSlides from '@/components/TourSlides.vue'
import SearchBar from '@/components/SearchBar.vue'
import PopularDestinations  from '@/components/PopularDestinations.vue'
</script>
