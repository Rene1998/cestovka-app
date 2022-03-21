<template>
	<ion-header>
		<ion-toolbar class="p-4">
			<ion-buttons class="flex justify-between">
        <ion-back-button :icon="chevronBackOutline" text="" defaultHref="/home" />
				<ion-button>
					<ion-icon :icon="ellipsisVerticalOutline" />
				</ion-button>
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

</script>

<style lang="scss" scoped>
ion-toolbar {
  --min-height: 28px;
  --background: rgba(0,0,0,0);
  --border-style: none;
}
</style>