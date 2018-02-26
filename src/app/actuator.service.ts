import { Injectable } from '@angular/core';
import { Actuator } from './actuator';
import { ACTUATORS } from './config/actuator.config';
import { MessageService } from './message.service';

@Injectable()
export class ActuatorService {

constructor(private messageService: MessageService) { }

  getActuators(): Actuator[] {
    this.messageService.add('all actuators loaded');
    return ACTUATORS;
  }

}
