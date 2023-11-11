export type Day = {
	name: string,
	day: number,
	gregorian: {
		day: number,
		month: number,
		year: number,
	},
}

export type Month = {
	name: string,
	image: string,
	days: Day[],
}

export type Calendar = Month[]