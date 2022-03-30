<template>
	<div v-if="!props.loadedArray" class="h-80 w-full flex justify-center items-center">
		<ion-spinner class="w-32" name="dots"></ion-spinner>
	</div>
	<div v-if="props.loadedArray?.length == 0" class="h-80 w-full flex justify-center items-center opacity-50">
		{{ lengthErrorMessage }}
	</div>
</template>

<script lang="ts" setup>
import {
	IonSpinner
} from '@ionic/vue'
import { defineProps } from 'vue'

const props = defineProps({ loadedArray: Array, lengthErrorMessage: String })


</script>


<style lang="scss" scoped>
ion-spinner {
	--color: var(--ion-color-secondary);
	transform: scale(3);
}
</style>