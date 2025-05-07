import { TableCell } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

type FirstColumnCellProps = TableHTMLAttributes<HTMLTableCellElement> & {
  isShowShadow: boolean;
};

export const FirstColumnCell = ({
  isShowShadow,
  className,
  ...props
}: FirstColumnCellProps) => {
  return (
    <TableCell
      {...props}
      className={cn(
        "sticky left-0 z-10",
        "px-4",
        "tokens_table__shadow right_shadow",
        "bg-background-800",
        {
          visible: isShowShadow,
        },
        className,
      )}
    />
  );
};
