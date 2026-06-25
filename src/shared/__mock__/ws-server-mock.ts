import { nanoid } from "nanoid";
import type { WsMockClient } from "./ws-client-mock";

const MOCK_TASKS = [
  {
    name: "Неоновый киберпанк-город под дождём, вид сверху",
    model: "Midjourney v6",
    credits: 80,
    estimatedTime: 30,
  },
  {
    name: "Дрон-облёт горного озера на рассвете, 5 сек",
    model: "Kling 3.0",
    credits: 150,
    estimatedTime: 120,
  },
  {
    name: "Сценарий рекламного ролика для кофейни, 30 секунд",
    model: "GPT-4o",
    credits: 6,
    estimatedTime: 15,
  },
  {
    name: "Озвучка приветствия мужским голосом",
    model: "ElevenLabs",
    credits: 20,
    estimatedTime: 8,
  },
  {
    name: "Постер в стиле ретро-футуризм 80-х",
    model: "Seedream",
    credits: 45,
    estimatedTime: 25,
  },
];

export class WsServerMock {
  constructor(wsClient: WsMockClient) {
    const tasks: Array<{ id: string; meta: typeof MOCK_TASKS[number] }> = [];

    for (let i = 0; i < MOCK_TASKS.length; ++i) {
      tasks.push({ id: nanoid(), meta: MOCK_TASKS[i] });
    }

    let taskIndex = 0;

    const addInterval = setInterval(() => {
      if (taskIndex === tasks.length) {
        clearInterval(addInterval);
        return;
      }

      const task = tasks[taskIndex];
      wsClient.broadcast({
        type: "add-task",
        payload: {
          id: task.id,
          name: task.meta.name,
          model: task.meta.model,
          credits: task.meta.credits,
          estimatedTime: task.meta.estimatedTime,
        },
      });

      // Start progress simulation after a short delay
      const taskId = task.id;
      const totalTime = task.meta.estimatedTime;
      const shouldError = taskIndex === 3; // 4th task gets error

      setTimeout(() => {
        let progress = 0;
        const step = 100 / 20;

        const progressInterval = setInterval(() => {
          progress = Math.min(progress + step + Math.random() * 5, 100);
          const remaining = Math.round(totalTime * (1 - progress / 100));

          wsClient.broadcast({
            type: "progress-task",
            payload: {
              id: taskId,
              progress: Math.round(progress),
              estimatedTime: remaining,
            },
          });

          if (progress >= 100) {
            clearInterval(progressInterval);

            if (shouldError) {
              wsClient.broadcast({
                type: "error-task",
                payload: { id: taskId, detail: "Недостаточно кредитов" },
              });
            } else {
              wsClient.broadcast({
                type: "complete-task",
                payload: { id: taskId },
              });
            }
          }
        }, 600);
      }, 1000 + taskIndex * 500);

      ++taskIndex;
    }, 2000);
  }
}
