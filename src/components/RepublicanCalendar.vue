<script setup lang="ts">
import calendar from "../calendar";
import RepublicanMonth from "./RepublicanMonth.vue";

const { currentYear } = defineProps<{
	currentYear: number
}>()

const republicanYear = currentYear - 1791
</script>

<template>
	<div id="calendar">
		<div id="couverture">
			<img src="pictures/couverture.jpg">

			<h1>Calendrier Républicain</h1>
			<h2>de l'An MMXXIV ({{ currentYear - 1791 }})</h2>
			<i>du 22 septembre {{ currentYear }} au 22 septembre {{ currentYear + 1 }}</i>
		</div>
		<RepublicanMonth v-for="month in calendar" :key="month.name" :month="month" :calendar="calendar"
			:republicanYear="republicanYear"></RepublicanMonth>
	</div>
</template>

<style lang="scss" scoped>
#couverture {
	margin: 4px;
	width: 29.7cm;
	height: 21cm;
	padding: 1cm 2cm;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-content: center;
	background-color: #faecd2;

	img {
		flex-grow: 1;
		height: 100%;
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
