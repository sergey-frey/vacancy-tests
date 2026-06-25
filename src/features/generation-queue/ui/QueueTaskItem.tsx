import type { QueueTask } from "@/entities/generation-queue";
import { cn } from "@/shared/lib/utils";
import { getMetaText } from "../model/get-meta-text";
import { statusConfig } from "../model/status-config";
import { ActionButtons } from "./ActionButtons";
import { ProgressBar } from "./ProgressBar";
import { StatusBadge } from "./StatusBadge";
import { TaskThumb } from "./TaskThumb";

interface QueueTaskItemProps {
  task: QueueTask;
  onRemove: (id: string) => void;
  onRetry: (id: string) => void;
}

export function QueueTaskItem({ task, onRemove, onRetry }: QueueTaskItemProps) {
  const cfg = statusConfig[task.status];
  const metaText = getMetaText(task);
  const showProgress = task.status === "in_progress";
  const showProgressBar = task.status === "in_progress" || task.status === "queued";

  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-3.5 rounded-[16px] border transition-colors bg-card",
        "sm:flex-row sm:items-center sm:gap-4 sm:px-4 sm:py-3.5",
        cfg.cardBorder,
      )}
    >
      {/* Top row (mobile) / Left section (desktop) */}
      <div className="flex gap-3 items-start sm:flex-1 sm:min-w-0 sm:items-center sm:gap-4">
        <TaskThumb model={task.model} />

        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <p className="text-[15px] font-medium text-foreground line-clamp-2 sm:truncate sm:line-clamp-none">
            {task.name}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <div className="flex items-center gap-1.5 px-2 py-0.75 rounded-full shrink-0 bg-secondary">
              <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-(--c-accent-2)" />
              <span className="font-mono text-xs whitespace-nowrap text-(--c-fg-dim)">
                {task.model}
              </span>
            </div>
            <span className="hidden sm:inline text-xs text-(--c-fg-low)">·</span>
            <span className="text-xs whitespace-nowrap text-muted-foreground">{metaText}</span>
          </div>

          {/* Progress bar — desktop only */}
          {showProgressBar && (
            <div className="hidden sm:block">
              <ProgressBar progress={task.progress} />
            </div>
          )}
        </div>
      </div>

      {/* Progress bar — mobile only */}
      {showProgressBar && (
        <div className="sm:hidden">
          <ProgressBar progress={task.progress} />
        </div>
      )}

      {/* Bottom row — mobile only */}
      <div className="flex items-center justify-between sm:hidden">
        <div className="flex items-center gap-2">
          <StatusBadge badgeCls={cfg.badgeCls} label={cfg.label} />
          {showProgress && (
            <span className="font-mono text-[13px] font-medium text-(--c-accent-2)">
              {task.progress}%
            </span>
          )}
        </div>
        <ActionButtons task={task} onRemove={onRemove} onRetry={onRetry} />
      </div>

      {/* Right section — desktop only */}
      <div className="hidden sm:flex items-center gap-3 shrink-0">
        {showProgress && (
          <span className="font-mono text-[13px] font-medium text-(--c-accent-2)">
            {task.progress}%
          </span>
        )}
        <StatusBadge badgeCls={cfg.badgeCls} label={cfg.label} />
        <ActionButtons task={task} onRemove={onRemove} onRetry={onRetry} />
      </div>
    </div>
  );
}
