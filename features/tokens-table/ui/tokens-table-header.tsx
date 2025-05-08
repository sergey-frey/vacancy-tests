import { TableHeader, TableRow, TableCell } from "@/shared/ui";
import { CellWithDivider } from "./cell-with-divider";
import { FirstColumnCell } from "./first-column-cell";
import { LastColumnCell } from "./last-column-cell";
import { WithSorterButton } from "./with-sorter-button";

type TokensTableHeaderProps = {
  isShowLeftShadow: boolean;
  isShowRightShadow: boolean;
};

const CAPTION_DIVIDER_HEIGHT = "23px";

export const TokensTableHeader = ({
  isShowLeftShadow,
  isShowRightShadow,
}: TokensTableHeaderProps) => {
  return (
    <TableHeader>
      <TableRow className="border-t-0">
        <FirstColumnCell
          verticalAlign={"center"}
          isShowShadow={isShowLeftShadow}
          className="min-w-50"
        >
          Token
        </FirstColumnCell>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Created</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>Smarts</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>S. M.</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>TXs</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>Volume</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Liqudity</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>MKT Cap</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <CellWithDivider dividerHeight={CAPTION_DIVIDER_HEIGHT}>
          <WithSorterButton>Holders</WithSorterButton>
        </CellWithDivider>

        <TableCell verticalAlign={"center"}>
          <WithSorterButton>Chg</WithSorterButton>
        </TableCell>

        <TableCell verticalAlign={"center"} className="pr-8">
          CV/CR/HNP/LB
        </TableCell>

        <LastColumnCell
          isShowShadow={isShowRightShadow}
          className="border-t-0"
        />
      </TableRow>
    </TableHeader>
  );
};
