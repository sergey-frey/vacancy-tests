export interface IProduct {
	id: number;
	name: string;
	category: number;
	prices: {
		price_type: string;
		price: number;
	}[];
}
