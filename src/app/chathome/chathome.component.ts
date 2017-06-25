import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-chathome',
  templateUrl: './chathome.component.html',
  styleUrls: ['./chathome.component.css']
})
export class ChathomeComponent implements OnInit {

  constructor(private shartdateserve : SharedDataService , public router:Router) { }
  username : string = "";
  tip_disable : boolean;
  ngOnInit() {
    this.tip_disable = true;
  }

  setUserName(){
    if (this.username.length != 0){
      this.shartdateserve.thisUser = this.username;
      this.router.navigateByUrl('/chatroom');
    }
    else{
      this.tip_disable = false;
    }
  }

}
