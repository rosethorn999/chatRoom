import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  wsUrl = "ws://jsonbin.org/lioufongkia/test";
  websocket;
  room_list = ['user1', 'user2'];

  constructor() { }

  ngOnInit() {
    let headers = [];
    headers[0] = "Authorization", "token e482852d-34f2-448b-a073-640574badeb3";
    headers[1] = "Content-Type", "application/json";
    this.websocket = new WebSocket(this.wsUrl,headers);
    this.websocket.onopen = function (evt) {
      this.onOpen(evt)
    };
    this.websocket.onclose = function (evt) {
      this.onClose(evt)
    };
    this.websocket.onmessage = function (evt) {
      this.onMessage(evt)
    };
    this.websocket.onerror = function (evt) {
      this.onError(evt)
    };
  }

  setRoomList() {

  }

  changeRoom(index: any) {
    console.log(index);
  }

  onOpen(evt) {
    console.log("CONNECTED"); 
  }

  onMessage(evt){
    console.log("onmessage" + evt.data);
    this.websocket.close();
  }

  onClose(evt) {
    console.log("DISCONNECTED"); 
  }

  onError(evt) {
    console.log("ERROR" + evt.data);     
  }

}
