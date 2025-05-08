import { TableCell } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { TableHTMLAttributes } from "react";

type LastColumnCellProps = TableHTMLAttributes<HTMLTableCellElement> & {
  isShowShadow: boolean;
};

export const LastColumnCell = ({
  isShowShadow,
  className,
  ...props
}: LastColumnCellProps) => {
  return (
    <TableCell
      {...props}
      className={cn(
        "px-4",
        "tokens_table__shadow left_shadow",
        {
          shadow_visible: isShowShadow,
        },
        className,
      )}
      tdClassName="sticky right-0 z-10 bg-background-800"
    />
  );
};
