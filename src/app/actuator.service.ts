import { Injectable } from '@angular/core';
import { Actuator } from './actuator';
import { ACTUATORS } from './config/actuator.config';

@Injectable()
export class ActuatorService {

  constructor() { }

  getActuators(): Actuator[] {
    return ACTUATORS;
  }

}
