import { useMemo } from "react";
import type { ShareholderData, ShareholderTicker } from "@/shared/api/types";
import { transformShareholderData } from "./data-transform";

export const useShareholdersStructureTable = (
  data: ShareholderData[ShareholderTicker],
) => {
  const transformedData = useMemo(() => transformShareholderData(data), [data]);

  const tableColumns = useMemo(
    () => [
      {
        title: "Держатель акции",
        dataIndex: "holder",
        key: "holder",
      },
      {
        title: "% Доли",
        dataIndex: "share_percent",
        key: "share_percent",
      },
    ],
    [],
  );

  return {
    transformedData,
    tableColumns,
  };
};
