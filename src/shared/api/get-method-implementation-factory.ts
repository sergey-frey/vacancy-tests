import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const REQUESTS_CACHE = new Map<
	string,
	{ promise: Promise<AxiosResponse>; expiryTime: number }
>();

const CACHE_EXPIRY_TIME = 1000 * 10;

export const getMethodImplementationFactory =
	(apiInstance: AxiosInstance) =>
	async <ResponseType>(url: string, config: AxiosRequestConfig) => {
		const urlObj = new URL(url, apiInstance.defaults.baseURL);

		for (const [key, value] of Object.entries(config.params)) {
			urlObj.searchParams.set(key, String(value));
		}

		const cacheKey = urlObj.toString();

		if (REQUESTS_CACHE.has(cacheKey)) {
			const cached = REQUESTS_CACHE.get(cacheKey);

			if (cached.expiryTime < Date.now()) {
				REQUESTS_CACHE.delete(cacheKey);

				return getMethodImplementationFactory(apiInstance)(url, config);
			}

			return cached.promise
				.then((response) => {
					REQUESTS_CACHE.delete(cacheKey);

					return response as AxiosResponse<ResponseType>;
				})
				.catch((error) => {
					REQUESTS_CACHE.delete(cacheKey);

					throw error;
				});
		}

		const promise = apiInstance.get<ResponseType>(url, config);

		REQUESTS_CACHE.set(cacheKey, {
			promise,
			expiryTime: Date.now() + CACHE_EXPIRY_TIME,
		});

		return promise;
	};
