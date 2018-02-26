import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private route: ActivatedRoute,
    private location: Location,
    private actuatorService: ActuatorService,
    private repeater: RepeatPipe
  ) { }

  actuators: Actuator[];

  ngOnInit() {

    switch (this.route.snapshot.routeConfig.path) {
      case 'type': {
        this.getActuators();

        break;
      }
      case 'type/:deviceType': {
        this.getActuatorsByType();
        break;
      }
      default: {
        this.getActuators();
        break;
      }
    }

  }

  getActuators(): void {
    this.actuatorService.getActuators().subscribe(actuators => this.actuators = actuators);
  }

  getActuatorsByType(): void {
    const deviceType = this.route.snapshot.paramMap.get('deviceType');
    this.actuatorService.getActuatorsByType(deviceType).subscribe(actuators => this.actuators = actuators);
  }

}
