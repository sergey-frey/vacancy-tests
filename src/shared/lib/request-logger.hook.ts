import type { KyRequest } from "ky";

export const requestLogger = (req: KyRequest) => {
  console.log(`${req.method} ${req.url}`);
  console.dir(req);

  return req;
};
