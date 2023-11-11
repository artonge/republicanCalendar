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
			<img src="pictures/couverture.jpg">

			<h1>Calendrier Républicain</h1>
			<h2>de l'An {{ romanNumeral(republicanYear) }} ({{ republicanYear }})</h2>
			<i>du 22 septembre {{ currentGregorianYear }} au 21 septembre {{ currentGregorianYear + 1 }}</i>
		</div>
		<RepublicanMonth v-for="month in calendar" :key="month.name" :month="month" :calendar="calendar"
			:republicanYear="republicanYear"></RepublicanMonth>
	</div>
</template>

<style lang="scss" scoped>
#couverture {
	padding: 1cm 2cm;
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
</style>
