export const formatTime = (ms: number): string => {
	const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
	const minutes = String(Math.floor(ms / 1000 / 60)).padStart(2, "0");

	return `${minutes}:${seconds}`;
};
