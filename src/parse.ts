import type { Tree } from "./types";
import { parseNodeString } from "./utils";

/* 
  Уровень вложенности каждого элемента - это кол-во
  открытых перед ним скобок минус кол-во закрытых перед ним скобок
*/

const findChildren = (nodes: Tree[], nodeIndex = 0): Tree[] => {
	const node = nodes[nodeIndex];
	const children: Tree[] = [];

	for (let i = nodeIndex + 1; i < nodes.length; i++) {
		if (nodes[i].deepLevel <= node.deepLevel) {
			break;
		}

		if (nodes[i].deepLevel === node.deepLevel + 1) {
			nodes[i].children = findChildren(nodes, i);
			children.push(nodes[i]);
		}
	}

	return children;
};

export const parseTreeInput = (treeInput: string): Tree | null => {
	if (treeInput === "" || treeInput.length < 3) {
		return null;
	}

	try {
		const nodes = treeInput.split(" ");
		let deepLevel = 0;

		const parsedNodes: Tree[] = nodes.map((node) => {
			const { openBrackets, closeBrackets, nodeValue } = parseNodeString(node);

			deepLevel += openBrackets;

			const Tree: Tree = {
				value: nodeValue || "[space]",
				deepLevel,
				children: [],
			};

			deepLevel -= closeBrackets;

			if (deepLevel < 0) {
				throw new Error("Нарушена структура входного дерева");
			}

			return Tree;
		});

		if (parsedNodes.length < 1) {
			return null;
		}

		const root: Tree = parsedNodes[0];

		root.children = findChildren(parsedNodes);
		return root;
	} catch (error) {
		console.log(error);
		return null;
	}
};
