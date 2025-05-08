import axios from "axios";
import urlJoin from "url-join";

import { API_CONFIG } from "../config";

export const tokenInstance = axios.create({
  baseURL: urlJoin(API_CONFIG.BASE_URL, API_CONFIG.ENDPOINTS.TOKEN),
  headers: {
    "Content-Type": "application/json",
  },
});
