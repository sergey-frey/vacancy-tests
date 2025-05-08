"use client";

import { Table, TableProps } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { useTokensTable } from "../lib/use-tokens-table";
import { TokensTableBody } from "./tokens-table-body";
import { TokensTableHeader } from "./tokens-table-header";

import "../styles/index.css";

type TokensTableProps = TableProps;

export const TokensTable = ({ className, ...props }: TokensTableProps) => {
  const {
    data,
    isPlaceholderData,
    isShowLeftShadow,
    isShowRightShadow,
    scrollElemRef,
  } = useTokensTable();

  return (
    <Table
      {...props}
      wrapperRef={scrollElemRef}
      className={cn("font-medium", className)}
    >
      <TokensTableHeader
        isShowLeftShadow={isShowLeftShadow}
        isShowRightShadow={isShowRightShadow}
      />

      <TokensTableBody
        data={data?.items ?? []}
        isPlaceholderData={isPlaceholderData}
        isShowLeftShadow={isShowLeftShadow}
        isShowRightShadow={isShowRightShadow}
      />
    </Table>
  );
};
