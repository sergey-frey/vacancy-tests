import { ITicket } from "@/entites/ticket";
import { amountStopsHelper } from "@/shared/lib/amount-stops-helper";

export const getStopItemText = (stop: ITicket["stops"]) => {
  if (stop === 0) return "Без пересадок";

  return amountStopsHelper(stop);
};
