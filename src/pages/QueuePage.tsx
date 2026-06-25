import { ChevronDown, Inbox } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  type QueueTaskStatus,
  useQueueStore,
} from "@/entities/generation-queue";
import { useQueueWsSync } from "@/features/generation-queue/model/useQueueWsSync";
import { QueueTaskItem } from "@/features/generation-queue/ui/QueueTaskItem";
import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

type FilterValue = "all" | QueueTaskStatus;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "queued", label: "В очереди" },
  { value: "in_progress", label: "Идёт" },
  { value: "completed", label: "Готово" },
  { value: "error", label: "Ошибка" },
];

const SORT_OPTIONS = [
  { value: "newest", label: "Сначала новые" },
  { value: "oldest", label: "Сначала старые" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

const STATS_CONFIG = [
  { key: "queued", label: "В очереди", dotCls: "bg-muted-foreground" },
  { key: "in_progress", label: "Идёт", dotCls: "bg-(--c-accent-2)" },
  { key: "completed", label: "Готово", dotCls: "bg-emerald-400" },
  { key: "error", label: "Ошибка", dotCls: "bg-red-400" },
] as const;

export default function QueuePage() {
  useQueueWsSync();

  useEffect(() => {
    document.title = "ERA2 — Очередь генераций";
  }, []);

  const { tasks, removeTask, clearCompleted, retryTask } = useQueueStore();
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sort, setSort] = useState<SortValue>("newest");

  const stats = useMemo(
    () => ({
      queued: tasks.filter((t) => t.status === "queued").length,
      in_progress: tasks.filter((t) => t.status === "in_progress").length,
      completed: tasks.filter((t) => t.status === "completed").length,
      error: tasks.filter((t) => t.status === "error").length,
    }),
    [tasks],
  );

  const filtered = useMemo(() => {
    const list = tasks.filter((t) => filter === "all" || t.status === filter);
    if (sort === "oldest") return [...list].reverse();
    return list;
  }, [tasks, filter, sort]);

  const hasCompleted = stats.completed > 0;
  const isQueueEmpty = tasks.length === 0;
  const emptyTitle = isQueueEmpty ? "Очередь пуста" : "Нет задач в этой категории";
  const emptySubtitle = isQueueEmpty
    ? "Задачи появятся, когда вы запустите генерацию"
    : "Попробуйте сменить фильтр";

  return (
    <div className="min-h-[calc(100vh-var(--header-height,64px))]">
      <div className="max-w-280 mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
        {/* Title row */}
        <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h1 className="text-[32px] font-semibold tracking-tight leading-tight text-foreground">
              Очередь генераций
            </h1>
            <p className="text-sm mt-1 text-muted-foreground">
              Все ваши задачи в реальном времени
            </p>
          </div>
          {hasCompleted && (
            <button
              type="button"
              onClick={clearCompleted}
              className="inline-flex items-center h-10 px-4 rounded-xl border border-border text-sm font-medium text-(--c-fg-dim) transition-colors hover:bg-secondary"
            >
              Очистить готовые
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {STATS_CONFIG.map((stat) => (
            <div
              key={stat.key}
              className="flex flex-col gap-2 px-4.5 py-4 rounded-[16px] border border-border bg-card"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn("w-2 h-2 rounded-full shrink-0", stat.dotCls)}
                />
                <span className="text-[13px] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
              <span className="text-7 font-bold font-mono leading-none text-foreground">
                {stats[stat.key]}
              </span>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-5 overflow-x-auto pb-0.5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
          {/* Filter chips */}
          <div className="flex items-center gap-2 shrink-0">
            {FILTERS.map((f) => {
              const isActive = filter === f.value;
              return (
                <button
                  type="button"
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "inline-flex items-center gap-1.5 h-8.5 px-3.5 rounded-full border text-[13px] font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-primary text-white border-transparent"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40 bg-secondary",
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-border mx-1 shrink-0" />

          {/* Sort */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 h-8.5 pl-3.5 pr-3 rounded-full border border-border bg-secondary text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap shrink-0"
              >
                {SORT_OPTIONS.find((s) => s.value === sort)?.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[160px]">
              {SORT_OPTIONS.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setSort(opt.value)}
                  className={cn(
                    "text-[13px] cursor-pointer",
                    sort === opt.value && "font-medium text-foreground",
                  )}
                >
                  {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Task list */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-24">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-accent text-primary border border-primary/25">
              <Inbox size={24} strokeWidth={1.8} />
            </div>

            <h2 className="text-xl font-semibold text-foreground mb-1.5">{emptyTitle}</h2>
            <p className="text-sm text-muted-foreground">{emptySubtitle}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {filtered.map((task) => (
              <QueueTaskItem
                key={task.id}
                task={task}
                onRemove={removeTask}
                onRetry={retryTask}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
