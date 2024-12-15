import {
  Currency,
  ITicket,
  PossibleCurrencies,
  PossibleStops,
} from "@/entites/ticket";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { useTicketsFilter } from "../model/use-tickets-filter";
import { StopsListItem } from "./stops-list-item";

type TicketsFilterProps = {
  currency: Currency;
  stops: Array<ITicket["stops"]>;

  onCurrencyChange: (currency: Currency) => void;
  onStopsChange: (stops: Array<ITicket["stops"]>) => void;
};

export const TicketsFilter = ({
  currency,
  stops,
  onCurrencyChange,
  onStopsChange,
}: TicketsFilterProps) => {
  const {
    isAllStepsChecked,
    isStopChecked,
    getCurrencyButtonVariant,
    handleCurrencyChange,
    handleAllStopsChange,
    handleStopsChange,
  } = useTicketsFilter({
    currency,
    stops,
    onCurrencyChange,
    onStopsChange,
  });

  return (
    <Card>
      <CardContent className="pt-6 px-0">
        <div className="px-6">
          <h3 className="text-sm uppercase">Валюта</h3>
          <div className="mt-2">
            {PossibleCurrencies.map((iterationCurrency, i) => (
              <Button
                key={i}
                variant={getCurrencyButtonVariant(iterationCurrency)}
                onClick={handleCurrencyChange(iterationCurrency)}
              >
                {iterationCurrency}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm uppercase px-6">Количество пересадок</h3>

          <ul className="mt-2">
            <li className="hover:bg-slate-200">
              <StopsListItem
                className="px-6 py-0.5"
                isChecked={isAllStepsChecked}
                text="Все"
                onCheck={handleAllStopsChange}
              />
            </li>

            {PossibleStops.map((stop) => {
              return (
                <li key={stop} className="hover:bg-slate-200">
                  <StopsListItem
                    className="group px-6 py-0.5"
                    isChecked={isStopChecked(stop)}
                    text={stop.toString()}
                    onCheck={handleStopsChange(stop)}
                    moreActions={
                      <Button
                        size={"sm"}
                        variant={"ghost"}
                        className="h-auto py-1 hidden group-hover:block"
                        onClick={() => onStopsChange([stop])}
                      >
                        Только
                      </Button>
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
