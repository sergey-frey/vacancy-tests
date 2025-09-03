import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import type { ShareholderData, ShareholderTicker } from "@/shared/api/types";
import { useShareholdersStructureChart } from "../model/use-shareholders-structure-chart";

interface ShareholdersChartProps {
  data: ShareholderData[ShareholderTicker];
}

export const ShareholdersChart = ({ data }: ShareholdersChartProps) => {
  const {
    chartData,
    activeIndex,
    handleMouseEnter,
    handleMouseLeave,
    CustomTooltip,
  } = useShareholdersStructureChart(data);

  return (
    <div className="shareholder_structure__chart_wrapper">
      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={150}
            dataKey="value"
            stroke="none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill}
                fillOpacity={
                  activeIndex === null || activeIndex === index ? 1 : 0.2
                }
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <ul className="shareholder_structure__chart_legend">
        {chartData.map((entry, index) => {
          return (
            <li
              key={`cell-${index}`}
              className="shareholder_structure__chart_legend_item"
            >
              <span
                className="shareholder_structure__chart_legend_item_color"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="shareholder_structure__chart_legend_item_text">
                {entry.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
