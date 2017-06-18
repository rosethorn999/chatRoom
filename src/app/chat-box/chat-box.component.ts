import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  userName = this.sharedDataService.thisUser;//"Angular Developer";

  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit() {
  }

  sendMsg(v: string) {
    this.sharedDataService.sendMsg(v); //向後端發出一個訊息
  }
}