import { parseTreeInput } from "./parse";
import { renderTree } from "./render";

const treeInputForm = document.getElementById(
	"treeInputForm",
) as HTMLFormElement;

const treeViewField = document.getElementById("treeView") as HTMLPreElement;

let treeInput = "";

const handleTreeInputFormSubmit = (e: Event) => {
	e.preventDefault();

	treeInput = (document.getElementById("treeInput") as HTMLInputElement).value;

	const tree = parseTreeInput(treeInput);

	if (tree === null) {
		return;
	}

	renderTree(tree, treeViewField);
};

treeInputForm.addEventListener("submit", handleTreeInputFormSubmit);
