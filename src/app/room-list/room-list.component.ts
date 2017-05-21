import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './../shared-data.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  wsUrl = "ws://localhost/WebApplication1/ws.ashx"; //todo:到時候要統一命名
  websocket;
  room_list = ['user1', 'user2'];

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    let self = this;
    this.websocket = this.sharedDataService.newSocket(this.wsUrl + '?name=' + this.room_list[0]);
    this.sharedDataService.bindSocketEvent(
      function (evt) { self.onOpen(evt); },
      function (evt) { self.onClose(evt); },
      function (evt) { self.onMessage(evt); },
      function (evt) { self.onError(evt); });
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
