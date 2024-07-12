import type { UseShowAside } from "../types";

export const isShowAsideSelector = (store: UseShowAside) => {
	return store.isShowAside;
};

export const toggleShowAsideSelector = (store: UseShowAside) => {
	return store.toggleShowAside;
};
