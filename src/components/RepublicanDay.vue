<script setup lang="ts">
import { getGregorianDate } from "../utils";
import type { Day, Month, Calendar } from '../models'

const { day, month, calendar, republicanYear } = defineProps<{
	day: Day
	month: Month
	calendar: Calendar
	republicanYear: number
}>()

const gregorianDate = getGregorianDate(
	day.day,
	calendar.findIndex(_month => _month.name === month.name) + 1,
	republicanYear
)
</script>

<template>
	<div class="day">
		<div class="day__day">
			{{ day.day }}
		</div>
		<div class="day__name">
			{{ day.name }}
		</div>
		<small class="day__gregorian">
			({{ gregorianDate }})
		</small>
	</div>
</template>

<style lang="scss" scoped>
.day {
	padding: 8px;
	box-sizing: border-box;
	table-layout: fixed;
	border-collapse: collapse;
	word-wrap: break-word;
	display: flex;
	flex-direction: column;

	&__day {
		font-weight: bold;
	}

	&__name {
		font-weight: normal;
		font-size: 12px;
		flex-grow: 1;
	}

	&__gregorian {
		font-style: italic;
		font-size: 10px;
		text-align: right;
	}
}
</style>
