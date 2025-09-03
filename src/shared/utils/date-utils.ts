export const formatDate = (
  date: Date | string,
  options: Intl.DateTimeFormatOptions,
  locale: string = "ru-RU",
): string => {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date provided");
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

export const dateFormats = {
  shortDate: { day: "2-digit", month: "2-digit", year: "numeric" } as const,
  isoDate: { year: "numeric", month: "2-digit", day: "2-digit" } as const,
  dateTime: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  } as const,
  longDate: { day: "numeric", month: "long", year: "numeric" } as const,
};
