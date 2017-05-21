import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  wsUrl = "ws://localhost/WebApplication1/ws.ashx"; //todo:到時候要統一命名
  websocket;
  room_list = ['user1', 'user2'];

  constructor() { }

  ngOnInit() {
    let self = this;
    this.websocket = new WebSocket(this.wsUrl + '?name=' + this.room_list[0]);
    this.websocket.onopen = function (evt) {
      debugger;
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


  setRoomList() {

  }

  changeRoom(index: any) {
    console.log(index);
  }


  onOpen(evt) { //client first thime touch server
    console.log("CONNECTED");
  }

  onMessage(evt) { //server call client
    console.log("onmessage" + evt.data);
    this.websocket.close();
  }

  onClose(evt) { //client close socket
    console.log("DISCONNECTED");
  }

  onError(evt) { //socket happen error
    console.log("ERROR" + evt.data);
  }
}
