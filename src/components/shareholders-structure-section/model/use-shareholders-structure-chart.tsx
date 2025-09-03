import { useState, useMemo, useCallback } from "react";
import type { ShareholderData, ShareholderTicker } from "@/shared/api/types";
import { transformShareholderDataForChart } from "./data-transform";

export const useShareholdersStructureChart = (
  data: ShareholderData[ShareholderTicker],
) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const chartData = useMemo(
    () => transformShareholderDataForChart(data),
    [data],
  );

  const handleMouseEnter = useCallback((_: unknown, index: number) => {
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const CustomTooltip = useCallback(
    ({
      active,
      payload,
    }: {
      active?: boolean;
      payload?: Array<{ payload: { name: string; value: number } }>;
    }) => {
      if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
          <div className="shareholder_structure__tooltip">
            <div className="shareholder_structure__tooltip_content">
              <div className="shareholder_structure__tooltip_title">
                {data.name}
              </div>
              <div className="shareholder_structure__tooltip_value">
                {data.value.toFixed(2)} %
              </div>
            </div>
          </div>
        );
      }
      return null;
    },
    [],
  );

  return {
    chartData,
    activeIndex,
    handleMouseEnter,
    handleMouseLeave,
    CustomTooltip,
  };
};
