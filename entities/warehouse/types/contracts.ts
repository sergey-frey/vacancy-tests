import type { IWarehouse } from "./model";

export interface IGetWarehousesResponse {
	count: number;
	result: IWarehouse[];
}
