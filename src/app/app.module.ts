import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgPipesModule } from 'ng-pipes';


import { AppComponent } from './app.component';
import { ActuatorsComponent } from './actuators/actuators.component';
import { ActuatorService } from './actuator.service';


@NgModule({
  declarations: [
    AppComponent,
    ActuatorsComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule
  ],
  providers: [ActuatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
