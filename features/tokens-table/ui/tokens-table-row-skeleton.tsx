import { TableCell, TableRow } from "@/shared/ui";

type TokensTableRowSkeletonProps = {
  cols: number;
};

export const TokensTableRowSkeleton = ({
  cols,
}: TokensTableRowSkeletonProps) => {
  return (
    <TableRow>
      {Array.from({ length: cols }, (_, index) => (
        <TableCell
          key={index}
          className="animate-pulse h-14 bg-background-700"
        />
      ))}
    </TableRow>
  );
};
