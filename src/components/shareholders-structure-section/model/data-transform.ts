import type { ShareholderData, ShareholderTicker } from "@/shared/api/types";
import { deduplicateArray } from "@/shared/utils/deduplicate-array";

export const transformShareholderData = (
  data: ShareholderData[ShareholderTicker],
) => {
  return data.map((item) => ({
    ...item,
    share_percent: `${Number(item.share_percent).toFixed(2)}%`,
  }));
};

export const transformShareholderDataForChart = (
  data: ShareholderData[ShareholderTicker],
) => {
  const deduplicated = deduplicateArray(data, (item) => item.holder);

  return deduplicated.map((item, index) => ({
    name: item.holder,
    value: Number(item.share_percent),
    fill: getChartColor(index),
  }));
};

const getChartColor = (index: number): string => {
  const colors = [
    "#69CDFF",
    "#FF5555",
    "#FFC94F",
    "#37D881",
    "#EC4899",
    "#F97316",
    "#F97316",
    "#10B981",
  ];
  return colors[index % colors.length];
};
