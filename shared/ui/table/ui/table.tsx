import { cn } from "@/shared/utils";
import { HTMLAttributes, RefObject, TableHTMLAttributes } from "react";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export const Table = ({ className, wrapperRef, ...props }: TableProps) => {
  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative",
        "overflow-x-auto",
        "rounded-2 border border-background-700",
        "bg-background-800",
        className,
      )}
    >
      <table border={0} {...props} className="w-full border-0" />
    </div>
  );
};

export const TableHeader = ({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement>) => {
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

export const TableBody = ({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tbody
      {...props}
      className={cn("text-sm leading-lg text-foreground-900", className)}
    />
  );
};

export const TableRow = ({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableRowElement>) => {
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

export const TableCell = ({
  className,
  ...props
}: TableHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td
      {...props}
      className={cn(
        "relative",
        "py-3.5 w-fit",
        "w-full min-w-[72px]",
        className,
      )}
    ></td>
  );
};

// This component is used to create a flex container that fills the entire cell.
// Need relative parent
export const TableCellFlexContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "absolute flex top-0 left-0 right-0 bottom-0 p-inherit",
        className,
      )}
    ></div>
  );
};
