import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ng-pipes';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ActuatorsComponent } from './actuators/actuators.component';
import { ActuatorService } from './actuator.service';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { LightComponent } from './actuators/types/light/light.component';
import { RollerBlindComponent } from './actuators/types/roller-blind/roller-blind.component';
import { JalousieComponent } from './actuators/types/jalousie/jalousie.component';
import { HeatingComponent } from './actuators/types/heating/heating.component';



@NgModule({
  declarations: [
    AppComponent,
    ActuatorsComponent,
    MenuComponent,
    MessagesComponent,
    LightComponent,
    RollerBlindComponent,
    JalousieComponent,
    HeatingComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    CollapseModule,
    AlertModule.forRoot(),
    AppRoutingModule
    //  BsDropdownModule.forRoot()
  ],
  providers: [ActuatorService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
