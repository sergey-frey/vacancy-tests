export const isEqualDates = (...dates: Date[]) => {
	return dates.every((date) => {
		return (
			date.getFullYear() === dates[0].getFullYear() &&
			date.getMonth() === dates[0].getMonth() &&
			date.getDate() === dates[0].getDate()
		);
	});
};
