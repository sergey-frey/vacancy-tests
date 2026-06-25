import { cn } from "@/shared/lib/utils";
import { getTaskIcon } from "../model/get-task-icon";

interface TaskThumbProps {
  model: string;
}

export function TaskThumb({ model }: TaskThumbProps) {
  const icon = getTaskIcon(model);
  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 rounded-[12px]",
        "w-12 h-12 sm:w-14 sm:h-14",
        "bg-[linear-gradient(135deg,rgb(59,26,10)_0%,rgb(26,22,20)_70%)]",
      )}
    >
      <span className="text-lg sm:text-xl text-(--c-accent-2)">{icon}</span>
    </div>
  );
}
