import type { QueueTask } from "@/entities/generation-queue";

function formatTime(seconds: number): string {
  if (seconds < 60) return `≈ ${seconds} сек`;
  return `≈ ${Math.round(seconds / 60)} мин`;
}

export function getMetaText(task: QueueTask): string {
  switch (task.status) {
    case "in_progress":
    case "queued":
      return `${formatTime(task.estimatedTime)} · ${task.credits} cr`;
    case "completed":
      return `за ${formatTime(task.estimatedTime)} · ${task.credits} cr`;
    default:
      return task.error ?? `${task.credits} cr`;
  }
}
