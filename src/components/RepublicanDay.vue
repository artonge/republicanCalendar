<script setup lang="ts">
import { format, getWeek } from "date-fns";
import { fr } from "date-fns/locale";

import { getGregorianDate } from "../utils";
import { type Day, type Month, type Calendar } from '../models'
import DayTypeIndicator from "./DayTypeIndicator.vue";

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

const gregorianDateString = format(gregorianDate, 'E P', { locale: fr })

const isOddGregorianWeek = getWeek(gregorianDate, { weekStartsOn: 1 }) % 2 === 1
const isOddGregorianMonth = gregorianDate.getMonth() % 2 === 1

</script>

<template>
	<div class="day" :class="{ 'day--is-odd-gregorian-month': isOddGregorianMonth }">
		<div class="day__number">
			{{ day.day }}
		</div>
		<div class="day__name">
			<DayTypeIndicator :dayType="day.type" />
			{{ day.name }}
		</div>
		<small class="day__gregorian" :class="{ 'day__gregorian--is-odd-week': isOddGregorianWeek }">
			({{ gregorianDateString }})
		</small>
	</div>
</template>

<style lang="scss" scoped>
.day {
	box-sizing: border-box;
	padding: 8px;

	display: flex;
	flex-direction: column;

	&__number {
		font-weight: bold;
	}

	&__name {
		font-size: 12px;
		flex-grow: 1;
	}

	&__gregorian {
		font-size: 10px;
		width: fit-content;
		align-self: end;

		&--is-odd-week {
			font-weight: bold;
			font-style: italic;
		}
	}

	&--is-odd-gregorian-month {
		background-color: rgba($color: #919191, $alpha: 0.07);
	}
}
</style>
