type TypingOptions = {
	str: string;
	cb: (strPart: string) => void;
	delayMs: number;
};

export const typing = ({
	str,
	cb,
	delayMs = 200,
}: TypingOptions): Promise<string> => {
	return new Promise<string>((resolve) => {
		let strPart = "";
		let i = 0;
		const interval = setInterval(() => {
			do {
				strPart += str[i];
				i++;
			} while (str[i] === " ");

			cb(strPart);

			if (i === str.length) {
				clearInterval(interval);
				resolve(str);
			}
		}, delayMs);
	});
};
