import { apiInstance } from "@/shared/api/api-instance";
import useSWR from "swr";
import { ITicketsResponse } from "./types";

export const useTickets = () => {
  return useSWR<ITicketsResponse>(
    "tickets",
    (...args: Parameters<typeof apiInstance.get>) =>
      apiInstance.get(...args).json<ITicketsResponse>(),
  );
};
