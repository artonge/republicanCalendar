<script setup lang="ts">
import { defineProps } from 'vue'
import { set, addDays, addYears, format } from 'date-fns'

import type { Day, Month, Calendar } from '../models'

const { day, month, calendar, republicanYear } = defineProps<{
	day: Day
	month: Month
	calendar: Calendar
	republicanYear: number
}>()

// Ref: https://fr.wikipedia.org/wiki/Concordance_des_dates_des_calendriers_r%C3%A9publicain_et_gr%C3%A9gorien#Conversion_avec_un_tableur
// TODO: why -6 ?
const dayOfMonth = day.day - 6
const monthNb = calendar.findIndex(_month => _month.name === month.name)

const refDate = set(new Date(), { date: 1, month: 1, year: 1900 })

const x = dayOfMonth +
	(monthNb - 1) * 30 +
	365 * (republicanYear - 1) + Math.round(republicanYear / 4) + 106917

const gregorianDate = addYears(addDays(refDate, x), -400)
const gregorianDateString = format(gregorianDate, 'dd/MM/yyyy')

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
</style>
