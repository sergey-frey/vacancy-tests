import { SorterIcon } from "@/shared/ui/icons";
import { ReactNode } from "react";

type WithSorterButtonProps = { children?: ReactNode };

export const WithSorterButton = ({ children }: WithSorterButtonProps) => {
  return (
    <span className="flex items-center gap-[2.5px]">
      <SorterIcon />
      {children}
    </span>
  );
};
