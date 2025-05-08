import { cn } from "@/shared/utils";
import { TableHTMLAttributes, CSSProperties } from "react";

export type TableCellProps = TableHTMLAttributes<HTMLTableCellElement> & {
  paddings?: [number, number, number, number];
  withRightDivider?: boolean;
  verticalAlign?: CSSProperties["verticalAlign"];
  tdClassName?: string;
};

export const TableCell = ({
  className,
  tdClassName,
  children,
  paddings = [3.5 * 4, 2 * 4, 3.5 * 4, 2 * 4],
  withRightDivider = false,
  verticalAlign = "top",
}: TableCellProps) => {
  return (
    <td
      className={cn(
        "relative",
        {
          cell_with_divider: withRightDivider,
        },
        tdClassName,
      )}
      style={{
        "--pt": `${paddings[0]}px`,
        "--pr": `${paddings[1]}px`,
        "--pb": `${paddings[2]}px`,
        "--pl": `${paddings[3]}px`,
        verticalAlign,
      }}
    >
      <div className={cn("flex items-start", "py-3.5 px-2 h-full", className)}>
        {children}
      </div>
    </td>
  );
};
