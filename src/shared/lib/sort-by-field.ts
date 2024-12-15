export const sortByField = <T extends Record<string | symbol, unknown>>(
  collection: Array<T>,
  field: keyof T,
  comparisonFn?: (a: T[typeof field], b: T[typeof field]) => number,
) => {
  return [...collection].sort((a, b) => {
    if (comparisonFn) {
      return comparisonFn(a[field], b[field]);
    }

    return a[field] < b[field] ? -1 : 1;
  });
};
