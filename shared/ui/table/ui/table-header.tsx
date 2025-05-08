import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

export type TableHeaderProps = TableHTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = ({ className, ...props }: TableHeaderProps) => {
  return (
    <thead
      {...props}
      className={cn(
        "text-sm leading-lg font-bold text-foreground-800",
        className,
      )}
    />
  );
};
