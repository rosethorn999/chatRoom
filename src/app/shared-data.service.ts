import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

  //===================webSocket===================
  public websocket;

  constructor() { }

  newSocket(v: string) {
    let self = this;
    this.websocket = new WebSocket(v);
    this.websocket.onopen = function (evt) {
      self.onOpen(evt);
    };
    this.websocket.onclose = function (evt) {
      self.onClose(evt);
    };
    this.websocket.onmessage = function (evt) {
      self.onMessage(evt);
    };
    this.websocket.onerror = function (evt) {
      self.onError(evt);
    };
  }

  onOpen(evt) { //client first time touch server
    console.log("CONNECTED");
  }

  onMessage(evt) { //server call client
    debugger;
    let data = evt.data;
    console.log("onmessage" + data);
    // this.websocket.close();
  }

  onClose(evt) { //client close socket
    console.log("DISCONNECTED");
  }

  onError(evt) { //socket happen error
    console.log("ERROR" + evt.data);
  }

  //===================roomList===================
  room_list = ['user1', 'user2'];

}
