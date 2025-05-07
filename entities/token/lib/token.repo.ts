import { tokenInstance, WithAbortSignal } from "@/shared/api";
import { AxiosInstance } from "axios";
import { GetAllTokensDto } from "../types/dto";
import { GetAllTokensResponse } from "../types/responses";

class TokenRepository {
  private _instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this._instance = instance;
  }

  public async getAll({
    limit,
    offset,
    signal,
  }: WithAbortSignal<GetAllTokensDto>) {
    const response = await this._instance.get<GetAllTokensResponse>("/", {
      params: {
        limit,
        offset,
      },
      signal,
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch tokens");
    }

    return response.data;
  }
}

export const tokenRepository = new TokenRepository(tokenInstance);
