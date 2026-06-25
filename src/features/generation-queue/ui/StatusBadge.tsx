import { cn } from "@/shared/lib/utils";

interface StatusBadgeProps {
  label: string;
  badgeCls: string;
}

export function StatusBadge({ label, badgeCls }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-1 rounded-sm text-xs font-medium", badgeCls)}>
      {label}
    </span>
  );
}
