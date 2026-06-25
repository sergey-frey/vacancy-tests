import { RotateCw, X } from "lucide-react";
import type { QueueTask } from "@/entities/generation-queue";
import { cn } from "@/shared/lib/utils";

interface ActionButtonsProps {
  task: QueueTask;
  onRemove: (id: string) => void;
  onRetry: (id: string) => void;
}

const iconBtn = cn(
  "flex items-center justify-center rounded-sm",
  "w-8.5 h-8.5 sm:w-8 sm:h-8",
  "border border-border bg-secondary",
  "hover:bg-card hover:text-foreground text-muted-foreground transition-colors",
);

export function ActionButtons({ task, onRemove, onRetry }: ActionButtonsProps) {
  const isDone = task.status === "completed" || task.status === "error";

  return (
    <div className="flex items-center gap-1.5">
      {task.status === "error" && (
        <button
          type="button"
          onClick={() => onRetry(task.id)}
          className={iconBtn}
          title="Перезапустить"
        >
          <RotateCw size={13} className="text-(--c-accent-2)" />
        </button>
      )}

      {task.status !== "error" && (
        <button
          type="button"
          onClick={() => onRemove(task.id)}
          className={iconBtn}
          title={isDone ? "Убрать" : "Отменить"}
        >
          <X size={13} />
        </button>
      )}

      <button type="button" className={iconBtn} title="Дополнительно">
        <span className="text-sm leading-none">⋯</span>
      </button>
    </div>
  );
}
