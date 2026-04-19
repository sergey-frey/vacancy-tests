export interface IOrganization {
	id: number;
	type: string;
	short_name: string;
	full_name: string | null;
	work_name: string | null;
	prefix: string | null;
	inn: number | null;
	kpp: number | null;
	okved: number | null;
	okved2: number | null;
	okpo: number | null;
	ogrn: number | null;
	org_type: string | null;
	tax_type: string | null;
	tax_percent: number | null;
	registration_date: number;
	updated_at: number;
	created_at: number;
}
