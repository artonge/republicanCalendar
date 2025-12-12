<script setup lang="ts">
import type { Month } from '../models';

defineProps<{
	month: Month;
}>()
</script>

<template>
	<div class="information A4-page">
		<figure class="information__image">
			<img :src="`pictures/${month.image}`" v-if="month.image !== undefined" :alt="month.image_description">
			<figcaption v-if="month.image_description !== undefined" v-html="month.image_description" />
		</figure>

		<div class="information__notes">
			<div class="information__notes__month" v-if="month.month_notes.length > 0">
				<p v-for="note in month.month_notes" :key="note">{{ note }}</p>
			</div>

			<div class="information__notes__calendar" v-if="month.calendar_notes.length > 0">
				<p v-for="note in month.calendar_notes" :key="note">{{ note }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.information {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: calc(0.7cm);

	&__image {
		flex-basis: 0;

		display: flex;
		justify-content: center;
		flex-direction: column;

		img {
			max-height: 100%;
			border-radius: 8px;
		}
	}

	&__notes {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		div {
			border: 1px solid;
			border-radius: 8px;
			padding: 12px 20px;
			background-color: rgba($color: #919191, $alpha: 0.02);
		}

		p {
			margin-top: 4px;
		}
	}
}
</style>