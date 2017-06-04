import { SharedDataService } from './shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chat Room';
  room_list = this.sharedDataService.room_list;

  websocket;
  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.thisUser = prompt('please keyin your userName', 'user0');

    let wsUrl: string = "ws://localhost/WebSocket/ws.ashx";
    this.sharedDataService.newSocket(wsUrl);
  }
}
