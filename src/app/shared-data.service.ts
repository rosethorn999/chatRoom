import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  wsUrl = "ws://localhost/WebApplication1/ws.ashx"; //todo:到時候要統一命名
  websocket;

  constructor() { }

  bindSocketEvent(a, b, c, d) {
    this.websocket.onopen = a;
    this.websocket.onclose = b;
    this.websocket.onmessage = c;
    this.websocket.onerror = d;
  }

  newSocket(v: string) {
    this.websocket = new WebSocket(v);
    return this.websocket;
  }
}
