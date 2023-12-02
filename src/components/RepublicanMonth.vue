<script setup lang="ts">
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
		<div class="month__image A4-page">
			<img :src="month.image" v-if="month.image !== undefined" alt="">
		</div>
		<div class="month__grid A4-page">
			<div class="month__grid__month_title">
				<div class="month__grid__month_name">{{ month.name }}</div>
				<div class="month__grid__month_description" v-if="month.description !== undefined">
					{{ month.description }}
				</div>
			</div>
			<div class="month__grid__days_name">
				<div class="month__grid__days_name__day">Primidi</div>
				<div class="month__grid__days_name__day">Duodi</div>
				<div class="month__grid__days_name__day">Tridi</div>
				<div class="month__grid__days_name__day">Quartidi</div>
				<div class="month__grid__days_name__day">Quintidi</div>
				<div class="month__grid__days_name__day" v-if="month.days.length > 5">Sextidi</div>
				<div v-if="month.days.length === 30" class="month__grid__days_name__day">Septidi</div>
				<div v-if="month.days.length === 30" class="month__grid__days_name__day">Octidi</div>
				<div v-if="month.days.length === 30" class="month__grid__days_name__day">Nonidi</div>
				<div v-if="month.days.length === 30" class="month__grid__days_name__day">Décadi</div>
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
			<div class="month__notes" v-if="month.notes.length !== 0">
				<p v-for="note in month.notes" :key="note">{{ note }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.month {
	&__image {
		justify-content: center;
	}

	&__grid {
		padding: 1cm;
		flex-direction: column;

		&__month_title {
			margin-bottom: 16px;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
		}

		&__month_name {
			font-weight: bold;
			font-size: 24px;
			line-height: 24px;
		}

		&__month_description {
			font-style: italic;
			font-size: 16px;
			line-height: 16px;
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

	&__notes {
		margin-top: 12px;

		p {
			margin-top: 4px;
		}
	}
}
</style>
