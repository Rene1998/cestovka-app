<template>
	<ion-header>
		<ion-toolbar class="p-4">
			<ion-title class="p-0 homepage-title">Explore</ion-title>
			<ion-buttons class="flex items-center float-right">
				<ion-button fill="clear" class="float-right h-14">
					<ion-avatar class="w-10 flex items-center">
						<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
					</ion-avatar>
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
</template>

<script lang="ts" setup>
import {
	IonHeader,
	IonTitle,
	IonToolbar,
	IonButton,
	IonButtons,
	IonAvatar,
} from '@ionic/vue'

</script>

<style lang="scss" scoped>


ion-avatar img {
	@apply border-2 border-solid border-white drop-shadow-md
}

ion-header {
    --min-height: 28px;
    --background: rgba(0,0,0,0);
    --border-style: none;
}

ion-toolbar {
  --min-height: 28px;
  --background: rgba(0,0,0,0);
  --border-style: none;
}
</style>