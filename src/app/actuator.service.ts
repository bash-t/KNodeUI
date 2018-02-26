import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Actuator } from './actuator';
import { ACTUATORS } from './config/actuator.config';
import { MessageService } from './message.service';
import * as _ from 'lodash';

@Injectable()
export class ActuatorService {

  constructor(private messageService: MessageService) { }

  getDeviceTypes(): String[] {
    return _.chain(ACTUATORS)
      .map('type')
      .uniq()
      .value();
  }

  getActuators(): Observable<Actuator[]> {
    //todo display the message AFTER retrieving data
    this.messageService.add('all actuators loaded');
    return of(ACTUATORS);
  }

  getActuatorsByType(deviceType: string): Observable<Actuator[]> {
    //todo display the message AFTER retrieving data
    this.messageService.add(`all ${deviceType} actuators loaded`);
    return of(_.chain(ACTUATORS)
      .filter({ 'type': deviceType })
      .value());
  }

}
