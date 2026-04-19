export type AccessByTokenPayload<T = Record<string, unknown>> = {
	token: string;
} & T;
