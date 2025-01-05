export enum Mastery {
	Medium="Correct",
	High="Bonne",
	VeryHigh="Très bonne",
}

export interface Tool {
	image: string;
	alt: string;
	description: string;
	mastery: Mastery;
}