import { Component, OnInit, Input } from '@angular/core';
import { Actuator } from '../../../actuator';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() actuator: Actuator;

}
