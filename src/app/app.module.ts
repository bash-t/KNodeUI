import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ng-pipes';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';


import { AppComponent } from './app.component';
import { ActuatorsComponent } from './actuators/actuators.component';
import { ActuatorService } from './actuator.service';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    ActuatorsComponent,
    MenuComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    CollapseModule,
    AlertModule.forRoot()
    //  BsDropdownModule.forRoot()
  ],
  providers: [ActuatorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
