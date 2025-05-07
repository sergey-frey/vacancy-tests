import { cn } from "@/shared/utils";
import { HTMLAttributes } from "react";

type ProportionLineProps = HTMLAttributes<HTMLDivElement> & {};

export const ProportionLine = ({
  className,
  ...props
}: ProportionLineProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex rounded-full bg-background-700 overflow-hidden",
        className,
      )}
    />
  );
};

type ProportionLineSegmentProps = HTMLAttributes<HTMLDivElement> & {
  widthPercents: number;
};

export const ProportionLineSegment = ({
  className,
  widthPercents,
  ...props
}: ProportionLineSegmentProps) => {
  return (
    <div
      {...props}
      style={{ width: `${widthPercents}%` }}
      className={cn("h-full", className)}
    />
  );
};
