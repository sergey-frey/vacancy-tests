import type { IProduct } from "@/entities/product";

export interface IProductInOrderPosition {
	product: IProduct;
	price: number;
	amount: number;
}
