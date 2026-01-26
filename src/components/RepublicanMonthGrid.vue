<script setup lang="ts">
import type { Calendar, Month } from '../models';
import RepublicanDay from './RepublicanDay.vue';

defineProps<{
	month: Month;
	calendar: Calendar;
	republicanYear: number;
}>()
</script>

<template>
	<div class="grid A4-page">
		<div class="grid__header">
			<div class="grid__header__day-name">Primidi</div>
			<div class="grid__header__day-name">Duodi</div>
			<div class="grid__header__day-name">Tridi</div>
			<div class="grid__header__day-name">Quartidi</div>
			<div class="grid__header__day-name">Quintidi</div>
			<div class="grid__header__day-name" v-if="month.days.length > 5">Sextidi</div>
			<div v-if="month.days.length === 30" class="grid__header__day-name">Septidi</div>
			<div v-if="month.days.length === 30" class="grid__header__day-name">Octidi</div>
			<div v-if="month.days.length === 30" class="grid__header__day-name">Nonidi</div>
			<div v-if="month.days.length === 30" class="grid__header__day-name">Décadi</div>
		</div>
		<div class="grid__table">
			<div class="grid__table__row">
				<RepublicanDay v-for="day in month.days.slice(0, 10)" :key="day.name" class="grid__table__cell"
					:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
				</RepublicanDay>
			</div>
			<div class="grid__table__row" v-if="month.days.length === 30">
				<RepublicanDay v-for="day in month.days.slice(10, 20)" :key="day.name" class="grid__table__cell"
					:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
				</RepublicanDay>
			</div>
			<div class="grid__table__row" v-if="month.days.length === 30">
				<RepublicanDay v-for="day in month.days.slice(20, 30)" :key="day.name" class="grid__table__cell"
					:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
				</RepublicanDay>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.grid {
	&__header {
		display: flex;

		&__day-name {
			flex-basis: 100%;
			flex-grow: 1;
			font-weight: bold;
			padding-left: 4px;
		}
	}

	&__table {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex-grow: 1;

		&__row {
			display: flex;
			flex-grow: 1;
			height: 0;
		}

		&__cell {
			flex-basis: 100%;
			flex-grow: 1;

			box-sizing: border-box;
			border-top: 1px solid;
			border-left: 1px solid;
		}

		&__row &__cell:last-child {
			border-right: 1px solid;
		}

		&__row:last-child &__cell {
			border-bottom: 1px solid;
		}

		&__row:first-child &__cell:first-child {
			border-top-left-radius: 8px;
		}

		&__row:first-child &__cell:last-child {
			border-top-right-radius: 8px;
		}

		&__row:last-child &__cell:first-child {
			border-bottom-left-radius: 8px;
		}

		&__row:last-child &__cell:last-child {
			border-bottom-right-radius: 8px;
		}
	}
}
</style>