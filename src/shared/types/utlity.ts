export type Nullable<T> = T | null;

export type ConstEnumUnion<T extends Record<string, string>> = T[keyof T];

export type Address = {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: Coordinate;
	country: string;
};

export type Coordinate = {
	lat: number;
	lng: number;
};

export type CryptoInfo = {
	coin: string;
	wallet: string;
	network: string;
};
