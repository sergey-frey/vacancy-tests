import {
  Currency,
  ITicket,
  PossibleCurrencies,
  PossibleStops,
} from "@/entites/ticket";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { HTMLAttributes } from "react";
import { getStopItemText } from "../model/stop-item-text";
import { useTicketsFilter } from "../model/use-tickets-filter";
import { StopsListItem } from "./stops-list-item";
import { twJoin } from "tailwind-merge";

type TicketsFilterProps = HTMLAttributes<HTMLElement> & {
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
  ...props
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
    <Card {...props}>
      <CardContent className="pt-6 px-0">
        <div className="px-6">
          <h3 className="text-sm uppercase">Валюта</h3>
          <div
            className="mt-2 grid"
            style={{
              gridTemplateColumns: `repeat(${PossibleCurrencies.length}, 1fr)`,
            }}
          >
            {PossibleCurrencies.map((iterationCurrency, i) => (
              <Button
                key={i}
                className={twJoin(
                  "rounded-none",
                  "first:rounded-s-lg first:border-e-0",
                  "last:rounded-e-lg last:border-s-0",
                )}
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
                    text={getStopItemText(stop)}
                    onCheck={handleStopsChange(stop)}
                    moreActions={
                      <Button
                        size={"sm"}
                        variant={"ghost"}
                        className="h-auto py-1 opacity-0 group-hover:opacity-100 ml-4"
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
