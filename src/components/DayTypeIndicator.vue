<script setup lang="ts">
import { DayTypeCategory, type DayType } from '../models';

defineProps<{
	dayType: DayType
}>()
</script>

<template>
	<span class="day-type" :class="{ [`day-type--${DayTypeCategory[dayType]}`]: true }"></span>
</template>

<style lang="scss" scoped>
.day-type {
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
</style>