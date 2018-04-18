import { ChathomeComponent } from './chathome/chathome.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

const routes: Routes = [
    { path: '', component : ChathomeComponent},
    { path: 'chathome' , component : ChathomeComponent },
    { path: 'chatroom' , component : ChatroomComponent },
    { path: '**' , redirectTo : './chathome' , pathMatch: 'full' },
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}