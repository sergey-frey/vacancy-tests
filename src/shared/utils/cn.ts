type ClassName = string | undefined | boolean;

export const cn = (...classes: ClassName[]) =>
	classes.filter(Boolean).join(" ");

export default cn;
