<template>
	<ion-header>
		<ion-toolbar class="p-4 bg-background">
			<ion-buttons class="flex justify-between">
        <ion-back-button :icon="chevronBackOutline" text="" defaultHref="/home" />
				<ion-button v-if="props.showOptions">
					<ion-icon :icon="ellipsisVerticalOutline" />
				</ion-button>
				<h2 class="font-black font-OpenSansBold text-secondary-dark opacity-80 text-xl" v-if="props.searchValue">
					{{ searchValue }}
				</h2>
      </ion-buttons>
		</ion-toolbar>
	</ion-header>
</template>

<script lang="ts" setup>
import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonButton,
	IonBackButton,
	IonIcon,
} from '@ionic/vue'
import { chevronBackOutline, ellipsisVerticalOutline } from 'ionicons/icons'
import { defineProps } from 'vue'

const props = defineProps({ showOptions: Boolean, searchValue: String })

</script>

<style lang="scss" scoped>
ion-toolbar {
  --min-height: 28px;
  --background: rgba(0,0,0,0);
  --border-style: none;
}
</style>