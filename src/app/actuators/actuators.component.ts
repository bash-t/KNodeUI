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

  actuators: Actuator[]; //obsolete
  //actuator$: Observable<Actuator[]>;
  actuator$: Actuator[];
  selectedDeviceType: string;

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      this.selectedDeviceType = params['deviceType'];
      // -- Initialization code -- 
      if (this.selectedDeviceType) {
        this.getActuatorsByTypeNew();
      } else {
        this.getActuators();
      }
    });

    /*this.actuator$ = this.route.paramMap
    .switchMap((params: ParamMap) => {
      // (+) before `params.get()` turns the string into a number
        //this.selectedId = +params.get('id');
      return this.actuatorService.getActuators()
    });*/

  }

  /*
      switch (this.route.snapshot.routeConfig.path) {
        case 'type/:deviceType': {
         this.getActuatorsByType();
             
            
          break;
        }
          case 'type': {
          this.getActuators();
  
          break;
        }
        
        default: {
          this.getActuators();
          break;
        }
      }
  */


  getActuatorsByTypeNew(): void {
    this.actuatorService.getActuatorsByType(this.selectedDeviceType).subscribe(actuators => this.actuator$ = actuators);
  }


  getActuators(): void {
    this.actuatorService.getActuators().subscribe(actuators => this.actuator$ = actuators);
  }

  getActuatorsByType(): void {
    const deviceType = this.route.snapshot.paramMap.get('deviceType');
    this.actuatorService.getActuatorsByType(deviceType).subscribe(actuators => this.actuators = actuators);
  }

}
