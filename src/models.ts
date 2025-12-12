export enum DayType {
	Végétal,
	DérivéVégétal,
	Fruit,
	Fleur,
	Céréale,
	Arbre,
	Champignon,
	Racine,
	Oiseau,
	Mammifère,
	Insecte,
	Poisson,
	Minéral,
	Métal,
	Outil,
	Fête,
}

export const DayTypeCategory = {
	[DayType.Végétal]: "végétal",
	[DayType.DérivéVégétal]: "végétal",
	[DayType.Fruit]: "végétal",
	[DayType.Fleur]: "végétal",
	[DayType.Céréale]: "végétal",
	[DayType.Arbre]: "végétal",
	[DayType.Champignon]: "végétal",
	[DayType.Racine]: "végétal",
	[DayType.Oiseau]: "animal",
	[DayType.Mammifère]: "animal",
	[DayType.Insecte]: "animal",
	[DayType.Poisson]: "animal",
	[DayType.Minéral]: "minéral",
	[DayType.Métal]: "minéral",
	[DayType.Outil]: "outil",
	[DayType.Fête]: "fête",
}

export type Day = {
	name: string,
	day: number,
	type: DayType,
	wikipedia: string,
}

export type Month = {
	name: string,
	image: string,
	image_description?: string,
	description: string,
	month_notes: string[],
	calendar_notes: string[],
	days: Day[],
}

export type Calendar = Month[]