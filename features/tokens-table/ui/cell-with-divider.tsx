import { Divider, TableCell } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

type CellWithDividerProps = TableHTMLAttributes<HTMLTableCellElement> & {
  dividerHeight?: string;
};

export const CellWithDivider = ({
  children,
  className,
  dividerHeight,
  ...props
}: CellWithDividerProps) => {
  return (
    <TableCell
      className={cn("justify-end items-center gap-2", "pr-0", className)}
      {...props}
    >
      {children}
      <Divider style={{ height: dividerHeight }} />
    </TableCell>
  );
};
