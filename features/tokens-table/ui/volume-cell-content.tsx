import { ProportionLine, ProportionLineSegment } from "@/shared/ui";

type VolumeCellContentProps = {
  volumeBuy: number;
  volumeSell: number;
};

export const VolumeCellContent = ({
  volumeBuy,
  volumeSell,
}: VolumeCellContentProps) => {
  const totalVolume = volumeBuy + volumeSell;
  const buyVolumePercent = totalVolume ? (volumeBuy / totalVolume) * 100 : 0;
  const sellVolumePercent = totalVolume ? (volumeSell / totalVolume) * 100 : 0;

  return (
    <>
      <div className="flex flex-col gap-2 items-end">
        <span>${volumeBuy + volumeSell}</span>
        <ProportionLine className="w-14 h-1">
          <ProportionLineSegment
            widthPercents={buyVolumePercent}
            className="bg-success-400"
          />
          <ProportionLineSegment
            widthPercents={sellVolumePercent}
            className="bg-danger-400"
          />
        </ProportionLine>
      </div>
    </>
  );
};
