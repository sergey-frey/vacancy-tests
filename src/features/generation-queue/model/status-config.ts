export const statusConfig = {
  queued: {
    label: "В очереди",
    badgeCls: "bg-secondary text-muted-foreground",
    cardBorder: "border-border",
  },
  in_progress: {
    label: "Идёт",
    badgeCls: "bg-accent text-(--c-accent-2)",
    cardBorder: "border-[rgba(232,84,32,0.35)]",
  },
  completed: {
    label: "Готово",
    badgeCls: "bg-emerald-500/10 text-emerald-400",
    cardBorder: "border-border",
  },
  error: {
    label: "Ошибка",
    badgeCls: "bg-destructive/10 text-destructive",
    cardBorder: "border-border",
  },
} as const;

export type StatusConfig = (typeof statusConfig)[keyof typeof statusConfig];
