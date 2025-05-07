import { TableCell } from "@/shared/ui";
import { WithSorterButton } from "./with-sorter-button";

export const CngTh = () => {
  return (
    <TableCell className="py-3.5 px-2 pl-2">
      <WithSorterButton>Chg</WithSorterButton>
    </TableCell>
  );
};
