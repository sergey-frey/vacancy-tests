import { _DATA } from "@/__mock__/data";
import { commonApi } from "./instance";
import type { ShareholderData, ShareholderTicker } from "./types";
import { deduplicateArray } from "../utils/deduplicate-array";

export class ShareholderRepo {
  static async getShareholdersData(ticker: ShareholderTicker) {
    try {
      await commonApi.get<ShareholderData>(`/shareholders/${ticker}`);
    } catch (error) {
      console.error(error);
    }

    const data = _DATA;

    return deduplicateArray(data[ticker], (item) => item.holder);
  }
}
