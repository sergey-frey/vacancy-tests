import ky from "ky";
import { requestLogger } from "../lib/request-logger.hook";

export const apiInstance = ky.create({
  prefixUrl: "http://localhost:3000",
  hooks: { beforeRequest: [requestLogger] },
});
