import { TableBody, TableRow, TableCell, Button } from "@/shared/ui";
import { PowerIcon } from "@/shared/ui/icons";
import { CreatedCellContent } from "./created-cell-content";
import { FirstColumnCell } from "./first-column-cell";
import { LastColumnCell } from "./last-column-cell";
import { PropertyChangeText } from "./property-change-text";
import { SecurityCellContent } from "./security-cell-content";
import { TokenCellContent } from "./token-cell-content";
import { TokensTableRowSkeleton } from "./tokens-table-row-skeleton";
import { TxsCellContent } from "./txs-cell-content";
import { VolumeCellContent } from "./volume-cell-content";
import { TokenType } from "@/entities/token";

type TokensTableBodyProps = {
  isPlaceholderData: boolean;
  isShowLeftShadow: boolean;
  isShowRightShadow: boolean;
  data: TokenType[];
};

export const TokensTableBody = ({
  isPlaceholderData,
  isShowLeftShadow,
  isShowRightShadow,
  data,
}: TokensTableBodyProps) => {
  return (
    <TableBody>
      {data.map((item) => {
        if (isPlaceholderData) {
          return <TokensTableRowSkeleton key={item.id} cols={17} />;
        }

        return (
          <TableRow key={item.id}>
            <FirstColumnCell isShowShadow={isShowLeftShadow}>
              <TokenCellContent
                logoUrl={item.logoUrl}
                tokenName={item.name}
                tokenAddress={item.address}
              />
            </FirstColumnCell>

            <TableCell className="justify-center">
              <CreatedCellContent createdTimestamp={item.createdAt} />
            </TableCell>

            <TableCell withRightDivider className="justify-end">
              {item.smartFollowersCount}
            </TableCell>

            <TableCell>
              <PropertyChangeText
                value={item.smartFollowersCountChange}
                isShowPositiveSymbol
              />
            </TableCell>

            <TableCell withRightDivider className="justify-end">
              {item.smartMentionsCount}
            </TableCell>

            <TableCell>
              <PropertyChangeText
                value={item.smartMentionsCountChange}
                isShowPositiveSymbol
              />
            </TableCell>

            <TableCell withRightDivider className="justify-end">
              <TxsCellContent
                txsBuyCount={item.txsBuyCount}
                txsSellCount={item.txsSellCount}
              />
            </TableCell>

            <TableCell>
              <PropertyChangeText value={item.txsCountChange} />
            </TableCell>

            <TableCell withRightDivider className="justify-end">
              <VolumeCellContent
                volumeBuy={Number(item.volumeBuy.USD)}
                volumeSell={Number(item.volumeSell.USD)}
              />
            </TableCell>

            <TableCell>
              <PropertyChangeText
                value={Number(item.volumeChange.USD)}
                isShowPositiveSymbol
              />
            </TableCell>

            <TableCell>${item.liquidity.USD}</TableCell>

            <TableCell withRightDivider className="justify-end">
              ${item.marketCap.USD}
            </TableCell>

            <TableCell>
              <PropertyChangeText
                value={Number(item.marketCapChange.USD)}
                isShowPositiveSymbol
              />
            </TableCell>

            <TableCell withRightDivider className="justify-end">
              {item.holdersCount}
            </TableCell>

            <TableCell className="pl-2">
              <PropertyChangeText
                value={item.holdersCountChange}
                isShowPositiveSymbol
              />
            </TableCell>

            <TableCell>
              <SecurityCellContent
                securityIndicators={item.security.map((s) => s.status)}
              />
            </TableCell>

            <LastColumnCell
              isShowShadow={isShowRightShadow}
              className="justify-end"
            >
              <Button startContent={<PowerIcon className="w-4 h-4" />}>
                Buy
              </Button>
            </LastColumnCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
