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
			<figure>
				<img :src="`pictures/couverture.png`">
				<figcaption>Philibert-Louis Debucourt, Allégorie du calendrier républicain (1794 – 1795)</figcaption>
			</figure>

			<h1>Calendrier Républicain</h1>
			<h2>de l'An {{ romanNumeral(republicanYear) }} ({{ republicanYear }})</h2>
			<i>du 22 septembre {{ currentGregorianYear }} au 21 septembre {{ currentGregorianYear + 1 }}</i>
		</div>

		<RepublicanMonth v-for="(month) in calendar"
			:key="month.name"
			:month="month"
			:calendar="calendar"
			:republicanYear="republicanYear"/>

		<div id="back-page" class="A4-page">
			<figure>
				<img :src="`pictures/fete_federation.jpg`" alt="">
				<figcaption>Charles Thévenin, La fête de la Fédération (1792)</figcaption>
			</figure>
		</div>
	</div>
	<div id="licence" class="no-print">
		This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a><img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
	</div>
</template>

<style lang="scss" scoped>
#couverture {
	text-align: center;

	h1 {
		margin-top: 30px;
		font-weight: bold;
		word-spacing: 8px;
	}

	h2 {
		word-spacing: 6px;
	}

	i {
		margin-top: 15px;
	}
}

#couverture,
#back-page {
	figure {
		flex-grow: 1;
		height: 0;
		margin-bottom: 8px;
	}
}

#licence {
	text-align: center;
	padding: 50px;
}
</style>
