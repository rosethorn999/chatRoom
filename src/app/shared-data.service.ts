import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

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

    if (data.indexOf("msg") == -1) { //後端有訊息要告知
      console.log(data);
    } else { //回傳正規資料
      let newMsg = JSON.parse(data);
      let room = newMsg["room"];
      let name = newMsg["name"];
      let msg = newMsg["msg"];
      if (this.allMessages[room] !== undefined) {
        this.allMessages[room]["talk"].push({ "name": name, "message": msg });
      } else {
        this.allMessages[room] = { "talk": [{ "name": name, "message": msg }] };
      }
    }
  }

  onClose(evt) { //client close socket
    console.log("onClose:");
  }

  onError(evt) { //socket happen error
    console.log("onError: " + evt.data);
  }

  //===================chat===================
  public thisUser = "";
  public thisRoomName = null;
  public thisTalk: Array<Object> = [];

  public room_list = ['user1', 'user2'];
  public allMessages = {};

  sendMsg(v) {
    //?name=user0&room=" + this.sharedDataService.thisRoomName
    let json = {
      "name": this.thisUser,
      "room": this.thisRoomName,
      "msg": v
    };
    this.websocket.send(JSON.stringify(json));
  }

}