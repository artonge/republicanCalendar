<script setup lang="ts">
import { defineProps } from 'vue'

import { type Calendar, type Month } from '../models'
import RepublicanDay from './RepublicanDay.vue'

defineProps<{
	month: Month
	calendar: Calendar
	republicanYear: number
}>()
</script>

<template>
	<div class="month">
		<div class="month__image" v-if="month.image">
			<img :src="month.image" alt="">
		</div>
		<div class="month__grid">
			<div class="month__grid__month_name">{{ month.name }}</div>
			<div class="month__grid__days_name" v-if="month.days.length === 30">
				<div class="month__grid__days_name__day">Primidi</div>
				<div class="month__grid__days_name__day">Duodi</div>
				<div class="month__grid__days_name__day">Tridi</div>
				<div class="month__grid__days_name__day">Quartidi</div>
				<div class="month__grid__days_name__day">Quintidi</div>
				<div class="month__grid__days_name__day">Sextidi</div>
				<div class="month__grid__days_name__day">Septidi</div>
				<div class="month__grid__days_name__day">Octidi</div>
				<div class="month__grid__days_name__day">Nonidi</div>
				<div class="month__grid__days_name__day">Décadi</div>
			</div>
			<div class="month__grid__days">
				<div class="month__grid__days__row">
					<RepublicanDay v-for="day in month.days.slice(0, 10)" :key="day.name" class="month__grid__days__cell"
						:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
					</RepublicanDay>
				</div>
				<div class="month__grid__days__row" v-if="month.days.length === 30">
					<RepublicanDay v-for="day in month.days.slice(10, 20)" :key="day.name" class="month__grid__days__cell"
						:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
					</RepublicanDay>
				</div>
				<div class="month__grid__days__row" v-if="month.days.length === 30">
					<RepublicanDay v-for="day in month.days.slice(20, 30)" :key="day.name" class="month__grid__days__cell"
						:day="day" :month="month" :calendar="calendar" :republicanYear="republicanYear">
					</RepublicanDay>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.month {
	&__image {
		margin: 4px;
		width: 29.7cm;
		height: 21cm;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		background-color: #faecd2;
	}

	&__grid {
		margin: 4px;
		width: 29.7cm;
		height: 21cm;
		padding: 1cm;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		background-color: #faecd2;

		&__month_name {
			margin-bottom: 4px;
			font-size: 24px;
			font-weight: bold;
		}

		&__days_name {
			display: flex;

			&__day {
				flex-basis: 100%;
				flex-grow: 1;
				padding-left: 4px;
			}
		}

		&__days {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			border-spacing: 0;
			flex-grow: 1;

			&__row {
				display: flex;
				flex-grow: 1;
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
}
</style>
