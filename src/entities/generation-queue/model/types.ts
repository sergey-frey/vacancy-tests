export type QueueTaskStatus = "queued" | "in_progress" | "completed" | "error";

export interface QueueTask {
  id: string;
  name: string;
  model: string;
  credits: number;
  estimatedTime: number;
  progress: number;
  status: QueueTaskStatus;
  error?: string;
  createdAt: number;
}
