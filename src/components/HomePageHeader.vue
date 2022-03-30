<template>
	<ion-header>
		<ion-toolbar class="p-4">
			<ion-title class="p-0 homepage-title">Explore</ion-title>
			<ion-buttons class="flex items-center float-right">
				<ion-button fill="clear" class="float-right h-14">
					<ion-avatar class="w-10 flex items-center" @click="isMenuShown = !isMenuShown">
						<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
					</ion-avatar>
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
		<div v-if="isMenuShown && isLoggedIn" class="text-right cp text-secondary-dark drop-shadow-2xl fixed right-6 top-[5rem] p-2 z-10 bg-primary-dark rounded-xl max-w-min max-h-min opacity-90">
			<b class="font-black">{{ user.name }}</b>
			<p class="font-thin">{{ user.email }}</p>
			<p class="p-1 mt-2 bg-primary-bright rounded-xl text-center" @click="logout()">
				Logout
			</p>
		</div>
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
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'


const router = useRouter()
const store = useStore()
const isLoggedIn = computed(() => store.getters['authStore/isLoggedIn'])
const user = computed(() => store.getters['authStore/user'])
const isMenuShown = ref<boolean>(false)

const logout = async () => {
	try {
		await store.dispatch('authStore/logout')
		isMenuShown.value = false
		router.push('/accounts/join')
	} catch (err) {
		console.error(err)
	}
}


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