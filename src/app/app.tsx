import {
  PossibleCurrencies,
  PossibleStops,
  TicketView,
  useTickets,
} from "@/entites/ticket";
import { TicketsFilter, useTicketsQueryState } from "@/features/filter-tickets";
import { twJoin } from "tailwind-merge";

export const App = () => {
  const { data: tickets, isLoading: isTicketsLoading } = useTickets();

  const { ticketsFilterState, handleCurrencyChange, handleStopsChange } =
    useTicketsQueryState({
      possibleCurrencies: PossibleCurrencies,
      possibleStops: PossibleStops,
    });

  if (isTicketsLoading) {
    return <div>loading...</div>;
  }

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
        <h1 className="text-2xl">Подходящие билеты</h1>

        <ul className="mt-4">
          {tickets?.map((ticket, i) => {
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
