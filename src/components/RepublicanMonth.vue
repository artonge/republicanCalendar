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
	<RepublicanMonthInformation :month="month" />
	<RepublicanMonthGrid :month="month" :calendar="calendar" :republicanYear="republicanYear" />
</template>
