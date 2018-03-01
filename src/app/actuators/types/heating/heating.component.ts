import { Component, OnInit, Input } from '@angular/core';
import { Actuator } from '../../../actuator';

@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['../../actuators.component.css', './heating.component.css']
})
export class HeatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() actuator: Actuator;

}
