import { Currency, ITicket } from "@/entites/ticket";

export type FilterState = {
  currency: Currency;
  stops: Array<ITicket["stops"]>;
};
