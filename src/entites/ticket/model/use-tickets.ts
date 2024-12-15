import { apiInstance } from "@/shared/api/api-instance";
import useSWR from "swr";

export const useTickets = () => {
  return useSWR("tickets", apiInstance.get);
};
