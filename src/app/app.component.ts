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
  }
}
