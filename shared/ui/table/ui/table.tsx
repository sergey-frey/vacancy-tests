import { cn } from "@/shared/utils";
import { RefObject, TableHTMLAttributes } from "react";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export const Table = ({ className, wrapperRef, ...props }: TableProps) => {
  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative w-full",
        "overflow-x-auto",
        "rounded-2 border border-background-700",
        "bg-background-800",
        className,
      )}
    >
      <table border={0} {...props} className="w-full border-0" />
    </div>
  );
};
