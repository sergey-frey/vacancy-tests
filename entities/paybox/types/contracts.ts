import type { IPaybox } from "./model";

export interface IGetPayboxesResponse {
	count: number;
	result: IPaybox[];
}
