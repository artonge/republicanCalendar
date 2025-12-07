<script setup lang="ts">
import { getGregorianDate } from "../utils";
import { type Day, type Month, type Calendar, DayTypeCategory } from '../models'
import { format, getWeek } from "date-fns";
import { fr } from "date-fns/locale";

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

const isOddGregorianWeek = getWeek(gregorianDate) % 2 === 1
const gregorianMonth = format(gregorianDate, 'MMMM', { locale: fr })

</script>

<template>
	<div class="day" :class="{ 'day--is-odd-gregorian-week': isOddGregorianWeek }">
		<div class="day__number">
			{{ day.day }}
		</div>
		<div class="day__name">
			<span class="day__name__type" :class="{ [`day__name__type--${DayTypeCategory[day.type]}`]: true }"></span>
			{{ day.name }}
		</div>
		<small class="day__gregorian" :class="{ [`day__gregorian--is-${gregorianMonth.toLowerCase()}`]: true }">
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

	&__number {
		font-weight: bold;
	}

	&__name {
		font-weight: normal;
		font-size: 12px;
		flex-grow: 1;

		&__type {
			width: 6px;
			height: 6px;
			border-radius: 100%;
			margin-inline-end: 4px;
			display: inline-block;

			&--végétal {
				background-color: #4CAF50;
			}

			&--animal {
				background-color: #FF5722;
			}

			&--minéral {
				background-color: #9E9E9E;
			}

			&--outil {
				background-color: #3F51B5;
			}

			&--fête {
				background-color: #2196F3;
			}
		}
	}

	&__gregorian {
		font-style: italic;
		font-size: 10px;
		text-align: right;

		&--is-janvier {
			color: #013788;
		}

		&--is-février {
			color: #147ac9;
		}

		&--is-mars {
			color: #5a7c2e;
		}

		&--is-avril {
			color: #02b60b;
		}

		&--is-mai {
			color: #135f00;
		}

		&--is-juin {
			color: #e6a900;
		}

		&--is-juillet {
			color: #e95325;
		}

		&--is-août {
			color: #ce1515;
		}

		&--is-septembre {
			color: #e6a900;
		}

		&--is-octobre {
			color: #6D4C41;
		}

		&--is-novembre {
			color: #455A64;
		}

		&--is-décembre {
			color: #147ac9;
		}
	}

	&--is-odd-gregorian-week {
		background-color: rgba($color: #919191, $alpha: 0.1);
	}
}
</style>
