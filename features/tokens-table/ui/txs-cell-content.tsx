import { ProportionLine, ProportionLineSegment } from "@/shared/ui";

type TxsCellContentProps = {
  txsBuyCount: number;
  txsSellCount: number;
};

export const TxsCellContent = ({
  txsBuyCount,
  txsSellCount,
}: TxsCellContentProps) => {
  const totalTxsCount = txsBuyCount + txsSellCount;
  const buyTxsPercent = totalTxsCount ? (txsBuyCount / totalTxsCount) * 100 : 0;
  const sellTxsPercent = totalTxsCount
    ? (txsSellCount / totalTxsCount) * 100
    : 0;

  return (
    <>
      <div className="flex flex-col gap-2 text-end">
        <span>${txsBuyCount + txsSellCount}</span>
        <ProportionLine className="w-14 h-1">
          <ProportionLineSegment
            widthPercents={buyTxsPercent}
            className="bg-success-400"
          />
          <ProportionLineSegment
            widthPercents={sellTxsPercent}
            className="bg-danger-400"
          />
        </ProportionLine>
      </div>
    </>
  );
};
