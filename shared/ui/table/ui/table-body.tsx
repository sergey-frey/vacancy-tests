import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

type TableBodyProps = TableHTMLAttributes<HTMLTableSectionElement>;

export const TableBody = ({ className, ...props }: TableBodyProps) => {
  return (
    <tbody
      {...props}
      className={cn("text-sm leading-lg text-foreground-900", className)}
    />
  );
};
