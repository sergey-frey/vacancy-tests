import { GetAllTokensResponse } from "@/entities/token";

export const TOKENS_PLACEHOLDER_DATA: GetAllTokensResponse = {
  items: Array.from({ length: 20 }, (_, index) => ({
    id: `0x${index.toString(16).padStart(40, "0")}`,
  })) as unknown as GetAllTokensResponse["items"],
};
