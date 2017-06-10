import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  userName = "Angular Developer";
  msgs = this.sharedDataService.thisTalk;

  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit() {
  }

  sendMsg(v: string) {
    let websocket = this.sharedDataService.websocket;

    this.sharedDataService.sendMsg(v);
    this.msgs = this.sharedDataService.getThisTalk();
    console.log(this.msgs);
  }
}