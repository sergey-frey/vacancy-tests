import { useEffect, useLayoutEffect, useState } from "react";

type UseNowOptions = {
	delay: number;
	enabled: boolean;
	cb?: (now: number, startAt: number, reset: () => void) => void;
};

type UseNowResponse = {
	now: number;
	startAt: number;
	reset: () => void;
};

export const useNow = ({
	delay,
	enabled,
	cb,
}: UseNowOptions): UseNowResponse => {
	const [startAt, setStartAt] = useState<number>(Date.now());
	const [now, setNow] = useState<number>(Date.now());

	const reset = () => {
		setNow(Date.now());
		setStartAt(Date.now());
	};

	useEffect(() => {
		setStartAt(Date.now());
	}, []);

	useLayoutEffect(() => {
		if (!enabled) return;

		setNow(Date.now());

		const interval = setInterval(() => {
			if (cb) {
				cb(Date.now(), startAt, reset);
			}
			setNow(Date.now());
		}, delay);

		return () => {
			clearInterval(interval);
		};
	}, [delay, enabled]);

	return { now, startAt, reset };
};
