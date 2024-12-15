import { PossibleCurrencies, PossibleStops } from "@/entites/ticket";
import { TicketsFilter, useTicketsQueryState } from "@/features/filter-tickets";
import { twJoin } from "tailwind-merge";

export const App = () => {
  const { ticketsFilterState, handleCurrencyChange, handleStopsChange } =
    useTicketsQueryState({
      possibleCurrencies: PossibleCurrencies,
      possibleStops: PossibleStops,
    });

  return (
    <main className={twJoin("container mx-auto")}>
      <aside className="max-w-xs">
        <TicketsFilter
          currency={ticketsFilterState.currency}
          stops={ticketsFilterState.stops}
          onCurrencyChange={handleCurrencyChange}
          onStopsChange={handleStopsChange}
        />
      </aside>
    </main>
  );
};
