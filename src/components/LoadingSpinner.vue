<template>
	<div class="h-80 w-full flex justify-center items-center">
		<ion-spinner class="w-32" name="dots"></ion-spinner>
	</div>
</template>

<style lang="scss" scoped>
ion-spinner {
	--color: var(--ion-color-secondary);
	transform: scale(3);
}
</style>