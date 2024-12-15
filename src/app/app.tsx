import {
  PossibleCurrencies,
  PossibleStops,
  TicketView,
  useTickets,
} from "@/entites/ticket";
import {
  filterTickets,
  sortTicketsByPrice,
  TicketsFilter,
  useTicketsFilterQueryState,
} from "@/features/filter-tickets";
import { pipe } from "@/shared/lib/pipe";
import { TicketsListSkeleton } from "@/widgets/tickets-list-skeleton";
import { TicketsNotFound } from "@/widgets/tickets-not-found";
import { twJoin } from "tailwind-merge";

export const App = () => {
  const {
    data: tickets,
    isLoading: isTicketsLoading,
    error: ticketsError,
  } = useTickets();

  const { ticketsFilterState, handleCurrencyChange, handleStopsChange } =
    useTicketsFilterQueryState({
      possibleCurrencies: PossibleCurrencies,
      possibleStops: PossibleStops,
    });

  if (ticketsError) {
    return <div>Ошибка загрузки билетов</div>;
  }

  const filteredTickets = pipe(
    tickets ?? [],
    (tickets) => filterTickets(tickets, ticketsFilterState),
    (tickets) => sortTicketsByPrice(tickets),
  );

  return (
    <main
      className={twJoin("container mx-auto max-w-screen-lg", "flex", "py-10")}
    >
      <aside className="max-w-xs">
        <TicketsFilter
          className="sticky top-4"
          currency={ticketsFilterState.currency}
          stops={ticketsFilterState.stops}
          onCurrencyChange={handleCurrencyChange}
          onStopsChange={handleStopsChange}
        />
      </aside>

      <section className="ml-4 grow">
        <h1 className="text-2xl">
          Подходящие билеты {`(${filteredTickets.length})`}
        </h1>

        <ul className="mt-4">
          {isTicketsLoading && <TicketsListSkeleton className="mt-4" />}
          {filteredTickets.length === 0 && <TicketsNotFound />}
          {filteredTickets.map((ticket, i) => {
            return (
              <li key={i} className="mt-2 first:mt-0">
                <TicketView ticket={ticket}></TicketView>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
