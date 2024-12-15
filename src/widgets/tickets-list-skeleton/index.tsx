import { TicketViewSkeleton } from "@/entites/ticket/ui/ticket-view-skeleton";
import { HTMLAttributes } from "react";

export const TicketsListSkeleton = ({
  ...props
}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul {...props}>
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="mt-2 first:mt-0">
          <TicketViewSkeleton />
        </li>
      ))}
    </ul>
  );
};
