interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-1.25 rounded-full overflow-hidden shrink-0 bg-(--c-bg-3)">
      <div
        className="h-full rounded-full transition-all duration-500 bg-[linear-gradient(90deg,#E85420_0%,#ff7a3d_100%)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
