import type { Tree } from "../types";

export const getMaxChildValueLength = (tree: Tree): number => {
	let maxChildValueLength = 0;

	for (let i = 0; i < tree.children.length; i++) {
		const child = tree.children[i];
		maxChildValueLength = Math.max(
			maxChildValueLength,
			String(child.value).length,
		);
	}

	return maxChildValueLength;
};
