import { Divider, TableCell, TableCellFlexContent } from "@/shared/ui";
import { TableHTMLAttributes } from "react";

type CellWithDividerProps = TableHTMLAttributes<HTMLTableCellElement>;

export const CellWithDivider = ({
  children,
  ...props
}: CellWithDividerProps) => {
  return (
    <TableCell {...props}>
      <TableCellFlexContent className="gap-2 justify-end">
        {children}
        <Divider />
      </TableCellFlexContent>
    </TableCell>
  );
};
