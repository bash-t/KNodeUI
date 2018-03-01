import { Component, OnInit, Input } from '@angular/core';
import { Actuator } from '../../../actuator';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['../../actuators.component.css', './light.component.css']
})
export class LightComponent implements OnInit {

  constructor() { }

  isOn = false; //status of light

  ngOnInit() {
    //todo call service
  }

  toggleLight(): void {
    //todo call service, on callback set isOn
    this.isOn = !this.isOn;
  }

  @Input() actuator: Actuator;

}
