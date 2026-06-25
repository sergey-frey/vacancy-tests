import { useEffect } from "react";
import { useQueueStore } from "@/entities/generation-queue";
import type { TaskEvent } from "@/shared/__mock__/events";
import { useWsMockClient } from "@/shared/__mock__/WsMockClientContext";

export function useQueueWsSync() {
  const wsClient = useWsMockClient();
  const { addTask, updateProgress, completeTask, errorTask } = useQueueStore();

  useEffect(() => {
    const handler = (event: TaskEvent) => {
      switch (event.type) {
        case "add-task":
          addTask({
            id: event.payload.id,
            name: event.payload.name,
            model: event.payload.model,
            credits: event.payload.credits,
            estimatedTime: event.payload.estimatedTime,
          });
          break;
        case "progress-task":
          updateProgress(
            event.payload.id,
            event.payload.progress,
            event.payload.estimatedTime,
          );
          break;
        case "complete-task":
          completeTask(event.payload.id);
          break;
        case "error-task":
          errorTask(event.payload.id, event.payload.detail);
          break;
      }
    };

    wsClient.on(handler);

    return () => {
      wsClient.off(handler);
    };
  }, [wsClient, addTask, updateProgress, completeTask, errorTask]);
}
