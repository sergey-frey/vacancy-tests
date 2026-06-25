import type { TaskEvent } from "./events";

export class WsMockClient {
  private _subscribers: ((event: TaskEvent) => void)[] = [];

  public on(cb: (event: TaskEvent) => void) {
    this._subscribers.push(cb);
  }

  public broadcast(event: TaskEvent) {
    console.log(`[broadcast] event: ${event.type}`, event);

    for (const cb of this._subscribers) {
      cb(event);
    }
  }
}
