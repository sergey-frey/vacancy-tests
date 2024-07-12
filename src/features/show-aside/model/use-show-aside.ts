import { create } from "zustand";
import type { UseShowAside } from "../types";

export const useShowAside = create<UseShowAside>((set) => ({
	isShowAside: false,
	toggleShowAside: () => set((state) => ({ isShowAside: !state.isShowAside })),
}));
