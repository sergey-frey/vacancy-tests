export const getFirstDayOfMonth = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth(), 1);

export const getLastDayOfMonth = (date: Date) =>
	new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const getAmountOfDaysInMonth = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	return new Date(year, month + 1, 0).getDate();
};

export const areDatesEqualByDay = (date1: Date, date2: Date) => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};

export const addNMonth = (date: Date, n: number) => {
	const result = new Date(date);
	const targetMonth = result.getMonth() + n;

	result.setMonth(targetMonth);

	// Если перепрыгнул месяц — установить последний день следующего месяца
	if (result.getMonth() !== targetMonth % 12) {
		result.setDate(0); // 0-й день = последний предыдущего месяца
	}

	return result;
};

export const stripTime = (date: Date) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const apiDateToISO = (date: string) => date.replace(" ", "T");

export const getTime = (date: Date) => {
	return date.toLocaleTimeString("ru-RU", {
		hour: "2-digit",
		minute: "2-digit",
	});
};

export const getTimeDiffFormatted = (target: Date) => {
	const now = new Date();
	const diffMs = target.getTime() - now.getTime();

	if (diffMs <= 0) return "00:00";

	const totalMinutes = Math.floor(diffMs / (1000 * 60));
	const hours = Math.floor(totalMinutes / 60)
		.toString()
		.padStart(2, "0");
	const minutes = (totalMinutes % 60).toString().padStart(2, "0");

	return `${hours}:${minutes}`;
};
