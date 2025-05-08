import { TableCell, TableCellProps } from "@/shared/ui";
import { cn } from "@/shared/utils";

type FirstColumnCellProps = TableCellProps & {
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
        "px-4",
        "tokens_table__shadow right_shadow",
        {
          shadow_visible: isShowShadow,
        },
        className,
      )}
      tdClassName="sticky left-0 z-10 bg-background-800"
    />
  );
};
