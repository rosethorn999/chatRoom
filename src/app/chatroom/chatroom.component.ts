import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  constructor( private router : Router, private sharedDataService : SharedDataService) { }

  ngOnInit() {
    if (this.sharedDataService.thisUser == "" || typeof(this.sharedDataService.thisUser) == "undefined" ){
      this.router.navigateByUrl('/chathome');
    }
    else{
      let wsUrl: string = "ws://localhost/WebSocket/ws.ashx";
      this.sharedDataService.newSocket(wsUrl);
    }
  }

}
