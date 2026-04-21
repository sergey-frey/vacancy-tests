import { useCallback, useEffect, useState } from "react";
import type { Nullable } from "../types/utlity";

interface IOptions<T> {
	fetcher: () => Promise<Nullable<T>>;
}

export const useFetch = <T>({ fetcher }: IOptions<T>) => {
	const [data, setData] = useState<Nullable<T>>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Nullable<Error>>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);

		try {
			const response = await fetcher();

			setData(response);
		} catch (errorObject) {
			if (errorObject instanceof Error) {
				if (errorObject.name === "AbortError") {
					return;
				}

				setError(errorObject);
			}

			throw errorObject;
		} finally {
			setIsLoading(false);
		}
	}, [fetcher]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		fetchData();
	};

	return {
		data,
		isLoading,
		error,
		refetch,
	};
};
