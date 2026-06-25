export const getTaskIcon = (model: string) => {
  const lower = model.toLowerCase();

  let icon = "◐";

  if (lower.includes("kling")) {
    icon = "▷";
  } else if (lower.includes("gpt") || lower.includes("claude")) {
    icon = "💬";
  } else if (lower.includes("eleven")) {
    icon = "♫";
  }

  return icon;
};
