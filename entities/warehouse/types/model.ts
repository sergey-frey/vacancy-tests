export interface IWarehouse {
	id: number;
	address: string | null;
	created_at: number;
	description: string | null;
	is_public: boolean;
	latitude: number | null;
	longitude: number | null;
	name: string;
	parent: number | null;
	phone: string | null;
	qr_hash: string | null;
	qr_url: string | null;
	status: boolean;
	type: string | null;
	updated_at: number;
}
