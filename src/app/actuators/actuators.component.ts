import { Component, OnInit } from '@angular/core';
import { Actuator } from '../actuator';

import { RepeatPipe } from 'ng-pipes';

import { ActuatorService } from '../actuator.service';

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.css'],
  providers: [RepeatPipe]
})
export class ActuatorsComponent implements OnInit {

  constructor(
    private actuatorService: ActuatorService,
    private repeater: RepeatPipe
  ) { }

  actuators: Actuator[];

  ngOnInit() {
    this.getActuators();
  }

  getActuators(): void {
    this.actuators = this.actuatorService.getActuators();
  }

  //getActuatorsByType():

}
