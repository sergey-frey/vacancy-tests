import { ClockIcon } from "@/shared/ui/icons";

type CreatedCellContentProps = { createdTimestamp: number };

export const CreatedCellContent = ({
  createdTimestamp,
}: CreatedCellContentProps) => {
  const time = new Date(createdTimestamp - Date.now()).toLocaleString("en-US", {
    second: "numeric",
  });

  return (
    <div className="flex gap-1 items-center">
      <ClockIcon />
      <time dateTime={new Date(createdTimestamp).toISOString()}>{time}s</time>
    </div>
  );
};
