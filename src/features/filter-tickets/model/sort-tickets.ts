import { ITicket } from "@/entites/ticket";
import { sortByField } from "@/shared/lib/sort-by-field";

export const sortTicketsByPrice = (tickets: ITicket[]) => {
  return sortByField(tickets, "price");
};
