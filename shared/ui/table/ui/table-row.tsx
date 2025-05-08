import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

type TableRowProps = TableHTMLAttributes<HTMLTableRowElement>;

export const TableRow = ({ className, ...props }: TableRowProps) => {
  return (
    <tr
      {...props}
      className={cn(
        "pt-3.5 pb-4.5",
        "border-t border-background-700",
        className,
      )}
    />
  );
};
