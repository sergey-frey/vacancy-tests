export const pipe = <T>(collection: T[], ...fns: ((a: T[]) => T[])[]) => {
  return fns.reduce((acc, fn) => fn(acc), collection);
};
