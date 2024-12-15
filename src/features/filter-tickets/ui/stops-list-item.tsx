import { Checkbox } from "@/shared/ui/checkbox";
import { HTMLAttributes, ReactNode } from "react";
import { twJoin } from "tailwind-merge";

type StopsListItemProps = HTMLAttributes<HTMLDivElement> & {
  isChecked: boolean;
  text: string;
  onCheck: () => void;
  moreActions?: ReactNode;
};

export const StopsListItem = ({
  isChecked,
  text,
  onCheck,
  moreActions = <></>,
  className,
  ...props
}: StopsListItemProps) => {
  return (
    <div {...props} className={twJoin("flex items-center", className)}>
      <label className="inline-flex items-center grow">
        <Checkbox checked={isChecked} onCheckedChange={onCheck} />
        <p className="pl-2">{text}</p>
      </label>

      {moreActions}
    </div>
  );
};
