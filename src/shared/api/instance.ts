import axios from "axios";

export const commonApi = axios.create({
  baseURL: "https://example.com",
});
