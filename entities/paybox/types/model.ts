export interface IPaybox {
	id: number;
	/**
	 * Requires clarification
	 */
	external_id: null;
	name: string;
	start_balance: number;
	balance: number;
	balance_date: number;
	created_at: number;
	update_start_balance: number;
	update_start_balance_date: number;
	organization_id: number | null;
	updated_at: number;
	deleted_at: number | null;
}
