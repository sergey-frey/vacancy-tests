import { cn } from "@/shared/utils";
import { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  orientation?: "vertical";
};

export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <div
      {...props}
      className={cn("h-full w-[1px] bg-background-700", className)}
    ></div>
  );
};
