export interface IContragent {
	id: number;
	name: string;
	external_id: string;
	phone: string | null;
	phone_code: string | null;
	/**
	 * Can be empty string
	 */
	inn: string | null;
	description: string | null;
	contragent_type: string | null;
	/**
	 * Requires clarification
	 */
	type: string | null;
	/**
	 * Format: YYYY-MM-DD
	 */
	birth_date: string | null;
	data: {
		type?: string;
		chat_ids?: number[];
		primary_channel?: string;
	} | null;
	/**
	 * Requires clarification
	 */
	additional_phones: string[] | null;
	/**
	 * Requires clarification
	 */
	gender: string | null;
	cashbox: number;
	is_deleted: boolean;
	is_phone_formatted: boolean;
	created_at: number;
	updated_at: number;
	email: string | null;
}
