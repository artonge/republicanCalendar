<script setup lang="ts">
import { getGregorianDate } from "../utils";
import type { Day, Month, Calendar } from '../models'
import { format } from "date-fns";

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

const gregorianDateString = format(gregorianDate, 'E. dd/MM/yyyy')

const isStartOfMonth = gregorianDate.getDate() === 1
const isStartOfWeek = gregorianDate.getDay() === 1

</script>

<template>
	<div class="day" :class="{ 'start-of-month': isStartOfMonth, 'start-of-week': isStartOfWeek }">
		<div class="day__day">
			{{ day.day }}
		</div>
		<div class="day__name">
			{{ day.name }}
		</div>
		<small class="day__gregorian">
			({{ gregorianDateString }})
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

.start-of-month {
	background-color: rgba($color: #919191, $alpha: 0.3);

	.day__gregorian {
		text-decoration: underline;
		font-weight: bold;
	}
}

.start-of-week {
	background-color: rgba($color: #919191, $alpha: 0.1);
}
</style>
