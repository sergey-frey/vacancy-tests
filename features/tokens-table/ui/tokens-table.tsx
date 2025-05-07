"use client";

import { useQuery } from "@tanstack/react-query";

import { tokenRepository } from "@/entities/token";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableCellFlexContent,
  TableHeader,
  TableProps,
  TableRow,
} from "@/shared/ui";
import { PowerIcon } from "@/shared/ui/icons";
import { cn, useScroll } from "@/shared/utils";
import { CellWithDivider } from "./cell-with-divider";
import { CngTh } from "./cng-th";
import { CreatedCellContent } from "./created-cell-content";
import { PropertyChangeText } from "./property-change-text";
import { SecurityCellContent } from "./security-cell-content";
import { TokenCellContent } from "./token-cell-content";
import { TxsCellContent } from "./txs-cell-content";
import { VolumeCellContent } from "./volume-cell-content";
import { WithSorterButton } from "./with-sorter-button";

import "../styles/index.css";
import { FirstColumnCell } from "./first-column-cell";
import { LastColumnCell } from "./last-column-cell";

type TokensTableProps = TableProps;

export const TokensTable = ({ className, ...props }: TokensTableProps) => {
  const { data } = useQuery({
    queryKey: ["tokens"],
    queryFn: ({ signal }) => {
      return tokenRepository.getAll({ limit: 50, offset: 0, signal });
    },
  });

  const { elemRef, scroll } = useScroll<HTMLDivElement>();

  const isShowLeftShadow = scroll.x > 0;
  const isShowRightShadow =
    scroll.width > 0 && scroll.width - scroll.clientWidth - scroll.x > 10;

  return (
    <Table
      {...props}
      wrapperRef={elemRef}
      className={cn("font-medium", className)}
    >
      <TableHeader>
        <TableRow>
          <FirstColumnCell isShowShadow={isShowLeftShadow}>
            Token
          </FirstColumnCell>

          <TableCell>
            <WithSorterButton>Created</WithSorterButton>
          </TableCell>

          <CellWithDivider>
            <WithSorterButton>Smarts</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <CellWithDivider>
            <WithSorterButton>S. M.</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <CellWithDivider>
            <WithSorterButton>TXs</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <CellWithDivider>
            <WithSorterButton>Volume</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <TableCell>Liqudity</TableCell>

          <CellWithDivider>
            <WithSorterButton>MKT Cap</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <CellWithDivider>
            <WithSorterButton>Holders</WithSorterButton>
          </CellWithDivider>
          <CngTh />

          <TableCell className="pr-8">CV/CR/HNP/LB</TableCell>

          <LastColumnCell isShowShadow={isShowRightShadow} />
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.items.map((item) => (
          <TableRow key={item.id}>
            <FirstColumnCell isShowShadow={isShowLeftShadow}>
              <TokenCellContent
                logoUrl={item.logoUrl}
                tokenName={item.name}
                tokenAddress={item.address}
              />
            </FirstColumnCell>

            <TableCell>
              <TableCellFlexContent className="justify-center items-start">
                <CreatedCellContent createdTimestamp={item.createdAt} />
              </TableCellFlexContent>
            </TableCell>

            <CellWithDivider>{item.smartFollowersCount}</CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                <PropertyChangeText
                  value={item.smartFollowersCountChange}
                  isShowPositiveSymbol
                />
              </TableCellFlexContent>
            </TableCell>

            <CellWithDivider>{item.smartMentionsCount}</CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                {item.smartMentionsCountChange}
              </TableCellFlexContent>
            </TableCell>

            <CellWithDivider>
              <TxsCellContent
                txsBuyCount={item.txsBuyCount}
                txsSellCount={item.txsSellCount}
              />
            </CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                <PropertyChangeText value={item.txsCountChange} />
              </TableCellFlexContent>
            </TableCell>

            <CellWithDivider>
              <VolumeCellContent
                volumeBuy={Number(item.volumeBuy.USD)}
                volumeSell={Number(item.volumeSell.USD)}
              />
            </CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                {item.volumeChange.USD}
              </TableCellFlexContent>
            </TableCell>

            <TableCell>
              <TableCellFlexContent>${item.liquidity.USD}</TableCellFlexContent>
            </TableCell>

            <CellWithDivider>${item.marketCap.USD}</CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                {item.marketCapChange.USD}
              </TableCellFlexContent>
            </TableCell>

            <CellWithDivider>{item.holdersCount}</CellWithDivider>

            <TableCell className="pl-2">
              <TableCellFlexContent>
                {item.holdersCountChange}
              </TableCellFlexContent>
            </TableCell>

            <TableCell>
              <TableCellFlexContent className="items-start">
                <SecurityCellContent
                  securityIndicators={item.security.map((s) => s.status)}
                />
              </TableCellFlexContent>
            </TableCell>

            <LastColumnCell isShowShadow={isShowRightShadow}>
              <Button startContent={<PowerIcon className="w-4 h-4" />}>
                Buy
              </Button>
            </LastColumnCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
