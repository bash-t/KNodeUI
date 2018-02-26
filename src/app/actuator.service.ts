import { Injectable } from '@angular/core';
import { Actuator } from './actuator';
import { ACTUATORS } from './config/actuator.config';
import { MessageService } from './message.service';
import * as _ from 'lodash';

@Injectable()
export class ActuatorService {

  constructor(private messageService: MessageService) { }

  getActuators(): Actuator[] {
    this.messageService.add('all actuators loaded');
    return ACTUATORS;
  }

  getActuatorsByType(type: string): Actuator[] {
    return _.chain(ACTUATORS)
        .filter({'room': 'Kueche'})
      .value();
  }

}
