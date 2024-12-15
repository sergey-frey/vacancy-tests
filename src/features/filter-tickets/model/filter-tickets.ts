import { ITicket } from "@/entites/ticket";
import { FilterState } from "../types/filter-state";

export const filterTickets = (tickets: ITicket[], filterState: FilterState) => {
  const { stops } = filterState;

  const ticketsFilteredByStops =
    stops.length === 0
      ? tickets
      : tickets.filter((ticket) => {
          return stops.includes(ticket.stops);
        });

  return ticketsFilteredByStops;
};
