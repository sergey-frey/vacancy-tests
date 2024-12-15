import { Currency, ITicket, PossibleStops } from "@/entites/ticket";
import { ButtonProps } from "@/shared/ui/button";

type UseTicketsFilterOptions = {
  currency: Currency;
  stops: Array<ITicket["stops"]>;

  onCurrencyChange: (currency: Currency) => void;
  onStopsChange: (stops: Array<ITicket["stops"]>) => void;
};

export const useTicketsFilter = ({
  currency,
  stops,
  onCurrencyChange,
  onStopsChange,
}: UseTicketsFilterOptions) => {
  const getCurrencyButtonVariant = (
    buttonCurrency: Currency,
  ): ButtonProps["variant"] => {
    return currency === buttonCurrency ? "default" : "outline";
  };

  const isAllStepsChecked =
    stops.length === PossibleStops.length || stops.length === 0;

  const handleCurrencyChange = (currency: Currency) => {
    return () => onCurrencyChange(currency);
  };

  const handleAllStopsChange = () => {
    if (isAllStepsChecked) {
      onStopsChange([]);
    } else {
      onStopsChange([...PossibleStops]);
    }
  };

  const handleStopsChange = (currentStop: ITicket["stops"]) => () => {
    if (isStopChecked(currentStop)) {
      onStopsChange(stops.filter((stop) => stop !== currentStop));
    } else {
      onStopsChange([...stops, currentStop]);
    }
  };

  const isStopChecked = (currentStop: ITicket["stops"]) => {
    return stops.includes(currentStop);
  };

  return {
    isAllStepsChecked,
    isStopChecked,
    getCurrencyButtonVariant,
    handleCurrencyChange,
    handleAllStopsChange,
    handleStopsChange,
  };
};
