import { cn } from "@/shared/utils";

type PropertyChangeTextProps = {
  value: number;
  isShowPositiveSymbol?: boolean;
};

export const PropertyChangeText = ({
  value,
  isShowPositiveSymbol,
}: PropertyChangeTextProps) => {
  const isPositive = value > 0;
  const isNegative = value < 0;

  return (
    <span
      className={cn({
        "text-success-400": isPositive,
        "text-danger-400": isNegative,
      })}
    >
      {isPositive && isShowPositiveSymbol && "+"}
      {value}
    </span>
  );
};
