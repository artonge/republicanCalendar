import { set, addDays } from "date-fns"

const SEPT_21_1792 = set(new Date(), { date: 21, month: 9 - 1, year: 1792, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
const SEXTILE_RATE = 0.242222

export function isSextile(republicanYear: number): boolean {
	return Math.floor((republicanYear - 1) * SEXTILE_RATE) - Math.floor((republicanYear) * SEXTILE_RATE) !== 0
}

export function getGregorianDate(republicanDay: number, republicanMonth: number, republicanYear: number): Date {
	const dayCountInCompletedMonths = (republicanMonth - 1) * 30
	const dayCountInCompletedYears = (republicanYear - 1) * 365
	const nbOfSextileDays = Math.floor((republicanYear - 1) * SEXTILE_RATE)

	const daysSince_sept_21_1792 = republicanDay + dayCountInCompletedMonths + dayCountInCompletedYears + nbOfSextileDays

	return addDays(SEPT_21_1792, daysSince_sept_21_1792)
}

// 232 => MMXXIV
export function romanNumeral(num: number): string {
	return Array.from(num.toString())
		.map(n => Number.parseInt(n))
		.reduce(
			(romanResult, n, i, a) => {
				switch (a.length - i) {
					case 1:
						return romanResult + ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][n]
					case 2:
						return romanResult + ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'][n]
					case 3:
						return romanResult + ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'][n]
					case 4:
						return romanResult + ['', 'M', 'MM', 'MMM'][n]
					default:
						return ''
				}
			},
			'',
		)
}