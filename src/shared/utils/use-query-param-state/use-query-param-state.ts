import { use, useLayoutEffect, useState } from "react";
import type { Nullable } from "@/shared/types/utlity";
import { CurrentUrlContext } from "./current-url-context";

type QueryParamValue = string | number | boolean;

interface IOptions<T extends QueryParamValue> {
	paramKey: string;
	defaultValue: T;
}

interface IResponse<T extends QueryParamValue> {
	state: Nullable<T>;
	setState: (state: T) => void;
}

const commitQueryParamChange = (url: URL, setUrl: (url: URL) => void) => {
	window.history.pushState({}, "", url);
	setUrl(url);
};

export const useQueryParamState = <T extends QueryParamValue>(
	options: IOptions<T>,
): IResponse<T> => {
	const { paramKey } = options;

	const { url, setUrl } = use(CurrentUrlContext);

	const paramValue = url.searchParams.get(paramKey);

	const [state, setState] = useState<Nullable<T>>(
		(paramValue as Nullable<T>) ?? options.defaultValue,
	);

	useLayoutEffect(() => {
		if (paramValue) {
			return;
		}

		setState(options.defaultValue);
	}, [paramValue, options.defaultValue]);

	const updateState = (newState: T) => {
		if (!newState) {
			url.searchParams.delete(paramKey);
			commitQueryParamChange(url, setUrl);
		} else {
			url.searchParams.set(paramKey, String(newState));
			commitQueryParamChange(url, setUrl);
		}

		setState(newState);
	};

	return {
		state,
		setState: updateState,
	};
};
