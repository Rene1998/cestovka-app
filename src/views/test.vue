<template>
	<ion-page>
		<ion-content>
			<h3 class="text-secondary-bright">Basic Example</h3>
			<tabs
				v-model="model"
			>
				<tab
					class="tab"
					v-for="(tab, i) in tabs"
					:key="`t${i}`"
					:val="tab"
					:label="tab"
					:indicator="true"
				/>
			</tabs>
			<tab-panels
				v-model="model"
				:animate="true"
			>
				<tab-panel
					v-for="(tab, i) in tabs"
					:key="`tp${i}`"
					:val="tab"
				>
				<p class="text-secondary-bright">{{ tab }}</p>
				</tab-panel>
			</tab-panels>
		</ion-content>
	</ion-page>
</template>

<script lang="ts" setup>
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonItem,
	IonMenu,
	IonList,
	IonIcon,
	IonButton,
	IonButtons,
	IonAvatar,
	IonInput,
	menuController
} from '@ionic/vue'
import { defineComponent, reactive, toRefs, ref, toRef, computed } from 'vue';


</script>

<style scoped>
.tab {
  padding: 10px 20px;
}
</style>