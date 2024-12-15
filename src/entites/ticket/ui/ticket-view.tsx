import { amountStopsHelper } from "@/shared/lib/amount-stops-helper";
import { formatDate } from "@/shared/lib/date-formatter";
import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { Separator } from "@/shared/ui/separator";
import { ITicket } from "../model/types";
import { PlaneIcon } from "lucide-react";

type TicketViewProps = {
  ticket: ITicket;
};

export const TicketView = ({ ticket }: TicketViewProps) => {
  const {
    arrival_date,
    arrival_time,
    carrier,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops,
  } = ticket;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-xl font-medium">
              <PlaneIcon className="inline mr-2" />
              {carrier}
            </h2>

            <Button className="mt-auto">Купить за {price}₽</Button>
          </div>

          <Separator orientation="vertical" className="mx-6 h-auto" />

          <div className="grow grid grid-cols-3">
            <section>
              <time className="text-3xl">{arrival_time}</time>
              <div>
                {origin}, {origin_name}
              </div>
              <div>{formatDate(arrival_date)}</div>
            </section>

            <span className="place-self-center text-slate-600">
              {amountStopsHelper(stops)}
            </span>

            <section className="place-self-end">
              <time className="text-3xl">{departure_time}</time>
              <div>
                {destination}, {destination_name}
              </div>
              <div>{formatDate(departure_date)}</div>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
