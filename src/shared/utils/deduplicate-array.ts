export const deduplicateArray = <T>(
  array: T[],
  keyBuilder: (item: T) => string,
) => {
  return array.filter(
    (item, index, self) => self.findIndex((t) => keyBuilder(t) === keyBuilder(item)) === index,
  );
};
