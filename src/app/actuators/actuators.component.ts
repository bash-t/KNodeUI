import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  selectedDeviceType: string;

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.selectedDeviceType = params['deviceType'];
      // -- Initialization code -- 
      if (this.selectedDeviceType) {
        this.actuatorService.getActuatorsByType(this.selectedDeviceType).subscribe(actuators => this.actuators = actuators);
      } else {
        this.actuatorService.getActuators().subscribe(actuators => this.actuators = actuators);
      }
    });

    /*getActuatorsByType(): void {
      const deviceType = this.route.snapshot.paramMap.get('deviceType');
      this.actuatorService.getActuatorsByType(deviceType).subscribe(actuators => this.actuators = actuators);
    }*/
  }
}
