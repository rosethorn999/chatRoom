import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  private userName = "Angular Developer";
  private msgs: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  sendMsg(v: string) {
    this.msgs.push(v);
  }
}
