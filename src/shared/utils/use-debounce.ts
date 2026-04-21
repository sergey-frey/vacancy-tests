import { useEffect, useState } from "react";

export const useDebouncedState = <T>(state: T, delay: number) => {
	const [debouncedState, setDebouncedState] = useState(state);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedState(state);
		}, delay);

		return () => clearTimeout(timeout);
	}, [state, delay]);

	return debouncedState;
};
