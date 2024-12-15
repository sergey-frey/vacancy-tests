import { Currency, ITicket } from "@/entites/ticket";
import { parseAsArrayOf, parseAsInteger, useQueryStates } from "nuqs";
import { currencyQueryStateParser } from "./currency-query-state-parser";

type UseTicketsQueryStateOptions = {
  possibleCurrencies: Array<Currency>;
  possibleStops: Array<ITicket["stops"]>;
};

export const useTicketsQueryState = ({
  possibleCurrencies,
}: UseTicketsQueryStateOptions) => {
  const [ticketsFilterState, setTicketsFilterState] = useQueryStates({
    currency: currencyQueryStateParser.withDefault(Currency.RUB),
    stops: parseAsArrayOf(parseAsInteger).withDefault([]),
  });

  const handleCurrencyChange = (currency: Currency) => {
    if (!possibleCurrencies.includes(currency)) return;

    setTicketsFilterState((prev) => ({
      ...prev,
      currency,
    }));
  };

  const handleStopsChange = (stops: Array<ITicket["stops"]>) => {
    setTicketsFilterState((prev) => ({
      ...prev,
      stops,
    }));
  };

  return {
    ticketsFilterState,
    handleStopsChange,
    handleCurrencyChange,
  };
};
