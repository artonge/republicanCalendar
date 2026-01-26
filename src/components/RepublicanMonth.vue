<script setup lang="ts">
import { type Calendar, type Month } from '../models'
import RepublicanMonthInformation from './RepublicanMonthInformation.vue'
import RepublicanMonthGrid from './RepublicanMonthGrid.vue'

defineProps<{
	month: Month
	calendar: Calendar
	republicanYear: number
}>()
</script>

<template>
	<div class="month">
		<RepublicanMonthInformation :month="month" />
		<RepublicanMonthGrid :month="month" :calendar="calendar" :republicanYear="republicanYear" />
	</div>
</template>

<style lang="scss" scoped>
.month {
	* {
		border-color: rgba($color: #919191, $alpha: 0.6) !important;
	}
}
</style>
