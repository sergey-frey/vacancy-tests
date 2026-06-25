export type TaskEventType =
  | "add-task"
  | "progress-task"
  | "complete-task"
  | "error-task";

type TaskEventBase<
  Type extends TaskEventType,
  T extends Record<string | symbol | number, unknown>,
> = {
  type: Type;
  payload: T;
};

type AddTaskEvent = TaskEventBase<
  "add-task",
  {
    id: string;
  }
>;

type ProgressTaskEvent = TaskEventBase<
  "progress-task",
  {
    id: string;
    progress: number;
  }
>;

type CompleteTaskEvent = TaskEventBase<
  "complete-task",
  {
    id: string;
  }
>;

type ErrorTaskEvent = TaskEventBase<
  "error-task",
  {
    id: string;
    detail: string;
  }
>;

export type TaskEvent =
  | AddTaskEvent
  | ProgressTaskEvent
  | CompleteTaskEvent
  | ErrorTaskEvent;
