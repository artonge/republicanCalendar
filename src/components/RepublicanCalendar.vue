<script setup lang="ts">
import calendar from "../calendar";
import { isSextile, romanNumeral } from "../utils";
import RepublicanMonth from "./RepublicanMonth.vue";

const { currentGregorianYear } = defineProps<{
	currentGregorianYear: number
}>()

const republicanYear = currentGregorianYear - 1791

if (!isSextile(republicanYear)) {
	calendar[calendar.length - 1].days.pop()
}

</script>

<template>
	<div id="calendar">
		<div id="couverture" class="A4-page">
			<img :src="`pictures/couverture.png`">
			<span>Philibert-Louis Debucourt, <i>Allégorie du calendrier républicain</i></span>

			<h1>Calendrier Républicain</h1>
			<h2>de l'An {{ romanNumeral(republicanYear) }} ({{ republicanYear }})</h2>
			<i>du 22 septembre {{ currentGregorianYear }} au 21 septembre {{ currentGregorianYear + 1 }}</i>
		</div>
		<RepublicanMonth v-for="month in calendar" :key="month.name" :month="month" :calendar="calendar"
			:republicanYear="republicanYear"></RepublicanMonth>
		<div id="back-page" class="A4-page">
			<img :src="`pictures/fete_federation.jpg`" alt="">
			<span>Charles Thévenin, <i>La fête de la Fédération</i></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#couverture {
	padding: 1cm 2cm;
	padding-bottom: 1.5cm;
	box-sizing: border-box;
	flex-direction: column;
	align-content: center;

	img {
		flex-grow: 1;
		height: 0;
		object-fit: contain;
	}

	h1,
	h2,
	i {
		text-align: center;
	}

	h1 {
		margin-top: 20px;
		font-weight: bold;
		word-spacing: 8px;
	}

	h2 {
		word-spacing: 8px;
	}

	i {
		margin-top: 20px;
	}
}

#back-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2%;
	padding-bottom: 1.5cm;

	img {
		max-width: 100%;
		height: 0;
		flex-grow: 1;
		margin-bottom: 8px;
		object-fit: scale-down;
	}
}
</style>
