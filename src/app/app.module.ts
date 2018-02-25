import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ng-pipes';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { AppComponent } from './app.component';
import { ActuatorsComponent } from './actuators/actuators.component';
import { ActuatorService } from './actuator.service';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ActuatorsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    CollapseModule
    //  BsDropdownModule.forRoot()
  ],
  providers: [ActuatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
