import { SharedDataService } from './../shared-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class ChatBoxComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) { }
  ngOnInit() {
  }

  inputBoxValue: string;

  sendMsg() {
    if (this.inputBoxValue != "" || typeof (this.inputBoxValue) != "undefined") {
      this.sharedDataService.sendMsg(this.inputBoxValue); //向後端發出一個訊息
      this.inputBoxValue = "";
    }
  }

  handleKeyboardEvents(e) {
    if (e.keyCode == 13) {
      console.log(this.inputBoxValue);
      this.sendMsg();
    }
  }
}