import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedDataService } from './shared-data.service';
import { ChathomeComponent } from './chathome/chathome.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AppRoutingModule } from './route.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    ChatBoxComponent,
    NavBarComponent,
    ChathomeComponent,
    ChatroomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
