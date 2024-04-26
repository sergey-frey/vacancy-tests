import type { Tree } from "../types";

export const parseNodeString = (
	node: string,
): {
	openBrackets: number;
	closeBrackets: number;
	nodeValue: Tree["value"];
} => {
	let openBracketsCount = 0;
	let closeBracketsCount = 0;

	for (let i = 0; i < node.length; i++) {
		if (node[i] !== "(") {
			break;
		}

		++openBracketsCount;
	}

	for (let i = node.length - 1; i >= 0; i--) {
		if (node[i] !== ")") {
			break;
		}

		++closeBracketsCount;
	}

	return {
		openBrackets: openBracketsCount,
		closeBrackets: closeBracketsCount,
		nodeValue: node.slice(openBracketsCount, node.length - closeBracketsCount),
	};
};
