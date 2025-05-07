import { cn } from "@/shared/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  startContent?: ReactNode;
};

export const Button = ({
  className,
  children,
  startContent,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex px-4 py-2.5 items-center gap-2",
        "leading-xl font-medium text-foreground-900",
        "bg-background-700 border border-background-700",
        "rounded-1.5",
        "cursor-pointer transition-all",
        "hover:bg-background-800",
        "active:scale-95",
        className,
      )}
    >
      <span>{startContent}</span>
      {children}
    </button>
  );
};
