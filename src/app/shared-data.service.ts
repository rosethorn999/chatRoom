import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  constructor() { }

  //===================webSocket===================
  public websocket;
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
    let data: string = evt.data;

    if (data.indexOf("talk") > 0) {
      this.allMessages = JSON.parse(data);
      this.thisTalk = this.allMessages[this.thisRoomName].talk; //拆成某房間的訊息
      console.log(this.thisTalk);
    }
    console.log("onmessage" + data);
    // this.websocket.close();
  }

  onClose(evt) { //client close socket
    console.log("DISCONNECTED");
  }

  onError(evt) { //socket happen error
    console.log("ERROR" + evt.data);
  }

  //===================chat===================
  thisUser = "";
  thisRoomName = "";
  thisTalk = [];

  room_list = ['user1', 'user2'];
  allMessages = {};

  sendMsg(v) {
    //?name=user0&room=" + this.sharedDataService.thisRoomName
    let json = {
      "name": this.thisUser,
      "room": this.thisRoomName,
      "msg": v
    };
    this.websocket.send(JSON.stringify(json));
  }

  getThisTalk(){
    return this.thisTalk;
  }
}