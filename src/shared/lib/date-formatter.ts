const intlDateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDate = (date: string) => {
  const dateComponents = date.split(".").map(Number);

  return intlDateFormatter.format(
    new Date(
      `${dateComponents[1]}/${dateComponents[0] + 1}/${dateComponents[2]}`,
    ),
  );
};
