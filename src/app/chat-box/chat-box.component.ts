import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  userName = "Angular Developer";

  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit() {
  }

  sendMsg(v: string) {
    let websocket = this.sharedDataService.websocket;
    this.sharedDataService.sendMsg(v);
  }
}