import { Table } from "antd";
import type { ShareholderData, ShareholderTicker } from "@/shared/api/types";
import { useShareholdersStructureTable } from "../model/use-shareholders-structure-table";
import { formatDate, dateFormats } from "@/shared/utils/date-utils";

interface ShareholdersTableProps {
  data: ShareholderData[ShareholderTicker];
}

export const ShareholdersTable = ({ data }: ShareholdersTableProps) => {
  const { transformedData, tableColumns } = useShareholdersStructureTable(data);

  return (
    <div className="shareholder_structure__table_wrapper">
      <Table
        columns={tableColumns}
        dataSource={transformedData}
        pagination={false}
      />

      <p className="shareholder_structure__update_date">
        Дата последнего обновления этой структуры:{" "}
        <time>{formatDate(new Date(), dateFormats.shortDate)}</time>
      </p>
    </div>
  );
};
