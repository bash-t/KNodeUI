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
    this.getActuators();
  }

  getActuators(): void {
    //this.actuators = this.actuatorService.getActuators();
    //this.actuators = this.actuatorService.getActuatorsByType('kitchen');
    this.actuatorService.getActuators().subscribe(actuators => this.actuators = actuators);
  }

  getActuatorsByType(): void {
  /*const id = +this.route.snapshot.paramMap.get('id');
  this.actuatorService.getActuators(id)
    .subscribe(hero => this.hero = hero);*/
}

}
