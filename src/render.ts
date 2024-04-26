import type { Tree } from "./types";
import { getMaxChildValueLength, typing } from "./utils";

const getRow = (
	node: Tree,
	prevSymbols: string,
	postSymbols: string,
): string => {
	return `${prevSymbols}${node.value}${postSymbols}\n`;
};

const getPrevSymbols = (
	prevSymbols: string,
	parentIsLastChild: boolean,
	leftDistance: number,
) => {
	let newPrevSymbols = prevSymbols;

	if (parentIsLastChild) {
		newPrevSymbols += " ".repeat(leftDistance);
	} else {
		newPrevSymbols += `|${" ".repeat(leftDistance - 1)}`;
	}

	return newPrevSymbols;
};

const getPostSymbols = (node: Tree, maxChildValueLength: number) => {
	if (node.children.length > 0) {
		const valueLength = String(node.value).length;
		const amountOfHyphens = Math.max(3, maxChildValueLength - valueLength + 3);
		return `${"-".repeat(amountOfHyphens)}+`;
	}

	return "";
};

const getTreeView = (
	node: Tree,
	prevSymbols: string, // Символы перед родительским узлом
	maxChildValueLength: number, // Максимальная длина значения соседа
	parentIsLastChild = true,
): string => {
	let result = "";
	const leftDistance = maxChildValueLength + 3;

	// Максимальная длина значения дочернего узла
	const currentMaxChildValueLength = getMaxChildValueLength(node);

	// Символы до начала значения узла
	const currentPrevSymbols = getPrevSymbols(
		prevSymbols,
		parentIsLastChild,
		leftDistance,
	);

	// Символы после значения узла если узел имеет дочерние узлы
	const postSymbols = getPostSymbols(node, maxChildValueLength);

	result += getRow(node, prevSymbols, postSymbols);

	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		const isLastChild = i === node.children.length - 1;

		result += getTreeView(
			child,
			currentPrevSymbols,
			currentMaxChildValueLength,
			isLastChild,
		);
	}

	return result;
};

export const renderTree = (root: Tree, renderField: HTMLElement) => {
	const treeView = getTreeView(root, "", String(root.value).length);

	typing({
		str: treeView,
		cb: (strPart) => {
			renderField.textContent = strPart;
		},
		delayMs: 10,
	});
};
