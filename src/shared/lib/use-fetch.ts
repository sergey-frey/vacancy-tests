import { useCallback, useEffect, useState } from "react";
import { Nullable } from "../types";

type UseFetchOptions = {
	url: string;
	method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
	queryParams?: Record<string, string>;
	body?: Record<string, unknown>;
	headers?: Record<string, string>;
};

export const useFetch = <ResponseType = unknown>({
	url,
	method,
	queryParams = {},
	body = {},
	headers = {},
}: UseFetchOptions) => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState<Nullable<ResponseType>>(null);

	const fetchFunction = useCallback(async (): Promise<ResponseType> => {
		setIsLoading(true);

		const completeUrl = new URL(url);

		Object.entries(queryParams).forEach(([key, value]) => {
			completeUrl.searchParams.append(key, value);
		});

		const response = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
				...headers,
			},
			body: JSON.stringify(body),
		});

		setIsLoading(false);

		return response.json() as Promise<ResponseType>;
	}, [body, headers, method, queryParams, url]);

	useEffect(() => {
		fetchFunction().then(setData);
	}, []);

	return { isLoading, data };
};
