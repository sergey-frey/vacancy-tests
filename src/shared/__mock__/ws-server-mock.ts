import { nanoid } from "nanoid";
import type { WsMockClient } from "./ws-client-mock";

export class WsServerMock {
  constructor(wsClient: WsMockClient) {
    const tasks: string[] = [];

    for (let i = 0; i < 5; ++i) {
      tasks.push(nanoid());
    }

    console.log(tasks);

    let i = 0;

    const interval = setInterval(() => {
      if (i === tasks.length) {
        return clearInterval(interval);
      }

      wsClient.broadcast({
        type: "add-task",
        payload: {
          id: tasks[i],
        },
      });

      ++i;
    }, 2000);
  }
}
