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

		<div class="information__notes" v-if="month.notes.length > 0">
			<div class="information__notes__note" v-for="(note, index) in month.notes" :key="index">
				<span class="information__notes__note__title">{{ note.title }}</span>
				<p class="information__notes__note__content" v-html="note.content"></p>
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
		justify-content: space-evenly;

		&__note {
			border: 1px solid;
			border-radius: 8px;
			padding: 16px 20px;
			background-color: rgba($color: #919191, $alpha: 0.02);
			position: relative;

			&__title {
				font-weight: bold;
				font-size: 1.2em;
				margin-bottom: 6px;
				position: absolute;
				top: -0.9em;
				background-color: white;
				padding: 0 8px;
			}

			&__content {
				:deep(blockquote) {
					font-style: italic;
				}

				:deep(cite) {
					display: inline-block;
					padding-top: 8px;
					width: 100%;
					text-align: right;
				}

				:deep(time) {
					font-style: italic;
					text-decoration: underline;
				}

				:deep(.day-types-legend) {
					li {
						display: flex;
						align-items: center;
						gap: 4px;
					}
				}
			}
		}
	}
}
</style>