import axios from "axios";
import urlJoin from "url-join";

const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://api.printer.getmoni.io/api/v1";

export const tokenInstance = axios.create({
  baseURL: urlJoin(baseUrl, "token"),
  headers: {
    "Content-Type": "application/json",
  },
});
