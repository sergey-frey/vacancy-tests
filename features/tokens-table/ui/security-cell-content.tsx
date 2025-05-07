import { CrossIcon, OkIcon } from "@/shared/ui/icons";

type SecurityCellContentProps = {
  securityIndicators: boolean[];
};

export const SecurityCellContent = ({
  securityIndicators,
}: SecurityCellContentProps) => {
  return (
    <div className="flex gap-2.5 items-center w-full">
      {securityIndicators.map((indicator, index) => {
        return indicator ? (
          <OkIcon key={index} className="text-success-400 w-4 h-4" />
        ) : (
          <CrossIcon key={index} className="text-danger-400 w-4 h-4" />
        );
      })}
    </div>
  );
};
