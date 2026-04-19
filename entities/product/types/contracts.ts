import type { IProduct } from "./model";

export interface IGetProductsResponse {
	count: number;
	result: IProduct[];
}
