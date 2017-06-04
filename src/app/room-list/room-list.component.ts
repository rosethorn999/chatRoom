import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { SharedDataService } from './../shared-data.service';
import { EventEmitter } from "events";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  room_list = this.sharedDataService.room_list;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() { }

  setRoomList() { }

  changeRoom(name: any) {
    this.sharedDataService.thisRoomName = name;
    console.log(name);
  }
}
