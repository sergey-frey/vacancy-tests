import type { IOrganization } from "./model";

export interface IGetOrganizationsResponse {
	count: number;
	result: IOrganization[];
}
